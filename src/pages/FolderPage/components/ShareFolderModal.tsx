import { SearchableSelector } from "@components/SearchableSelector";
import {
  Folder,
  GetUsersBySearchPaginationDocument,
  GetUsersBySearchPaginationQueryVariables,
  User,
  useGetPeopleWithAccessToFolderQuery,
  useSetGeneralFolderAccessMutation,
} from "@generated/schemas";
import { useAlert } from "@hooks/useAlert";
import useCurrentUser from "@hooks/useCurrentUser";
import { getBase64StringOfImage, getGeneratedAvatar } from "@utils/tools";
import {
  Avatar,
  Button,
  List,
  Modal,
  Radio,
  Spin,
  Typography,
  message,
} from "antd";
import { useMemo, useState } from "react";
import { UserRole } from "src/common/types";
import { AddUserModal } from "./AddUserModal";
import { SwitchRoleDropdown } from "./SwitchRoleDropdown";
import { LinkOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  handleClose: () => void;
  folder: Folder;
}

export const ShareFolderModal = ({ open, handleClose, folder }: Props) => {
  const { ID: currentUserID } = useCurrentUser();
  const { showErrorNotification, showSuccessNotification } = useAlert();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<"Private" | "Public">(
    "Private"
  );

  const [setGeneralFolderAccess, { loading: isSetGeneralAccessLoading }] =
    useSetGeneralFolderAccessMutation();

  const {
    data: peopleWithAccess,
    refetch: refetchAccessPeople,
    loading: isLoadingAccessPeople,
  } = useGetPeopleWithAccessToFolderQuery({
    variables: {
      folderID: folder.ID,
    },
    onCompleted: (data) => {
      setSelectedOptions(
        data.getPeopleWithAccessToFolder.isPublic ? "Public" : "Private"
      );
    },
    fetchPolicy: "cache-and-network",
  });

  const handleCloseAddUserModal = () => {
    setSelectedUser(null);
  };

  const handleChangeGeneralAccess = async (value: "Private" | "Public") => {
    setSelectedOptions(value);
    if (value === "Private") {
      try {
        await setGeneralFolderAccess({
          variables: {
            folderID: folder.ID,
            isPublic: false,
          },
        });
        showSuccessNotification("Folder access changed to private");
        setSelectedOptions("Private");
        refetchAccessPeople();
      } catch (err) {
        showErrorNotification((err as Error).message);
      }
    }

    if (value === "Public") {
      try {
        await setGeneralFolderAccess({
          variables: {
            folderID: folder.ID,
            isPublic: true,
          },
        });
        showSuccessNotification("Folder access changed to public");
        setSelectedOptions("Public");
        refetchAccessPeople();
      } catch (err) {
        showErrorNotification((err as Error).message);
      }
    }
  };

  const canEdit = useMemo(() => {
    return (
      currentUserID ===
        peopleWithAccess?.getPeopleWithAccessToFolder.owner.ID ||
      peopleWithAccess?.getPeopleWithAccessToFolder.sharedUsers.some(
        (user) => String(user.ID) === currentUserID
      )
    );
  }, [peopleWithAccess, currentUserID]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/folder/${folder.ID}`
    );
    message.success("Link copied to clipboard");
  };

  return (
    <>
      <Modal
        okButtonProps={{
          hidden: true,
        }}
        centered
        open={open}
        title="Share folder"
        cancelText="Close"
        footer={
          <>
            <Button key="copy" icon={<LinkOutlined />} onClick={handleCopyLink}>
              Copy link
            </Button>
            <Button key="done" type="primary" onClick={handleClose}>
              Done
            </Button>
          </>
        }
      >
        {isLoadingAccessPeople || isSetGeneralAccessLoading ? (
          <div className="text-center">
            <Spin />
          </div>
        ) : (
          <>
            {canEdit && (
              <SearchableSelector<
                User,
                GetUsersBySearchPaginationQueryVariables
              >
                query={GetUsersBySearchPaginationDocument}
                format={(user) => ({
                  label: `${user.name} - ${user.email}`,
                  value: user.ID,
                })}
                onChange={setSelectedUser}
              />
            )}

            <div className="mt-4">
              <Typography.Text className="font-bold">
                Users can modify
              </Typography.Text>

              {(() => {
                const owner =
                  peopleWithAccess?.getPeopleWithAccessToFolder.owner;
                return (
                  <List>
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            size="large"
                            src={
                              !owner?.avatar
                                ? getGeneratedAvatar(String(owner?.ID))
                                : getBase64StringOfImage(owner.avatar)
                            }
                          />
                        }
                        title={owner?.name}
                        description={owner?.email}
                      />
                      <Typography.Text
                        italic
                        type="secondary"
                        className="text-lg"
                      >
                        Owner
                      </Typography.Text>
                    </List.Item>
                  </List>
                );
              })()}

              <List
                itemLayout="horizontal"
                className="max-h-96 overflow-y-auto"
                dataSource={peopleWithAccess?.getPeopleWithAccessToFolder.sharedUsers.filter(
                  (user) =>
                    user.ID !==
                    peopleWithAccess.getPeopleWithAccessToFolder.owner.ID
                )}
                locale={{
                  emptyText: " ",
                }}
                renderItem={(user) => {
                  return (
                    <>
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              size="large"
                              src={
                                !user?.avatar
                                  ? getGeneratedAvatar(String(user?.ID))
                                  : getBase64StringOfImage(user.avatar)
                              }
                            />
                          }
                          title={user?.name}
                          description={user?.email}
                        />
                        {canEdit && (
                          <SwitchRoleDropdown
                            initialRole={UserRole.EDITOR}
                            userID={user?.ID || ""}
                            ID={folder.ID}
                            type="folder"
                            refetchAccessPeople={refetchAccessPeople}
                          />
                        )}
                      </List.Item>
                    </>
                  );
                }}
              />
            </div>
            <div>
              <Typography.Text className="font-bold">
                Users can view
              </Typography.Text>
              <List
                itemLayout="horizontal"
                className="max-h-96 overflow-y-auto"
                dataSource={
                  peopleWithAccess?.getPeopleWithAccessToFolder.readonlyUsers
                }
                renderItem={(user) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          size="large"
                          src={
                            !user.avatar
                              ? getGeneratedAvatar(String(user.ID))
                              : getBase64StringOfImage(user.avatar)
                          }
                        />
                      }
                      title={user.name}
                      description={user.email}
                    />
                    {canEdit && (
                      <SwitchRoleDropdown
                        initialRole={UserRole.VIEWER}
                        userID={user.ID}
                        ID={folder.ID}
                        type="folder"
                        refetchAccessPeople={refetchAccessPeople}
                      />
                    )}
                  </List.Item>
                )}
              />
            </div>

            <div className="flex flex-col">
              <Typography.Text className="font-bold">
                General Access
              </Typography.Text>
              <Radio.Group
                onChange={(e) => handleChangeGeneralAccess(e.target.value)}
                value={selectedOptions}
                buttonStyle="solid"
                disabled={!canEdit}
              >
                <Radio.Button value="Public" className="w-1/2 text-center">
                  Public
                </Radio.Button>
                <Radio.Button value="Private" className="w-1/2 text-center">
                  Private
                </Radio.Button>
              </Radio.Group>
            </div>
          </>
        )}
      </Modal>

      {!!selectedUser && (
        <AddUserModal
          type="folder"
          open={!!selectedUser}
          initialUser={selectedUser as any}
          handleClose={handleCloseAddUserModal}
          ID={folder.ID}
          refetchAccessPeople={refetchAccessPeople}
        />
      )}
    </>
  );
};
