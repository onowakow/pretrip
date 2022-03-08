const SI = 'secured and intact';
const WIND = 'glass is free of damage or illegal stickers';
const LEAK = 'look and listen for leaks';
const DRIVE = 'driveshaft is intact and in place';
const EXH = 'exhaust system is intact and in place';
const busBodyObj = {
  title: 'body',
  attributes: ['no damage']
}
const busSideGlassObj = {
  title: 'glass',
  attributes: ['no damage']
},
const underTheBusObj = {
  title: 'under the bus',
  attributes: [LEAK, DRIVE, EXH],
},
const U = 'unobstructed';
const L = 'not leaking';
const Blt = 'belt driven';
const Gr = 'gear driven';
const BP = 'belt play less that 3/4"';

const array = [
  {
    ID: 1,
    title: 'before you start',
    subsections: [
      {
        title: 'preparing for a pretrip',
        components: [
          { title: 'chock wheels', attributes: ['done'] },
          {
            title: 'put keys in pocket',
            attributes: ['done'],
          },
          {
            title: 'battery in off position',
            attributes: ['done'],
          },
        ],
      },
    ],
  },
  {
    ID: 2,
    title: 'engine compartment',
    subsections: [
      {
        title: 'passenger side',
        components: [
          {
            title: 'hoses, clamps, and wires',
            attributes: [SI],
          },
          {
            title: 'windshield wiper fluid',
            attributes: ['cap', 'level'],
          },
          {
            title: 'air filter',
            attributes: [
              'air flow indicator',
              'reset air flow indicator',
              SI,
              U,
            ],
          },
          {
            title: 'turbocharger',
            attributes: [SI],
          },
          {
            title: 'air conditioner compressor I',
            attributes: [SI, Blt, BP],
          },
          {
            title: 'alternator',
            attributes: [SI, Blt, BP],
          },
          {
            title: 'air conditioner compressor II',
            attributes: [SI, Blt, BP],
          },
          {
            title: 'water pump',
            attributes: [SI, Blt, BP],
          },
          {
            title: 'radiator fins',
            attributes: [SI, U],
          },
        ],
      },
      {
        title: 'driver side',
        components: [
          {
            title: 'hoses, clamps, and wires',
            attributes: [SI],
          },
          {
            title: 'oil filter cap',
            attributes: [SI],
          },
          {
            title: 'coolant reservoir',
            attributes: ['cap secured', 'check fluid level'],
          },
          {
            title: 'oil dipstick',
            attributes: ['check oil'],
          },
          {
            title: 'transmission fluid dipstick',
            attributes: ['check for fluid', 'procedure to check fluid'],
          },
          {
            title: 'two filters',
            attributes: [SI, L],
          },
          {
            title: 'air compressor',
            attributes: [Gr, SI],
          },
          {
            title: 'power steering pump',
            attributes: [Gr, SI],
          },
          {
            title: 'power steering reservoir',
            attributes: ['cap secured', 'check fluid level'],
          },
        ],
      },
      {
        title: 'suspension',
        components: [
          {
            title: 'hydraulic shock',
            attributes: [SI, L, 'check bolts at top and bottom'],
          },
          { title: 'leaf springs', attributes: [SI, 'aligned'] },
          { title: 'leaf spring shackle and hanger', attributes: [SI] },
          { title: 'u-bolts', attributes: [SI] },
        ],
      },
      {
        title: 'steering system',
        components: [
          { title: 'steering shaft', attributes: [SI] },
          { title: 'gear box', attributes: [SI, L] },
          { title: 'pitman arm', attributes: [SI] },
          {
            title: 'drag link',
            attributes: [SI, 'check castle nut and pin'],
          },
          {
            title: 'upper knuckle',
            attributes: [SI, 'check castle nut and pin'],
          },
          {
            title: 'lower knuckle',
            attributes: [SI, 'check castle nut and pin'],
          },
          { title: 'tie rod', attributes: [SI, 'check castle nut and pin'] },
        ],
      },
      {
        title: 'braking system',
        components: [
          { title: 'air line', attributes: [SI, L] },
          { title: 'brake chamber', attributes: [SI, L] },
          { title: 'push rod', attributes: [SI] },
          {
            title: 'slack adjuster',
            attributes: [
              SI,
              'pull slack adjuster. check for less than 1" of movement and that push rod and slack adjuster meet at 90 degrees',
            ],
          },
          { title: 's-cam housing', attributes: [SI, 'mention s-cam'] },
          { title: 'brake shoes', attributes: [SI] },
          {
            title: 'brake pads',
            attributes: [SI, 'pads must be over 1/4" thick'],
          },
          {
            title: 'brake drum',
            attributes: [SI, 'not warped, cracked, or dirty'],
          },
        ],
      },
    ],
  },
  {
    ID: 3,
    title: 'exterior',
    subsections: [
      {
        title: 'front',
        components: [
          {
            title: 'windshield',
            attributes: [WIND],
          },
          {
            title: 'windshield wipers',
            attributes: [SI],
          },
          {
            title: 'body',
            attributes: ['no damage'],
          },
          {
            title: 'license plate',
            attributes: [],
          },
          {
            title: 'bumper',
            attributes: [SI],
          },
          underTheBusObj,
        ],
      },
      {
        title: 'exterior driver cab',
        components: [
          { 
            title: 'DEF tank and cap',
            attributes: [SI, L] 
          },
          {
            title: 'Mirror',
            attributes: [SI, 'not excessively loose']
          },
          {
            title: 'steps',
            attributes: [SI]
          },
        ]
      },
      {
        title: 'driver side',
        components: [
          underTheBusObj,
          busSideGlassObj,
          busBodyObj,
          {
            title: 'wheels',
            attributes: ['two tires', 'check bud space',]
          },
          {
            title: 'air tanks and tank drains',
            attributes: []
          }
        ]
      },
      { 
        title: 'backside',
        components: [
          underTheBusObj,
          busSideGlassObj,
          busBodyObj,
          {
            title: 'main exhaust',
            attributes: ['not more than 1/3 obstructed']
          },
          {
            title: 'auxiliary exhaust',
            attributes: ['not more than 1/3 obstructed']
          },
          {
            title: 'differential',
            attributes: [L]
          },
          {
            title: 'air bags',
            attributes: [SI, 'securely mounted to control arm']
          },
          {
            title: 'control arm',
            attributes: [SI]
          }
        ]
      },
      {
        title: 'passenger side',
        components: [
          {
            title: 'battery compartment',
            attributes: [SI, 'terminals are not corroded']
          },
          {
            title: 'battery switch',
            attributes: ['turn on if necessary']
          },
          {
            title: 'passenger door',
            attributes: [SI, 'glass is free of damage']
          }
        ]
      },
    ],
  },
  {
    ID: 4,
    title: 'passenger area',
    subsections: [],
  },
  {
    ID: 5,
    title: 'driver cab',
    subsections: [],
  },
  {
    ID: 6,
    title: 'air brakes',
    subsections: [],
  },
  {
    ID: 7,
    title: 'lights',
    subsections: [],
  },
];

module.exports = array;
