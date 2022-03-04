const SI = 'secured and intact/undamaged';
const U = 'unobstructed';
const L = 'not leaking';
const Blt = 'belt driven';
const Gr = 'gear driven';
const BP = 'belt play less that 3/4"';

const array = [
  {
    title: 'before you start',
    subsections: [],
  },
  {
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
    title: 'exterior',
    subsections: [],
  },
  {
    title: 'passenger area',
    subsections: [],
  },
  {
    title: 'driver cab',
    subsections: [],
  },
  {
    title: 'air brakes',
    subsections: [],
  },
  {
    title: 'lights',
    subsections: [],
  },
];

module.exports = array;
