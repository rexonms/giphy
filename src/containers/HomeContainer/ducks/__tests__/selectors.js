import { extractResponseInfo } from '../selectors';

describe('extractResponseInfo', () => {
  let data;
  beforeEach(() => {
    data = {
      data: [{
        type: 'gif',
        id: 'yoJC2B1sHdXJjPTnEs',
        slug: 'wetv-omg-flirty-yoJC2B1sHdXJjPTnEs',
        url: 'https:\/\/giphy.com\/gifs\/wetv-omg-flirty-yoJC2B1sHdXJjPTnEs',
        bitly_gif_url: 'https:\/\/gph.is\/1yvYS5Z',
        bitly_url: 'https:\/\/gph.is\/1yvYS5Z',
        embed_url: 'https:\/\/giphy.com\/embed\/yoJC2B1sHdXJjPTnEs',
        username: 'wetv',
        source: '',
        rating: 'g',
        content_url: '',
        source_tld: '',
        source_post_url: '',
        is_sticker: 0,
        import_datetime: '2015-02-02 19:25:28',
        trending_datetime: '2018-06-23 20:45:01',
        user: {
          avatar_url: 'https:\/\/media.giphy.com\/avatars\/wetv\/ez6Knwamyn0A.jpg', banner_url: 'https:\/\/media.giphy.com\/headers\/wetv\/kZKU1TvGXJcJ.jpg', profile_url: 'https:\/\/giphy.com\/wetv\/', username: 'wetv', display_name: 'WE tv', guid: 'amFtZXMrd2V0dkBiZXRhd29ya3MuY29t',
        },
        images: {
          fixed_height_still: { url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200_s.gif', width: '259', height: '200' },
          original_still: { url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy_s.gif', width: '259', height: '200' },
          fixed_width: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200w.gif', width: '200', height: '154', size: '241870', mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200w.mp4', mp4_size: '96676', webp: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200w.webp', webp_size: '238524',
          },
          fixed_height_small_still: { url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/100_s.gif', width: '130', height: '100' },
          fixed_height_downsampled: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200_d.gif', width: '259', height: '200', size: '247691', webp: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200_d.webp', webp_size: '58832',
          },
          preview: {
            width: '258', height: '200', mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy-preview.mp4', mp4_size: '27903',
          },
          fixed_height_small: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/100.gif', width: '130', height: '100', size: '404710', mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/100.mp4', mp4_size: '28876', webp: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/100.webp', webp_size: '126302',
          },
          downsized_still: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy-downsized_s.gif', width: '259', height: '200', size: '41194',
          },
          downsized: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy-downsized.gif', width: '259', height: '200', size: '1440744',
          },
          downsized_large: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy.gif', width: '259', height: '200', size: '1440744',
          },
          fixed_width_small_still: { url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/100w_s.gif', width: '100', height: '77' },
          preview_webp: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy-preview.webp', width: '180', height: '139', size: '49628',
          },
          fixed_width_still: { url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200w_s.gif', width: '200', height: '154' },
          fixed_width_small: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/100w.gif', width: '100', height: '77', size: '241870', mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/100w.mp4', mp4_size: '24289', webp: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/100w.webp', webp_size: '76294',
          },
          downsized_small: {
            width: '258', height: '200', mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy-downsized-small.mp4', mp4_size: '27903',
          },
          fixed_width_downsampled: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200w_d.gif', width: '200', height: '154', size: '158890', webp: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200w_d.webp', webp_size: '41022',
          },
          downsized_medium: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy.gif', width: '259', height: '200', size: '1440744',
          },
          original: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy.gif', width: '259', height: '200', size: '1440744', frames: '35', mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy.mp4', mp4_size: '265333', webp: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy.webp', webp_size: '345630',
          },
          fixed_height: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200.gif', width: '259', height: '200', size: '404710', mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200.mp4', mp4_size: '107001', webp: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/200.webp', webp_size: '346052',
          },
          looping: { mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy-loop.mp4', mp4_size: '3766050' },
          original_mp4: {
            width: '480', height: '370', mp4: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy.mp4', mp4_size: '265333',
          },
          preview_gif: {
            url: 'https:\/\/media3.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/giphy-preview.gif', width: '101', height: '78', size: '48839',
          },
          '480w_still': { url: 'https:\/\/media0.giphy.com\/media\/yoJC2B1sHdXJjPTnEs\/480w_s.jpg', width: '480', height: '371' },
        },
        title: 'leonardo dicaprio omg GIF by WE tv',
        _score: 0,
      }, {
        type: 'gif',
        id: 'b1YFCoOD2aX2E',
        slug: 'maudit-maudit-smiling-woman-b1YFCoOD2aX2E',
        url: 'https:\/\/giphy.com\/gifs\/maudit-maudit-smiling-woman-b1YFCoOD2aX2E',
        bitly_gif_url: 'https:\/\/gph.is\/1coiBMX',
        bitly_url: 'https:\/\/gph.is\/1coiBMX',
        embed_url: 'https:\/\/giphy.com\/embed\/b1YFCoOD2aX2E',
        username: 'maudit',
        source: 'https:\/\/maudit.tumblr.com\/post\/23784950368',
        rating: 'g',
        content_url: '',
        source_tld: 'maudit.tumblr.com',
        source_post_url: 'https:\/\/maudit.tumblr.com\/post\/23784950368',
        is_sticker: 0,
        import_datetime: '2013-12-25 13:05:50',
        trending_datetime: '2018-06-22 15:10:00',
        user: {
          avatar_url: 'https:\/\/media.giphy.com\/avatars\/maudit.gif', banner_url: '', profile_url: 'https:\/\/giphy.com\/maudit\/', username: 'maudit', display_name: 'Maudit', guid: 'bWF1ZGl0dHRAZ21haWwuY29t',
        },
        images: {
          fixed_height_still: { url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200_s.gif', width: '345', height: '200' },
          original_still: { url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy_s.gif', width: '500', height: '290' },
          fixed_width: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200w.gif', width: '200', height: '116', size: '84587', mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200w.mp4', mp4_size: '29746', webp: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200w.webp', webp_size: '112322',
          },
          fixed_height_small_still: { url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/100_s.gif', width: '172', height: '100' },
          fixed_height_downsampled: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200_d.gif', width: '345', height: '200', size: '353795', webp: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200_d.webp', webp_size: '102774',
          },
          preview: {
            width: '316', height: '182', mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy-preview.mp4', mp4_size: '46824',
          },
          fixed_height_small: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/100.gif', width: '172', height: '100', size: '194467', mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/100.mp4', mp4_size: '86308', webp: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/100.webp', webp_size: '74900',
          },
          downsized_still: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy-downsized_s.gif', width: '500', height: '290', size: '95811',
          },
          downsized: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy-downsized.gif', width: '500', height: '290', size: '1021938',
          },
          downsized_large: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy.gif', width: '500', height: '290', size: '1021938',
          },
          fixed_width_small_still: { url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/100w_s.gif', width: '100', height: '58' },
          preview_webp: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy-preview.webp', width: '188', height: '109', size: '49022',
          },
          fixed_width_still: { url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200w_s.gif', width: '200', height: '116' },
          fixed_width_small: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/100w.gif', width: '100', height: '58', size: '84587', mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/100w.mp4', mp4_size: '41371', webp: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/100w.webp', webp_size: '33720',
          },
          downsized_small: {
            width: '500', height: '290', mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy-downsized-small.mp4', mp4_size: '124404',
          },
          fixed_width_downsampled: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200w_d.gif', width: '200', height: '116', size: '128325', webp: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200w_d.webp', webp_size: '39568',
          },
          downsized_medium: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy.gif', width: '500', height: '290', size: '1021938',
          },
          original: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy.gif', width: '500', height: '290', size: '1021938', frames: '17', mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy.mp4', mp4_size: '84100', webp: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy.webp', webp_size: '434006',
          },
          fixed_height: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200.gif', width: '345', height: '200', size: '194467', mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200.mp4', mp4_size: '21402', webp: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/200.webp', webp_size: '292216',
          },
          looping: { mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy-loop.mp4', mp4_size: '3913629' },
          original_mp4: {
            width: '480', height: '278', mp4: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy.mp4', mp4_size: '84100',
          },
          preview_gif: {
            url: 'https:\/\/media2.giphy.com\/media\/b1YFCoOD2aX2E\/giphy-preview.gif', width: '141', height: '82', size: '48082',
          },
          '480w_still': { url: 'https:\/\/media1.giphy.com\/media\/b1YFCoOD2aX2E\/480w_s.jpg', width: '480', height: '278' },
        },
        title: 'frances mcdormand smiling GIF by Maudit',
        _score: 0,
      }, {
        type: 'gif',
        id: 'l41lRTRi4lYbaTTcQ',
        slug: 'afvbabies-babies-afv-l41lRTRi4lYbaTTcQ',
        url: 'https:\/\/giphy.com\/gifs\/afvbabies-babies-afv-l41lRTRi4lYbaTTcQ',
        bitly_gif_url: 'https:\/\/gph.is\/1iCGHdV',
        bitly_url: 'https:\/\/gph.is\/1iCGHdV',
        embed_url: 'https:\/\/giphy.com\/embed\/l41lRTRi4lYbaTTcQ',
        username: 'afvbabies',
        source: 'afv.com',
        rating: 'g',
        content_url: '',
        source_tld: '',
        source_post_url: 'afv.com',
        is_sticker: 0,
        import_datetime: '2015-09-11 16:17:56',
        trending_datetime: '2018-06-23 20:15:01',
        user: {
          avatar_url: 'https:\/\/media1.giphy.com\/avatars\/afvbabies\/P0PQkEsUjcA1.jpg', avatar: 'https:\/\/media1.giphy.com\/avatars\/afvbabies\/P0PQkEsUjcA1.jpg', banner_url: 'https:\/\/media1.giphy.com\/headers\/afvbabies\/AXHTn9QQjrQv.jpg', banner_image: 'https:\/\/media1.giphy.com\/headers\/afvbabies\/AXHTn9QQjrQv.jpg', profile_url: 'https:\/\/giphy.com\/afvbabies\/', username: 'afvbabies', display_name: 'AFV Babies',
        },
        images: {
          fixed_height_still: { url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200_s.gif', width: '287', height: '200' },
          original_still: { url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy_s.gif', width: '450', height: '314' },
          fixed_width: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200w.gif', width: '200', height: '140', size: '1215700', mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200w.mp4', mp4_size: '85528', webp: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200w.webp', webp_size: '473566',
          },
          fixed_height_small_still: { url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/100_s.gif', width: '143', height: '100' },
          fixed_height_downsampled: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200_d.gif', width: '287', height: '200', size: '234709', webp: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200_d.webp', webp_size: '74782',
          },
          preview: {
            width: '264', height: '184', mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy-preview.mp4', mp4_size: '42089',
          },
          fixed_height_small: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/100.gif', width: '143', height: '100', size: '661576', mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/100.mp4', mp4_size: '57050', webp: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/100.webp', webp_size: '283346',
          },
          downsized_still: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy-downsized_s.gif', width: '250', height: '174', size: '32691',
          },
          downsized: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy-downsized.gif', width: '250', height: '174', size: '1760459',
          },
          downsized_large: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy.gif', width: '450', height: '314', size: '5874017',
          },
          fixed_width_small_still: { url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/100w_s.gif', width: '100', height: '70' },
          preview_webp: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy-preview.webp', width: '150', height: '105', size: '48826',
          },
          fixed_width_still: { url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200w_s.gif', width: '200', height: '140' },
          fixed_width_small: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/100w.gif', width: '100', height: '70', size: '351055', mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/100w.mp4', mp4_size: '35971', webp: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/100w.webp', webp_size: '171702',
          },
          downsized_small: {
            width: '303', height: '212', mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy-downsized-small.mp4', mp4_size: '184044',
          },
          fixed_width_downsampled: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200w_d.gif', width: '200', height: '140', size: '120758', webp: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200w_d.webp', webp_size: '45160',
          },
          downsized_medium: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy-downsized-medium.gif', width: '360', height: '251', size: '3716108',
          },
          original: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy.gif', width: '450', height: '314', size: '5874017', frames: '63', mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy.mp4', mp4_size: '325827', webp: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy.webp', webp_size: '1660442',
          },
          fixed_height: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200.gif', width: '287', height: '200', size: '2396319', mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200.mp4', mp4_size: '133151', webp: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/200.webp', webp_size: '786970',
          },
          looping: { mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy-loop.mp4', mp4_size: '1062622' },
          original_mp4: {
            width: '480', height: '334', mp4: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy.mp4', mp4_size: '325827',
          },
          preview_gif: {
            url: 'https:\/\/media3.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/giphy-preview.gif', width: '100', height: '70', size: '48888',
          },
          '480w_still': { url: 'https:\/\/media0.giphy.com\/media\/l41lRTRi4lYbaTTcQ\/480w_s.jpg', width: '480', height: '335' },
        },
        title: 'side eye nom GIF by AFV Babies',
        _score: 0,
      }],
      pagination: { total_count: 56730, count: 3, offset: 0 },
      meta: { status: 200, msg: 'OK', response_id: '5b2ec02d6632455032e0f804' },
    };
  });
  it('should extract only required info', () => {
    const result = extractResponseInfo(data);
    expect(result.pagination).toBe(data.pagination);
    expect(result.data.length).toBe(data.data.length);
    expect(result.data[0].id).toBe(data.data[0].id);
    expect(result.data[0].title).toBe(data.data[0].title);
    expect(result.data[0].rating).toBe(data.data[0].rating);
    expect(result.data[0].user.avatarUrl).toBe(data.data[0].user.avatar_url);
    expect(result.data[0].image.url).toBe(data.data[0].images.fixed_height_downsampled);
    expect(result.data[0].slug).toBe(undefined);
  });
});
