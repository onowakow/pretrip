const SI = 'secured and intact';
const WIND = 'glass is free of damage or illegal stickers';
const LEAK = 'look and listen for leaks';
const DRIVE = 'driveshaft is intact and in place';
const EXH = 'exhaust system is intact and in place';
const busBodyObj = {
  title: 'body',
  attributes: ['no damage'],
};
const busSideGlassObj = {
  title: 'glass',
  attributes: ['no damage'],
};
const underTheBusObj = {
  title: 'under the bus',
  attributes: [LEAK, DRIVE, EXH],
};
const U = 'unobstructed';
const L = 'not leaking';
const Blt = 'belt driven';
const Gr = 'gear driven';
const BP = 'belt play less than 3/4"';

const array = [
  {
    ID: 1,
    title: 'before you start',
    subsections: [
      {
        title: 'preparing for a pretrip',
        components: [
          { title: 'chock wheels', attributes: ['chocked'] },
          {
            title: 'put keys in pocket',
            attributes: ['ensures engine will not be started'],
          },
          {
            title: 'battery in off position',
            attributes: ['ensured engine will not be started'],
          },
        ],
      },
    ],
  },
  {
    ID: 2,
    title: 'engine bay',
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
            title: 'air conditioner compressor i',
            attributes: [SI, Blt, BP],
          },
          {
            title: 'alternator',
            attributes: [SI, Blt, BP],
          },
          {
            title: 'air conditioner compressor ii',
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
            attributes: [SI],
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
            attributes: [SI, L],
          },
          {
            title: 'Mirror',
            attributes: [SI, 'not excessively loose'],
          },
          {
            title: 'steps',
            attributes: [SI],
          },
        ],
      },
      {
        title: 'driver side',
        components: [
          underTheBusObj,
          busSideGlassObj,
          busBodyObj,
          {
            title: 'wheels',
            attributes: ['two tires', 'check bud space'],
          },
          {
            title: 'air tanks and tank drains',
            attributes: [SI],
          },
        ],
      },
      {
        title: 'backside',
        components: [
          underTheBusObj,
          busSideGlassObj,
          busBodyObj,
          {
            title: 'main exhaust',
            attributes: ['not more than 1/3 obstructed'],
          },
          {
            title: 'auxiliary exhaust',
            attributes: ['not more than 1/3 obstructed'],
          },
          {
            title: 'differential',
            attributes: [L],
          },
          {
            title: 'air bags',
            attributes: [SI, 'securely mounted to control arm'],
          },
          {
            title: 'control arm',
            attributes: [SI],
          },
        ],
      },
      {
        title: 'passenger side',
        components: [
          {
            title: 'battery compartment',
            attributes: [SI, 'terminals are not corroded'],
          },
          {
            title: 'battery switch',
            attributes: ['turn on if necessary'],
          },
          {
            title: 'passenger door',
            attributes: [SI, 'glass is free of damage'],
          },
        ],
      },
    ],
  },
  {
    ID: 4,
    title: 'interior',
    subsections: [
      {
        title: 'passenger area',
        components: [
          {
            title: 'railing',
            attributes: [SI],
          },
          {
            title: 'seats',
            attributes: [SI],
          },
          {
            title: 'emergency exits',
            attributes: ['latched', 'labeled', 'latches not sticking'],
          },
          {
            title: 'tread',
            attributes: ['not damaged'],
          },
          {
            title: 'destination sign',
            attributes: ['secured'],
          },
          {
            title: 'foldable seats',
            attributes: ['able to open and stow'],
          },
          {
            title: 'wheelchair securements',
            attributes: [
              'enough securements for two wheelchairs (8)',
              'free of damage',
            ],
          },
        ],
      },
      {
        title: 'driver cab',
        components: [
          {
            title: 'fire extinguisher',
            attributes: ['within expiration date', 'gauge in green'],
          },
          {
            title: 'blood borne pathogen kit',
            attributes: ['filled'],
          },
          {
            title: 'first aid kit',
            attributes: ['filled'],
          },
          {
            title: 'emergency triangles',
            attributes: ['three triangles', 'no damage'],
          },
          {
            title: 'vehicle paperwork',
            attributes: ['present'],
          },
          {
            title: 'electrical/fuse box',
            attributes: ['spare fuses', 'no damage'],
          },
          {
            title: 'driver seat',
            attributes: [SI, 'not excessively loose'],
          },
        ],
      },
      {
        title: 'in the driver seat',
        components: [
          {
            title: 'seat belt',
            attributes: [
              'put on seatbelt if about to start the engine',
              'secured to floor',
              'no tears or damage',
            ],
          },
          {
            title: 'seat belt cutter',
            attributes: ['present'],
          },
          {
            title: 'pedals',
            attributes: [SI, 'noting underneath pedals'],
          },
          {
            title: 'driver glass',
            attributes: [WIND],
          },
          {
            title: 'mirrors',
            attributes: [WIND, 'adjusted for driver'],
          },
        ],
      },
      {
        title: 'dashboard',
        components: [
          {
            title: 'turn ignition: accessories',
            attributes: [
              'all dash lights cycle',
              'wait for glow plug light to cycle',
            ],
          },
          {
            title: 'turn ignition: start engine',
            attributes: ['done'],
          },
          {
            title: 'oil pressure',
            attributes: [
              'should come up to around 40 after start',
              'normal pressure can range from 10-70 PSI',
            ],
          },
          {
            title: 'coolant temperature',
            attributes: [
              'will be low on startup',
              'temps above 205F can be dangerous',
            ],
          },
          {
            title: 'air tank i & ii',
            attributes: [
              'are approaching similar pressure',
              'are gradually rising with engine on',
            ],
          },
          {
            title: 'voltmeter',
            attributes: [
              'reading appropriately for battery (typically 1-3 volts above the battery size)',
            ],
          },
          {
            title: 'speedometer',
            attributes: ['reading at zero when not moving'],
          },
          {
            title: 'tachometer',
            attributes: ['at appropriate rate', 'set high idle'],
          },
          {
            title: 'transmission fluid temperature',
            attributes: ['similar temperature to coolant'],
          },
          {
            title: 'transmission fluid level',
            attributes: ['check via dash'],
          },
        ],
      },
      {
        title: 'steering column',
        components: [
          {
            title: 'steering wheel adjuster',
            attributes: [SI],
          },
          {
            title: 'windshield wipers',
            attributes: ['test that wipers spray and wipe adequately'],
          },
          {
            title: 'high-beams/brights',
            attributes: ['test that brights work from inside'],
          },
          {
            title: 'steering wheel',
            attributes: ['less than 10 degrees of play'],
          },
          {
            title: 'horn',
            attributes: ['honks'],
          },
        ],
      },
      {
        title: 'miscellaneous dash',
        components: [
          {
            title: 'mirror heater switch',
            attributes: ['test that mirror heats'],
          },
          {
            title: 'headlight dial',
            attributes: ['test that headlights work from inside'],
          },
          {
            title: 'cab climate controls',
            attributes: ['test that windshield defroster is warm'],
          },
          {
            title: 'passenger climate controls',
            attributes: ['turn on if driving'],
          },
          {
            title: 'two-way radio',
            attributes: [SI],
          },
          {
            title: 'regen switches',
            attributes: ['for regeneration control'],
          },
          {
            title: 'retarder switch',
            attributes: ['do not use in slippery conditions'],
          },
          {
            title: 'off road switch',
            attributes: ['for traction control'],
          },
          {
            title: 'ramp enabler',
            attributes: ['for ramp power'],
          },
          {
            title: 'parking break pull',
            attributes: ['secure', 'not coming loose'],
          },
          {
            title: 'intercom switch and mic',
            attributes: ['test that interior intercom works'],
          },
          {
            title: 'destination sign',
            attributes: ['test that sign works'],
          },
        ],
      },
    ],
  },
  {
    ID: 5,
    title: 'air brakes',
    subsections: [
      {
        title: 'static brake test',
        components: [
          {
            title: 'wheels chocked',
            attributes: ['chocks on passenger-side rear wheel'],
          },
          {
            title: 'no brakes applied',
            attributes: ['interlock released', 'parking brake released'],
          },
          {
            title: 'ignition switch at accessories',
            attributes: ['switch at accessories'],
          },
          {
            title: 'check brake pressure',
            attributes: ['drops less than 2 PSI over one minute'],
          },
        ],
      },
      {
        title: 'applied brake test',
        components: [
          {
            title: 'apply service brake',
            attributes: ['service brake applied'],
          },
          {
            title: 'check brake pressure',
            attributes: ['drops less than 3 PSI over one minute'],
          },
        ],
      },
      {
        title: 'bleed down test',
        components: [
          {
            title: 'fan service brakes',
            attributes: ['service brakes fanned'],
          },
          {
            title: 'low pressure warnings',
            attributes: ['warnings goes off above 60 psi', 'audio and visual'],
          },
          {
            title: 'parking brake automatically engages',
            attributes: ['brake engages around 25 psi'],
          },
        ],
      },
      {
        title: 'build up test',
        components: [
          {
            title: 'turn engine on',
            attributes: ['Engine on'],
          },
          {
            title: 'warnings turn off',
            attributes: ['warnings turn off over 60 psi', 'audio and visual'],
          },
          {
            title: 'time air build from 85-100 psi',
            attributes: ['must take less than 45 seconds'],
          },
          {
            title: 'governor cut out',
            attributes: ['governor cuts out around 125 psi'],
          },
        ],
      },
      {
        title: 'parking brake test',
        components: [
          {
            title: 'set parking brake',
            attributes: ['parking brake applied'],
          },
          {
            title: 'remove wheel chocks',
            attributes: ['no chocks on bus'],
          },
          {
            title: 'put transmission in drive',
            attributes: ['transmission is in drive'],
          },
          {
            title: 'build to 1000 revs and briefly pull against parking brake',
            attributes: ['parking brake holds'],
          },
        ],
      },
      {
        title: 'service brake test',
        components: [
          {
            title: 'release parking brake',
            attributes: ['keep foot on service brake to prevent rolling'],
          },
          {
            title: 'accelerate to five mph',
            attributes: ['speed reached'],
          },
          {
            title: 'firmly brake',
            attributes: ['check for vehicle pulling to one side or the other'],
          },
        ],
      },
      {
        title: 'interlock test',
        components: [
          {
            title: 'put vehicle in drive',
            attributes: ['apply service brakes for safety'],
          },
          {
            title: 'open passenger door',
            attributes: ['interlock applied'],
          },
          {
            title: 'gently push accelerator',
            attributes: ['transmission should jump to neutral'],
          },
        ],
      },
    ],
  },
  {
    ID: 6,
    title: 'lights',
    subsections: [
      {
        title: 'checkable by yourself',
        components: [
          {
            title: 'hazard lights',
            attributes: ['working properly around the bus'],
          },
          {
            title: 'headlights',
            attributes: ['working properly'],
          },
          {
            title: 'high beams',
            attributes: ['working properly'],
          },
          {
            title: 'right and left blinkers',
            attributes: ['working properly around the bus'],
          },
          {
            title: 'clearance lights',
            attributes: [
              'five in front',
              'three on each side',
              'five on back',
              'all working properly',
            ],
          },
          {
            title: 'reflectors',
            attributes: ['reflectors where legally required'],
          },
          {
            title: 'license plate light',
            attributes: ['working properly'],
          },
        ],
      },
      {
        title: 'checkable by coworker or tester',
        components: [
          {
            title: 'reverse lights and alarm',
            attributes: ['working properly', 'auditory backup warning'],
          },
          {
            title: 'brake lights',
            attributes: ['working properly'],
          },
        ],
      },
    ],
  },
];

module.exports = array;
