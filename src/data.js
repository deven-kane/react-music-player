import {v4 as uuidv4} from 'uuid';

function devsFaveSongs() {
  return [
    {
      name: 'Drift',
      artist: 'Somni',
      id: uuidv4(),
      active: true,
      color: ['#2E6872', '#E17556'],
      cover:
        'https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=30133',
    },
    {
      name: 'Somber Sky',
      artist: 'oddfish',
      id: uuidv4(),
      active: false,
      color: ['#323D68, #343A59'],
      cover:
        'https://chillhop.com/wp-content/uploads/2022/01/c8729f09c7a1bf1143edf05091027770837d9e10-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=30295',
    },
    {
      name: 'Repent',
      artist: 'momy',
      id: uuidv4(),
      active: false,
      color: ['#A2B0A1, #678147'],
      cover:
        'https://chillhop.com/wp-content/uploads/2022/01/c0d38a1ac4ad0614301ecc77e10767b1c4f34a53-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=30141',
    },
    {
      name: 'Leaf Contour',
      artist: 'Sleepy Fish',
      id: uuidv4(),
      active: false,
      color: ['#C55256', '#317A76'],
      cover:
        'https://chillhop.com/wp-content/uploads/2022/01/e21760a2e6450015317e20f65dbba27237099f34-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=30130',
    },
    {
      name: 'Waybackwhen',
      artist: 'Philanthrope, Parkbench Epiphany',
      id: uuidv4(),
      active: false,
      color: ['#D66B70, #F4B59E'],
      cover:
        'https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=27502',
    },
    {
      name: 'Two Thousand Miles',
      artist: 'Aviino',
      id: uuidv4(),
      active: false,
      color: ['#47596D, #D36E44'],
      cover:
        'https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23314',
    },
  ];
}

export default devsFaveSongs;
