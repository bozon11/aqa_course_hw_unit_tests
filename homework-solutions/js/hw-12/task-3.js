async function getUsersWithAlbumsAndPhotos() {
  try {
    const [usersResponse, albumsResponse, photosResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/albums'),
      fetch('https://jsonplaceholder.typicode.com/photos'),
    ]);

    const [users, albums, photos] = await Promise.all([
      usersResponse.json(),
      albumsResponse.json(),
      photosResponse.json(),
    ]);

    users.forEach((user, index) => {
      console.log(`${index + 1}. name: ${user.name}`);
      console.log(`   email: ${user.email}`);
      console.log(`   phone: ${user.phone}`);
      console.log(`   company: ${user.company.name}`);
      console.log('   albums:');

      const userAlbums = albums.filter((album) => album.userId === user.id);

      userAlbums.forEach((album) => {
        const photosCount = photos.filter((photo) => photo.albumId === album.id).length;
        console.log(`     ${album.title} (${photosCount} photos)`);
      });

      console.log('__________________________________');
    });
  } catch (error) {
    console.log('Error:', error.message);
  }
}

//getUsersWithAlbumsAndPhotos();
