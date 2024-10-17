const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// In-memory array to store products
let products = [
  {
    id: 1,
    name: "Dell Inspiron Desktop",
    price: 599.99,
    image: "img1",
    category: "Desktop",
  },
  {
    id: 2,
    name: "HP Pavilion Desktop",
    price: 649.99,
    image: "https://example.com/images/hp_pavilion_desktop.jpg",
    category: "Desktop",
  },
  {
    id: 3,
    name: "Lenovo ThinkCentre",
    price: 699.99,
    image: "https://example.com/images/lenovo_thinkcentre.jpg",
    category: "Desktop",
  },
  {
    id: 4,
    name: "Apple iMac",
    price: 1299.99,
    image: "https://example.com/images/apple_imac.jpg",
    category: "Desktop",
  },
  {
    id: 5,
    name: "Acer Aspire Desktop",
    price: 549.99,
    image: "https://example.com/images/acer_aspire_desktop.jpg",
    category: "Desktop",
  },
  {
    id: 6,
    name: "Asus ROG Desktop",
    price: 1499.99,
    image: "https://example.com/images/asus_rog_desktop.jpg",
    category: "Desktop",
  },
  {
    id: 7,
    name: "MSI Trident Desktop",
    price: 799.99,
    image: "https://example.com/images/msi_trident_desktop.jpg",
    category: "Desktop",
  },
  {
    id: 8,
    name: "CyberPowerPC Gamer Xtreme",
    price: 999.99,
    image: "https://example.com/images/cyberpowerpc_gamer_xtreme.jpg",
    category: "Desktop",
  },
  {
    id: 9,
    name: "Alienware Aurora",
    price: 1799.99,
    image: "https://example.com/images/alienware_aurora.jpg",
    category: "Desktop",
  },
  {
    id: 10,
    name: "Corsair One",
    price: 2299.99,
    image: "https://example.com/images/corsair_one.jpg",
    category: "Desktop",
  },
  {
    id: 11,
    name: "NZXT H1 Mini",
    price: 1399.99,
    image: "https://example.com/images/nzxt_h1_mini.jpg",
    category: "Desktop",
  },
  {
    id: 12,
    name: "HP Envy Desktop",
    price: 699.99,
    image: "https://example.com/images/hp_envy_desktop.jpg",
    category: "Desktop",
  },

  // Laptops
  {
    id: 13,
    name: "MacBook Pro",
    price: 1299.99,
    image: "https://example.com/images/macbook_pro.jpg",
    category: "Laptops",
  },
  {
    id: 14,
    name: "Dell XPS 13",
    price: 999.99,
    image: "https://example.com/images/dell_xps_13.jpg",
    category: "Laptops",
  },
  {
    id: 15,
    name: "HP Spectre x360",
    price: 1199.99,
    image: "https://example.com/images/hp_spectre_x360.jpg",
    category: "Laptops",
  },
  {
    id: 16,
    name: "Lenovo Yoga C940",
    price: 1099.99,
    image: "https://example.com/images/lenovo_yoga_c940.jpg",
    category: "Laptops",
  },
  {
    id: 17,
    name: "Asus ZenBook 14",
    price: 849.99,
    image: "https://example.com/images/asus_zenbook_14.jpg",
    category: "Laptops",
  },
  {
    id: 18,
    name: "Acer Swift 3",
    price: 699.99,
    image: "https://example.com/images/acer_swift_3.jpg",
    category: "Laptops",
  },
  {
    id: 19,
    name: "Microsoft Surface Laptop 3",
    price: 999.99,
    image: "https://example.com/images/microsoft_surface_laptop_3.jpg",
    category: "Laptops",
  },
  {
    id: 20,
    name: "Razer Blade 15",
    price: 1599.99,
    image: "https://example.com/images/razer_blade_15.jpg",
    category: "Laptops",
  },
  {
    id: 21,
    name: "MSI GS65 Stealth",
    price: 1499.99,
    image: "https://example.com/images/msi_gs65_stealth.jpg",
    category: "Laptops",
  },
  {
    id: 22,
    name: "Alienware m15",
    price: 1799.99,
    image: "https://example.com/images/alienware_m15.jpg",
    category: "Laptops",
  },
  {
    id: 23,
    name: "Gigabyte Aero 15",
    price: 1599.99,
    image: "https://example.com/images/gigabyte_aero_15.jpg",
    category: "Laptops",
  },
  {
    id: 24,
    name: "Apple MacBook Air",
    price: 999.99,
    image: "https://example.com/images/macbook_air.jpg",
    category: "Laptops",
  },

  // Monitors
  {
    id: 25,
    name: "Samsung Curved Monitor",
    price: 299.99,
    image: "https://example.com/images/samsung_curved_monitor.jpg",
    category: "Monitors",
  },
  {
    id: 26,
    name: "Dell UltraSharp",
    price: 499.99,
    image: "https://example.com/images/dell_ultrasharp.jpg",
    category: "Monitors",
  },
  {
    id: 27,
    name: "LG UltraFine 4K",
    price: 399.99,
    image: "https://example.com/images/lg_ultrafine_4k.jpg",
    category: "Monitors",
  },
  {
    id: 28,
    name: "Acer Predator X27",
    price: 1299.99,
    image: "https://example.com/images/acer_predator_x27.jpg",
    category: "Monitors",
  },
  {
    id: 29,
    name: "Asus ROG Swift",
    price: 999.99,
    image: "https://example.com/images/asus_rog_swift.jpg",
    category: "Monitors",
  },
  {
    id: 30,
    name: "HP Omen 27i",
    price: 499.99,
    image: "https://example.com/images/hp_omen_27i.jpg",
    category: "Monitors",
  },
  {
    id: 31,
    name: "BenQ PD3220U",
    price: 899.99,
    image: "https://example.com/images/benq_pd3220u.jpg",
    category: "Monitors",
  },
  {
    id: 32,
    name: "ViewSonic Elite XG270",
    price: 699.99,
    image: "https://example.com/images/viewsonic_elite_xg270.jpg",
    category: "Monitors",
  },
  {
    id: 33,
    name: "Gigabyte Aorus FI27Q",
    price: 799.99,
    image: "https://example.com/images/gigabyte_aorus_fi27q.jpg",
    category: "Monitors",
  },
  {
    id: 34,
    name: "Samsung Odyssey G7",
    price: 799.99,
    image: "https://example.com/images/samsung_odyssey_g7.jpg",
    category: "Monitors",
  },
  {
    id: 35,
    name: "Dell Alienware AW3420DW",
    price: 1199.99,
    image: "https://example.com/images/dell_alienware_aw3420dw.jpg",
    category: "Monitors",
  },
  {
    id: 36,
    name: "LG 27UK850-W",
    price: 449.99,
    image: "https://example.com/images/lg_27uk850_w.jpg",
    category: "Monitors",
  },

  // Software
  {
    id: 37,
    name: "Microsoft Office 365",
    price: 99.99,
    image: "https://example.com/images/office_365.jpg",
    category: "Software",
  },
  {
    id: 38,
    name: "Adobe Photoshop",
    price: 239.99,
    image: "https://example.com/images/adobe_photoshop.jpg",
    category: "Software",
  },
  {
    id: 39,
    name: "Autodesk AutoCAD",
    price: 1599.99,
    image: "https://example.com/images/autodesk_autocad.jpg",
    category: "Software",
  },
  {
    id: 40,
    name: "Intuit QuickBooks",
    price: 299.99,
    image: "https://example.com/images/intuit_quickbooks.jpg",
    category: "Software",
  },
  {
    id: 41,
    name: "Norton 360",
    price: 49.99,
    image: "https://example.com/images/norton_360.jpg",
    category: "Software",
  },
  {
    id: 42,
    name: "CorelDRAW Graphics Suite",
    price: 499.99,
    image: "https://example.com/images/coreldraw_graphics_suite.jpg",
    category: "Software",
  },
  {
    id: 43,
    name: "Final Cut Pro",
    price: 299.99,
    image: "https://example.com/images/final_cut_pro.jpg",
    category: "Software",
  },
  {
    id: 44,
    name: "Microsoft Windows 10",
    price: 139.99,
    image: "https://example.com/images/windows_10.jpg",
    category: "Software",
  },
  {
    id: 45,
    name: "VMware Workstation Pro",
    price: 249.99,
    image: "https://example.com/images/vmware_workstation_pro.jpg",
    category: "Software",
  },
  {
    id: 46,
    name: "McAfee Total Protection",
    price: 79.99,
    image: "https://example.com/images/mcafee_total_protection.jpg",
    category: "Software",
  },

  // Accessories
  {
    id: 47,
    name: "Logitech MX Master 3",
    price: 99.99,
    image: "https://example.com/images/logitech_mx_master_3.jpg",
    category: "Accessories",
  },
  {
    id: 48,
    name: "Bose QuietComfort 35 II",
    price: 299.99,
    image: "https://example.com/images/bose_qc35_ii.jpg",
    category: "Accessories",
  },
  {
    id: 49,
    name: "Apple AirPods Pro",
    price: 249.99,
    image: "https://example.com/images/apple_airpods_pro.jpg",
    category: "Accessories",
  },
  {
    id: 50,
    name: "Samsung T7 Portable SSD",
    price: 149.99,
    image: "https://example.com/images/samsung_t7_portable_ssd.jpg",
    category: "Accessories",
  },
  {
    id: 51,
    name: "Razer DeathAdder Elite",
    price: 69.99,
    image: "https://example.com/images/razer_deathadder_elite.jpg",
    category: "Accessories",
  },
  {
    id: 52,
    name: "SteelSeries Arctis 7",
    price: 149.99,
    image: "https://example.com/images/steelseries_arctis_7.jpg",
    category: "Accessories",
  },
  {
    id: 53,
    name: "Anker PowerCore 26800",
    price: 59.99,
    image: "https://example.com/images/anker_powercore_26800.jpg",
    category: "Accessories",
  },
  {
    id: 54,
    name: "LG 27UL650-W Monitor",
    price: 349.99,
    image: "https://example.com/images/lg_27ul650_w.jpg",
    category: "Accessories",
  },
  {
    id: 55,
    name: "Corsair K95 RGB Platinum",
    price: 179.99,
    image: "https://example.com/images/corsair_k95_rgb_platinum.jpg",
    category: "Accessories",
  },
  {
    id: 56,
    name: "Elgato Stream Deck",
    price: 149.99,
    image: "https://example.com/images/elgato_stream_deck.jpg",
    category: "Accessories",
  },
  {
    id: 57,
    name: "Sony WH-1000XM4",
    price: 349.99,
    image: "https://example.com/images/sony_wh_1000xm4.jpg",
    category: "Accessories",
  },
  {
    id: 58,
    name: "Logitech G Pro X Wireless",
    price: 199.99,
    image: "https://example.com/images/logitech_g_pro_x_wireless.jpg",
    category: "Accessories",
  },

  // Storage
  {
    id: 59,
    name: "WD Black SN750 NVMe SSD",
    price: 129.99,
    image: "https://example.com/images/wd_black_sn750_nvme_ssd.jpg",
    category: "Storage",
  },
  {
    id: 60,
    name: "Samsung 970 EVO Plus SSD",
    price: 179.99,
    image: "https://example.com/images/samsung_970_evo_plus_ssd.jpg",
    category: "Storage",
  },
  {
    id: 61,
    name: "Crucial MX500 SSD",
    price: 99.99,
    image: "https://example.com/images/crucial_mx500_ssd.jpg",
    category: "Storage",
  },
  {
    id: 62,
    name: "Seagate BarraCuda HDD",
    price: 79.99,
    image: "https://example.com/images/seagate_barracuda_hdd.jpg",
    category: "Storage",
  },
  {
    id: 63,
    name: "Western Digital My Passport",
    price: 79.99,
    image: "https://example.com/images/wd_my_passport.jpg",
    category: "Storage",
  },
  {
    id: 64,
    name: "SanDisk Extreme Portable SSD",
    price: 149.99,
    image: "https://example.com/images/sandisk_extreme_portable_ssd.jpg",
    category: "Storage",
  },
  {
    id: 65,
    name: "ADATA XPG SX8200 Pro",
    price: 119.99,
    image: "https://example.com/images/adata_xpg_sx8200_pro.jpg",
    category: "Storage",
  },
  {
    id: 66,
    name: "LaCie Rugged Mini External HDD",
    price: 99.99,
    image: "https://example.com/images/lacie_rugged_mini.jpg",
    category: "Storage",
  },
  {
    id: 67,
    name: "Kingston A2000 NVMe PCIe SSD",
    price: 109.99,
    image: "https://example.com/images/kingston_a2000_nvme_ssd.jpg",
    category: "Storage",
  },
  {
    id: 68,
    name: "Toshiba Canvio",
    price: 59.99,
    image: "https://example.com/images/toshiba_canvio_basics.jpg",
    category: "Storage",
  },
  {
    id: 69,
    name: "G-Technology G-DRIVE USB-C",
    price: 199.99,
    image: "https://example.com/images/gtechnology_gdrive_usbc.jpg",
    category: "Storage",
  },
  {
    id: 70,
    name: "Intel Optane SSD 905P",
    price: 449.99,
    image: "https://example.com/images/intel_optane_ssd_905p.jpg",
    category: "Storage",
  },

  // Components
  {
    id: 71,
    name: "AMD Ryzen 9 5900X",
    price: 549.99,
    image: "https://example.com/images/amd_ryzen_9_5900x.jpg",
    category: "Components",
  },
  {
    id: 72,
    name: "NVIDIA GeForce RTX 3080",
    price: 699.99,
    image: "https://example.com/images/nvidia_geforce_rtx_3080.jpg",
    category: "Components",
  },
  {
    id: 73,
    name: "MSI MPG X570 GAMING EDGE WIFI",
    price: 199.99,
    image: "https://example.com/images/msi_mpg_x570.jpg",
    category: "Components",
  },
  {
    id: 74,
    name: "Corsair Vengeance RGB Pro 32GB",
    price: 149.99,
    image: "https://example.com/images/corsair_vengeance_rgb_pro.jpg",
    category: "Components",
  },
  {
    id: 75,
    name: "ASUS ROG Strix B550-F Gaming",
    price: 159.99,
    image: "https://example.com/images/asus_rog_strix_b550f.jpg",
    category: "Components",
  },
  {
    id: 76,
    name: "G.Skill Trident Z RGB 16GB",
    price: 99.99,
    image: "https://example.com/images/gskill_trident_z_rgb.jpg",
    category: "Components",
  },
  {
    id: 77,
    name: "EVGA SuperNOVA 850 G5",
    price: 159.99,
    image: "https://example.com/images/evga_supernova_850_g5.jpg",
    category: "Components",
  },
  {
    id: 78,
    name: "Cooler Master Hyper 212 RGB",
    price: 49.99,
    image: "https://example.com/images/cooler_master_hyper_212_rgb.jpg",
    category: "Components",
  },
  {
    id: 79,
    name: "Samsung 970 PRO NVMe SSD",
    price: 229.99,
    image: "https://example.com/images/samsung_970_pro.jpg",
    category: "Components",
  },
  {
    id: 80,
    name: "NZXT Kraken X63 RGB",
    price: 149.99,
    image: "https://example.com/images/nzxt_kraken_x63.jpg",
    category: "Components",
  },
  {
    id: 81,
    name: "Intel Core i9-11900K",
    price: 499.99,
    image: "https://example.com/images/intel_core_i9_11900k.jpg",
    category: "Components",
  },
  {
    id: 82,
    name: "Seagate FireCuda 520 NVMe SSD",
    price: 179.99,
    image: "https://example.com/images/seagate_firecuda_520.jpg",
    category: "Components",
  },

  // Gadgets
  {
    id: 83,
    name: "Fitbit Versa 3",
    price: 229.99,
    image: "https://example.com/images/fitbit_versa_3.jpg",
    category: "Gadget",
  },
  {
    id: 84,
    name: "GoPro HERO9 Black",
    price: 449.99,
    image: "https://example.com/images/gopro_hero9_black.jpg",
    category: "Gadget",
  },
  {
    id: 85,
    name: "Amazon Echo (4th Gen)",
    price: 99.99,
    image: "https://example.com/images/amazon_echo_4th_gen.jpg",
    category: "Gadget",
  },
  {
    id: 86,
    name: "Apple Watch Series 6",
    price: 399.99,
    image: "https://example.com/images/apple_watch_series_6.jpg",
    category: "Gadget",
  },
  {
    id: 87,
    name: "Sony WH-1000XM4 Headphones",
    price: 349.99,
    image: "https://example.com/images/sony_wh_1000xm4_headphones.jpg",
    category: "Gadget",
  },
  {
    id: 88,
    name: "DJI Mavic Air 2",
    price: 799.99,
    image: "https://example.com/images/dji_mavic_air_2.jpg",
    category: "Gadget",
  },
  {
    id: 89,
    name: "Nintendo Switch",
    price: 299.99,
    image: "https://example.com/images/nintendo_switch.jpg",
    category: "Gadget",
  },
  {
    id: 90,
    name: "Microsoft Surface Pro 7",
    price: 899.99,
    image: "https://example.com/images/microsoft_surface_pro_7.jpg",
    category: "Gadget",
  },
  {
    id: 91,
    name: "Roku Ultra",
    price: 99.99,
    image: "https://example.com/images/roku_ultra.jpg",
    category: "Gadget",
  },
  {
    id: 92,
    name: "Garmin Forerunner 945",
    price: 599.99,
    image: "https://example.com/images/garmin_forerunner_945.jpg",
    category: "Gadget",
  },
  {
    id: 93,
    name: "Samsung Galaxy Watch 3",
    price: 399.99,
    image: "https://example.com/images/samsung_galaxy_watch_3.jpg",
    category: "Gadget",
  },
  {
    id: 94,
    name: "Canon EOS R5",
    price: 3899.99,
    image: "https://example.com/images/canon_eos_r5.jpg",
    category: "Gadget",
  },

  // Gaming
  {
    id: 95,
    name: "Sony PlayStation 5",
    price: 499.99,
    image: "https://example.com/images/sony_playstation_5.jpg",
    category: "Gaming",
  },
  {
    id: 96,
    name: "Xbox Series X",
    price: 499.99,
    image: "https://example.com/images/xbox_series_x.jpg",
    category: "Gaming",
  },
  {
    id: 97,
    name: "Nintendo Switch OLED Model",
    price: 349.99,
    image: "https://example.com/images/nintendo_switch_oled.jpg",
    category: "Gaming",
  },
  {
    id: 98,
    name: "Alienware AW2521H Gaming Monitor",
    price: 499.99,
    image: "https://example.com/images/alienware_aw2521h.jpg",
    category: "Gaming",
  },
  {
    id: 99,
    name: "Razer BlackShark V2 Pro",
    price: 179.99,
    image: "https://example.com/images/razer_blackshark_v2_pro.jpg",
    category: "Gaming",
  },
  {
    id: 100,
    name: "Corsair K70 RGB MK.2",
    price: 159.99,
    image: "https://example.com/images/corsair_k70_rgb_mk2.jpg",
    category: "Gaming",
  },
  {
    id: 101,
    name: "Logitech G Pro X Superlight",
    price: 149.99,
    image: "https://example.com/images/logitech_g_pro_x_superlight.jpg",
    category: "Gaming",
  },
  {
    id: 102,
    name: "SteelSeries Arctis Pro Wireless",
    price: 329.99,
    image: "https://example.com/images/steelseries_arctis_pro_wireless.jpg",
    category: "Gaming",
  },
  {
    id: 103,
    name: "ASUS ROG Zephyrus G14",
    price: 1499.99,
    image: "https://example.com/images/asus_rog_zephyrus_g14.jpg",
    category: "Gaming",
  },
  {
    id: 104,
    name: "MSI GE66 Raider",
    price: 1999.99,
    image: "https://example.com/images/msi_ge66_raider.jpg",
    category: "Gaming",
  },
  {
    id: 105,
    name: "HP OMEN 30L Gaming Desktop",
    price: 1499.99,
    image: "https://example.com/images/hp_omen_30l.jpg",
    category: "Gaming",
  },
  {
    id: 106,
    name: "Logitech G923 Racing Wheel",
    price: 399.99,
    image: "https://example.com/images/logitech_g923.jpg",
    category: "Gaming",
  },

  // Printers
  {
    id: 107,
    name: "HP OfficeJet Pro 9015",
    price: 229.99,
    image: "https://example.com/images/hp_officejet_pro_9015.jpg",
    category: "Printers",
  },
  {
    id: 108,
    name: "Epson EcoTank ET-2720",
    price: 199.99,
    image: "https://example.com/images/epson_ecotank_et_2720.jpg",
    category: "Printers",
  },
  {
    id: 109,
    name: "Canon PIXMA TR8520",
    price: 179.99,
    image: "https://example.com/images/canon_pixma_tr8520.jpg",
    category: "Printers",
  },
  {
    id: 110,
    name: "Brother HL-L2350DW",
    price: 119.99,
    image: "https://example.com/images/brother_hl_l2350dw.jpg",
    category: "Printers",
  },
  {
    id: 111,
    name: "Xerox Phaser 6510/DNI",
    price: 249.99,
    image: "https://example.com/images/xerox_phaser_6510_dni.jpg",
    category: "Printers",
  },
  {
    id: 112,
    name: "Samsung Xpress M2020W",
    price: 129.99,
    image: "https://example.com/images/samsung_xpress_m2020w.jpg",
    category: "Printers",
  },
  {
    id: 113,
    name: "Lexmark MC3224adwe",
    price: 349.99,
    image: "https://example.com/images/lexmark_mc3224adwe.jpg",
    category: "Printers",
  },
  {
    id: 114,
    name: "Dell E310dw",
    price: 149.99,
    image: "https://example.com/images/dell_e310dw.jpg",
    category: "Printers",
  },
  {
    id: 115,
    name: "Ricoh SP C261SFNw",
    price: 299.99,
    image: "https://example.com/images/ricoh_sp_c261sfnw.jpg",
    category: "Printers",
  },
  {
    id: 116,
    name: "Kyocera Ecosys P5026cdw",
    price: 379.99,
    image: "https://example.com/images/kyocera_ecosys_p5026cdw.jpg",
    category: "Printers",
  },
  {
    id: 117,
    name: "HP LaserJet Pro M404dn",
    price: 249.99,
    image: "https://example.com/images/hp_laserjet_pro_m404dn.jpg",
    category: "Printers",
  },
  {
    id: 118,
    name: "Canon imageCLASS MF264dw",
    price: 199.99,
    image: "https://example.com/images/canon_imageclass_mf264dw.jpg",
    category: "Printers",
  },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get a product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// Create a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    vendor: req.body.vendor,
    category: req.body.category,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update an existing product
app.put('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = req.body.name || product.name;
  product.quantity = req.body.quantity || product.quantity;
  product.price = req.body.price || product.price;
  product.vendor = req.body.vendor || product.vendor;
  product.category = req.body.category || product.category;

  res.json(product);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (productIndex === -1)
    return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct);
});

// Search for products
app.get('/api/search', (req, res) => {
  const { name, vendor, category } = req.query;
  let filteredProducts = products;

  if (name) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (vendor) {
    filteredProducts = filteredProducts.filter((product) =>
      product.vendor.toLowerCase().includes(vendor.toLowerCase())
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  res.json(filteredProducts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
