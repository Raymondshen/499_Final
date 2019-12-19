const fontFamiliesData = { first: {}, second: {} };
  
const fontSizesData = [
    { size: 43, min: 12, max: 96, name: 'H1' },
    { size: 36, min: 12, max: 72, name: 'H2' },
    { size: 16, min: 12, max: 72, name: 'H3' },
    { size: 14, min: 12, max: 72, name: 'H4' },
    { size: 12, min: 12, max: 72, name: 'H5' },
    { size: 10, min: 12, max: 26, name: 'P' }
];

const spacingsData = [
    {
        trackingSize:0,
        trackingMin:-5,
        trackingMax:15,
        leadingSize:100,
        leadingMin:80,
        leadingMax:150,
        name:'H1',
        label1:"Tracking",
        label2:"Leading"
    },
    {
        trackingSize:0,
        trackingMin:-3,
        trackingMax:8,
        leadingSize:100,
        leadingMin:80,
        leadingMax:125,
        name:'H2',
        label1:"Tracking",
        label2:"Leading"
    },
    {
        trackingSize:0,
        trackingMin:-3,
        trackingMax:8,
        leadingSize:100,
        leadingMin:80,
        leadingMax:125,
        name:'H3',
        label1:"Tracking",
        label2:"Leading"
    },
    {
        trackingSize:0,
        trackingMin:-3,
        trackingMax:8,
        leadingSize:100,
        leadingMin:80,
        leadingMax:125,
        name:'H4',
        label1:"Tracking",
        label2:"Leading"
    },
    {
        trackingSize:0,
        trackingMin:-3,
        trackingMax:8,
        leadingSize:100,
        leadingMin:80,
        leadingMax:125,
        name:'H5',
        label1:"Tracking",
        label2:"Leading"
    },
    {
        trackingSize:0,
        trackingMin:-2,
        trackingMax:4,
        leadingSize:100,
        leadingMin:80,
        leadingMax:125,
        name:'P',
        label1:"Tracking",
        label2:"Leading"
    },
];

export { fontFamiliesData, fontSizesData, spacingsData };