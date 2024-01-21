export const moveUserData = async () => {
  // const oldUserData = await oldPrisma.user.findMany();

  // const newUsers = oldUserData.map((oldUser) => {
  //   return {
  //     id: oldUser.id,
  //     username: (oldUser.username ?? oldUser.id) as string,
  //     email: oldUser.email as string,
  //     profileNft: oldUser.profileNft as string,
  //     mainWallet: oldUser.mainWallet,
  //     profilePicture:
  //       (oldUser.profilePicture as string) ??
  //       'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  //     tx: (oldUser.tx as string) ?? '0',
  //     isActive: oldUser.isActive,
  //     isArchive: oldUser.isArchive,
  //     createdAt: oldUser.createdAt,
  //     updatedAt: oldUser.updatedAt,
  //     isRecivingUpdate: true,
  //   };
  // });

  // for (const newUser of newUsers) {
  //   await prisma.user.create({
  //     data: newUser,
  //   });
  // }

  console.log('User data migration complete.');
};
