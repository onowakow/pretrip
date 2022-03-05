const SI = 'secured and intact/undamaged';
const U = 'unobstructed';
const L = 'not leaking';
const Blt = 'belt driven';
const Gr = 'gear driven';
const BP = 'belt play less that 3/4"';

/*
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
*/

const collapseSection = (obj) => {
  let sectionTitle = obj.title;
  let subsectionTitle;
  let newArray = [];

  obj.subsections.map((subsection) => {
    subsectionTitle = subsection.title;

    subsection.components.map((component) => {
      component.section = sectionTitle;
      component.subsection = subsectionTitle;

      newArray.push(component);
    });
  });

  console.log(newArray);
};
[
  'before you start',
  'exterior',
  'passenger area',
  'driver cab',
  'air brakes',
  'lights',
];
const newEngineCompartment = [
  {
    section: 'before you start',
    title: 'placeholder',
    attributes: [],
    subsection: 'placeholder',
  },
  {
    section: 'exterior',
    title: 'placeholder',
    attributes: [],
    subsection: 'placeholder',
  },
  {
    section: 'passenger area',
    title: 'placeholder',
    attributes: [],
    subsection: 'placeholder',
  },
  {
    section: 'driver cab',
    title: 'placeholder',
    attributes: [],
    subsection: 'placeholder',
  },
  {
    section: 'air brakes',
    title: 'placeholder',
    attributes: [],
    subsection: 'placeholder',
  },
  {
    section: 'lights',
    title: 'placeholder',
    attributes: [],
    subsection: 'placeholder',
  },
  {
    title: 'hoses, clamps, and wires',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'windshield wiper fluid',
    attributes: ['cap', 'level'],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'air filter',
    attributes: [
      'air flow indicator',
      'reset air flow indicator',
      'secured and intact/undamaged',
      'unobstructed',
    ],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'turbocharger',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'air conditioner compressor I',
    attributes: [
      'secured and intact/undamaged',
      'belt driven',
      'belt play less that 3/4"',
    ],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'alternator',
    attributes: [
      'secured and intact/undamaged',
      'belt driven',
      'belt play less that 3/4"',
    ],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'air conditioner compressor II',
    attributes: [
      'secured and intact/undamaged',
      'belt driven',
      'belt play less that 3/4"',
    ],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'water pump',
    attributes: [
      'secured and intact/undamaged',
      'belt driven',
      'belt play less that 3/4"',
    ],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'radiator fins',
    attributes: ['secured and intact/undamaged', 'unobstructed'],
    section: 'engine compartment',
    subsection: 'passenger side',
  },
  {
    title: 'hoses, clamps, and wires',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'oil filter cap',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'coolant reservoir',
    attributes: ['cap secured', 'check fluid level'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'oil dipstick',
    attributes: ['check oil'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'transmission fluid dipstick',
    attributes: ['check for fluid', 'procedure to check fluid'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'two filters',
    attributes: ['secured and intact/undamaged', 'not leaking'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'air compressor',
    attributes: ['gear driven', 'secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'power steering pump',
    attributes: ['gear driven', 'secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'power steering reservoir',
    attributes: ['cap secured', 'check fluid level'],
    section: 'engine compartment',
    subsection: 'driver side',
  },
  {
    title: 'hydraulic shock',
    attributes: [
      'secured and intact/undamaged',
      'not leaking',
      'check bolts at top and bottom',
    ],
    section: 'engine compartment',
    subsection: 'suspension',
  },
  {
    title: 'leaf springs',
    attributes: ['secured and intact/undamaged', 'aligned'],
    section: 'engine compartment',
    subsection: 'suspension',
  },
  {
    title: 'leaf spring shackle and hanger',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'suspension',
  },
  {
    title: 'u-bolts',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'suspension',
  },
  {
    title: 'steering shaft',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'steering system',
  },
  {
    title: 'gear box',
    attributes: ['secured and intact/undamaged', 'not leaking'],
    section: 'engine compartment',
    subsection: 'steering system',
  },
  {
    title: 'pitman arm',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'steering system',
  },
  {
    title: 'drag link',
    attributes: ['secured and intact/undamaged', 'check castle nut and pin'],
    section: 'engine compartment',
    subsection: 'steering system',
  },
  {
    title: 'upper knuckle',
    attributes: ['secured and intact/undamaged', 'check castle nut and pin'],
    section: 'engine compartment',
    subsection: 'steering system',
  },
  {
    title: 'lower knuckle',
    attributes: ['secured and intact/undamaged', 'check castle nut and pin'],
    section: 'engine compartment',
    subsection: 'steering system',
  },
  {
    title: 'tie rod',
    attributes: ['secured and intact/undamaged', 'check castle nut and pin'],
    section: 'engine compartment',
    subsection: 'steering system',
  },
  {
    title: 'air line',
    attributes: ['secured and intact/undamaged', 'not leaking'],
    section: 'engine compartment',
    subsection: 'braking system',
  },
  {
    title: 'brake chamber',
    attributes: ['secured and intact/undamaged', 'not leaking'],
    section: 'engine compartment',
    subsection: 'braking system',
  },
  {
    title: 'push rod',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'braking system',
  },
  {
    title: 'slack adjuster',
    attributes: [
      'secured and intact/undamaged',
      'pull slack adjuster. check for less than 1" of movement and that push rod and slack adjuster meet at 90 degrees',
    ],
    section: 'engine compartment',
    subsection: 'braking system',
  },
  {
    title: 's-cam housing',
    attributes: ['secured and intact/undamaged', 'mention s-cam'],
    section: 'engine compartment',
    subsection: 'braking system',
  },
  {
    title: 'brake shoes',
    attributes: ['secured and intact/undamaged'],
    section: 'engine compartment',
    subsection: 'braking system',
  },
  {
    title: 'brake pads',
    attributes: [
      'secured and intact/undamaged',
      'pads must be over 1/4" thick',
    ],
    section: 'engine compartment',
    subsection: 'braking system',
  },
  {
    title: 'brake drum',
    attributes: [
      'secured and intact/undamaged',
      'not warped, cracked, or dirty',
    ],
    section: 'engine compartment',
    subsection: 'braking system',
  },
];

module.exports = newEngineCompartment;
