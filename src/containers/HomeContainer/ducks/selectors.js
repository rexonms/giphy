export const extractResponseInfo = response => (
  {
    pagination: response.pagination,
    data: response.data.map(d => (
      {
        id: d.id,
        title: d.title,
        rating: d.rating,
        user: {
          avatarUrl: d.user ? d.user.avatar_url : '',
        },
        image: {
          url: d.images.fixed_height_downsampled,
        },
      }
    )),
  }
);

export const foo = 'bazz';
