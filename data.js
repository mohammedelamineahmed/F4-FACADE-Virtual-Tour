var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre",
      "name": "Entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3013426944920095
      },
      "linkHotspots": [
        {
          "yaw": 0.20796609649384123,
          "pitch": 0.36847340410686336,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": 2.7778901131584366,
          "pitch": 0.11133166217953594,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": 2.000239802851808,
          "pitch": 0.09183403440870919,
          "rotation": 0,
          "target": "3-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0358908061602285,
          "pitch": 0.41290173858855717,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 2.3361652170042904,
          "pitch": 0.049038407298432674,
          "rotation": 0,
          "target": "7-chambre-1"
        },
        {
          "yaw": 0.4110567516667949,
          "pitch": -0.007028157985768502,
          "rotation": 0,
          "target": "9-chambre-2"
        },
        {
          "yaw": 0.028396422315218217,
          "pitch": -0.004342280384536323,
          "rotation": 0,
          "target": "10-chambre-3"
        },
        {
          "yaw": -0.5544505698177744,
          "pitch": 0.03731337866913087,
          "rotation": 0,
          "target": "5-sdb"
        },
        {
          "yaw": -2.5015153480758983,
          "pitch": 0.10868726992767108,
          "rotation": 0,
          "target": "6-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon",
      "name": "SALON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.972385720913703,
          "pitch": -0.010375489893936773,
          "rotation": 0,
          "target": "0-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cuisine",
      "name": "CUISINE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6891346453971572,
          "pitch": 0.03106193148991565,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 1.455173130130576,
          "pitch": 0.07074318031024518,
          "rotation": 0,
          "target": "4-terrasse-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terrasse-1",
      "name": "Terrasse 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5664443628209206,
          "pitch": 0.07006158876659896,
          "rotation": 0,
          "target": "3-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sdb",
      "name": "S.D.B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6358946835974777,
          "pitch": 0.09442355174631878,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wc",
      "name": "W.C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1065640155580496,
          "pitch": 0.2656548248312589,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-chambre-1",
      "name": "Chambre 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6137114852087358,
          "pitch": -0.012654933988235584,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -0.06764559749451493,
          "pitch": 0.01103596696533593,
          "rotation": 0,
          "target": "8-terrasse-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-terrasse-2",
      "name": "Terrasse 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22527195365124797,
          "pitch": 0.02922042432724936,
          "rotation": 0,
          "target": "7-chambre-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-chambre-2",
      "name": "Chambre 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.84330668733448,
          "pitch": 0.024132225462023982,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-chambre-3",
      "name": "Chambre 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5371687376569145,
          "pitch": 0.03436096661164001,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": 0.7247923920924908,
          "pitch": 0.07514900333819874,
          "rotation": 0,
          "target": "11-terrasse-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-terrasse-3",
      "name": "Terrasse 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33620454703345715,
          "pitch": 0.0650671826928999,
          "rotation": 0,
          "target": "10-chambre-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "F4 FACADE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
