var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-yard",
      "name": "Front Yard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2337279591894692,
        "pitch": -0.06049965036944016,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 0.031879763756942125,
          "pitch": 0.24202747306565442,
          "rotation": 0,
          "target": "1-front-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-porch",
      "name": "Front Porch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7965205207158554,
          "pitch": 0.4024515189500377,
          "rotation": 0,
          "target": "0-front-yard"
        },
        {
          "yaw": 0.22155458679890216,
          "pitch": 0.43891658866031413,
          "rotation": 0,
          "target": "2-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-foyer",
      "name": "foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.966967428697764,
        "pitch": 0.30310693622523743,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": -2.135665236267503,
          "pitch": 0.36279200040601367,
          "rotation": 0,
          "target": "1-front-porch"
        },
        {
          "yaw": 2.873301974571759,
          "pitch": 0.6911470019651471,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.8938196271493055,
        "pitch": 0.0711596709443274,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 2.558901098518197,
          "pitch": 0.438164295930477,
          "rotation": 0,
          "target": "10-kitchen-1"
        },
        {
          "yaw": -3.00253919905696,
          "pitch": 0.5050947473919969,
          "rotation": 0,
          "target": "4-hallway"
        },
        {
          "yaw": 0.03277700045418008,
          "pitch": 0.648695093977647,
          "rotation": 0,
          "target": "2-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.6342472129018955,
        "pitch": 0.013796581053437507,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 3.049450492716697,
          "pitch": 0.4921768097944419,
          "rotation": 0,
          "target": "5-master-br-1"
        },
        {
          "yaw": 0.8276427714716483,
          "pitch": 0.641289360982725,
          "rotation": 0,
          "target": "7-smaller-br-1"
        },
        {
          "yaw": -0.09904528563040316,
          "pitch": 0.2676536724366603,
          "rotation": 0,
          "target": "9-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-br-1",
      "name": "Master BR 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.4188466419416734,
        "pitch": 0.14008102080368445,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 2.91050861663037,
          "pitch": 0.45363753347072944,
          "rotation": 0,
          "target": "6-master-br-2"
        },
        {
          "yaw": 0.8006067925451212,
          "pitch": 0.613554501168224,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-master-br-2",
      "name": "Master BR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.823961476449954,
        "pitch": 0.12452187770420053,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 3.055911519750506,
          "pitch": 0.30871264072011684,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-smaller-br-1",
      "name": "Smaller BR 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.9345990944751428,
        "pitch": -0.051264820571585545,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 2.98385811710901,
          "pitch": 0.5338292381177041,
          "rotation": 0,
          "target": "8-smaller-br-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-smaller-br-2",
      "name": "Smaller BR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.9112599585637158,
        "pitch": 0.03277326565838656,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 2.92952241166617,
          "pitch": 0.656582877281032,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.9223360149974926,
        "pitch": 0.1780883949498797,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": -2.928764741305237,
          "pitch": 0.8155684671904346,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kitchen-1",
      "name": "Kitchen 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.4678783669578976,
        "pitch": 0.22074529685500366,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 2.768621441348924,
          "pitch": 0.7185495342828379,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -2.051320080305983,
          "pitch": 0.5741852771940508,
          "rotation": 0,
          "target": "11-kitchen-2"
        },
        {
          "yaw": -2.065825906772437,
          "pitch": 0.09628735037781766,
          "rotation": 0,
          "target": "12-laundry-rm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kitchen-2",
      "name": "Kitchen 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.14444104154435067,
        "pitch": 0.2510977751725587,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 0.13017156378101546,
          "pitch": 0.6046940568104873,
          "rotation": 0,
          "target": "10-kitchen-1"
        },
        {
          "yaw": -2.8026067894393556,
          "pitch": 1.0869175473914439,
          "rotation": 0,
          "target": "12-laundry-rm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-laundry-rm",
      "name": "Laundry Rm",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.4126886901267426,
        "pitch": 0.06070495663511899,
        "fov": 1.4872714375604892
      },
      "linkHotspots": [
        {
          "yaw": 0.2559030529980717,
          "pitch": 0.7271876277130414,
          "rotation": 0,
          "target": "11-kitchen-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.554959722298956,
          "pitch": 0.23639134057473576,
          "title": "Garage",
          "text": "Single Car / Attic Access"
        }
      ]
    }
  ],
  "name": "Grove Street House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
