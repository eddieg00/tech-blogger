const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();
  const artist = document.querySelector('#artist-desc').value.trim();
  const album = document.querySelector('#album-desc').value.trim();
  const song = document.querySelector('#song-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title: name,
        artist: artist,
        album: album,
        song: song,
        description: description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};


document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
