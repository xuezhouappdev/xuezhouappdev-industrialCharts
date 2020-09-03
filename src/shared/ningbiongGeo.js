const labelStyle = { show: true, position: 'inside', formatter: "{a}:{c}%", fontSize: 20 };
const cityData = [
  {
    name: '海曙',
    coord: [121.29698, 29.834452],
    data: [
      { name: '第一产业', value: 1.2 },
      { name: '第二产业', value: 36.3 },
      { name: '第三产业', value: 62.5, label: labelStyle },
    ]
  },
  {
    name: '江北', coord: [121.509282, 29.948361],
    data: [
      { name: '第一产业', value: 1.5 },
      { name: '第二产业', value: 34.5 },
      { name: '第三产业', value: 64, label: labelStyle },
    ]
  },
  {
    name: '北仑', coord: [121.831303, 29.90944],
    data: [
      { name: '第一产业', value: 0.5 },
      { name: '第二产业', value: 60.1 },
      { name: '第三产业', value: 39.4, label: labelStyle },
    ]
  },
  {
    name: '镇海', coord: [121.68162,
      29.992107],
    data: [
      { name: '第一产业', value: 0.7 },
      { name: '第二产业', value: 73.7 },
      { name: '第三产业', value: 25.6, label: labelStyle },
    ]
  },
  {
    name: '鄞州', coord: [121.598436,
      29.791662],
    data: [
      { name: '第一产业', value: 1.4 },
      { name: '第二产业', value: 34.2 },
      { name: '第三产业', value: 64.4, label: labelStyle },
    ]
  },
  {
    name: '奉化', coord: [121.41089,
      29.662348],
    data: [
      { name: '第一产业', value: 5 },
      { name: '第二产业', value: 59 },
      { name: '第三产业', value: 36, label: labelStyle },
    ]
  },
  {
    name: '象山', coord: [121.877091,
      29.470206],
    data: [
      { name: '第一产业', value: 13.8 },
      { name: '第二产业', value: 42.4 },
      { name: '第三产业', value: 43.8, label: labelStyle },
    ]
  },
  {
    name: '宁海', coord: [121.432606,
      29.299836],
    data: [
      { name: '第一产业', value: 7.2 },
      { name: '第二产业', value: 52.3 },
      { name: '第三产业', value: 40.5, label: labelStyle },
    ]
  },
  {
    name: '余姚', coord: [121.156294,
      30.045404],
    data: [
      { name: '第一产业', value: 4.0 },
      { name: '第二产业', value: 58.1 },
      { name: '第三产业', value: 37.9, label: labelStyle },
    ]
  },
  {
    name: '慈溪', coord: [121.248052,
      30.177142],
    data: [
      { name: '第一产业', value: 3 },
      { name: '第二产业', value: 60.6 },
      { name: '第三产业', value: 36.4, label: labelStyle },
    ]
  },
];

const geoCoordMap = {
  '海曙': [121.29698, 29.834452],
  '江北': [121.509282, 29.948361],
  '北仑': [121.831303, 29.90944],
  '镇海': [121.713162,
    29.952107],
  '鄞州': [121.558436,
    29.831662],
  '奉化': [121.41089,
    29.662348],
  '象山': [121.877091,
    29.470206],
  '宁海': [121.432606,
    29.299836],
  '余姚': [121.156294,
    30.045404],
  '慈溪': [121.248052,
    30.177142],
};

export { cityData, geoCoordMap }