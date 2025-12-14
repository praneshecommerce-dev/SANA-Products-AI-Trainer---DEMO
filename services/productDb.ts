import { Product, SearchResult } from '../types';

// Raw data string from the prompt
const RAW_DATA = `3M-1625	Special Contact Cleaner
3M-2183	3M E-Z WRAPلاصق كهربائي
3M-2900R	SEALING COLLAR TAPE
3M-CAT6	3M Cat.6 UTP Cable
3M-CB/G+	Spring Connector Blue&Gray
3M-CBE	Spring Connector Blue
3M-CGY	Spring Connector Grey
3M-CR/Y+	3M SPRING CONNECTOR RED/YELLOW
3M-CRD	Spring Connector Red
3M-CYW	Spring Connector Yellow
3M-J92A1	Cable Joint 6-10mm X 4Core
3M-JKIT	Cable Joint Kit/ 3M.JA1A2.92A5
3M-MARKER	Wire Marker Tape
3M-RESIN	3M Scotch Compound 4407 gara
3M-SH0400	Heat Shrinking
3M-SH1100	Heat Shrinking
3M-SH1500	Heat Shrinking
3M-SH2000	Heat Shrinking
3M-SH6	Heat Sgrinkable Size 6 Inch
3M-T130C	Sotch linerless splicing tape 130c
3M-T23	Rubber Splicing Tape-23
3M-T24	3M Tape
3M-T27-3/4	Glass Electrical Tape
3M-T33	Electrical Tape
3M-T33+	*Vinyl Electrical Tape-33+
3M-T35	*Vinyl Electrical Tape-35  All Color (  Without Black)
3M-T69	Glass Cloth Electrical Tape
3M-T70	3m Scotch Tape 70
3M-T77	3M Tape77 [ RETRADING TAPE]
3M-T88BK	3M Tape
3M-TPUTTY	Vinyl Electrical Tape-Putty
3M-UB2A-D	3M Socth Lock Connector Dry
3M-UY2	Telephone Connector  ur
3M-UYC	Telephone UY Connector
3M-WLX-1	3M Wire Pulling Lubricant Gallon
3M-WLX-5	*3M WIRE PULLING LUBRICANT 5 GALLON
3M-WLX-QT	3M Wire Pulling Lubricant Quart
8122004	UP CABLE LUGS FOR SCECO (185-12)
8122006	UP CABLE LUGS FOR SCECO (630/4x10)
8122007	CONNECTOR, LUG,(300-17AL)
8122008	Aluminium Cable Lug 300-12
8122018	UP Cable Lugs For  Sceco  (185-185)-CU
8122019	Copper Connector CU300-CU300
8122027	Aluminum Bimatalic Lugs AL70-CU35
8122032	Aluminum Bimatalic Lugs AL300-CU120
8122034	Copper Cable Lugs 70mm SCECO
8122037	Aluminum Bimatalic Lugs ML240-12
8122038	Aluminum Bimatalic Lugs ML500-16
AMP-0-0219585-2	AMP Cat6 UTP 4 Pair Cable LSZH WHITE
AMP-0-1671227-3	CAS QFIT MPOPTIMATE MPO/6xLC-QUAD STRIGHT
AMP-0-1711275-1	AMP 25X50 ANGLED SHUTTER UNLOADED MODULE
AMP-0-1711403-1	AMP Blanking Plate 50X25 WHITE
AMP-0-1859160-1	AMP CABLE MANAGEMENT PANEL BLACK - CONCAVE
AMP-1-1671080-2	2U PASS THROUGH DUCT - HI-D 2U (FRAME)
AMP-1-1671227-3	CAS QFIT MPOPTIMATE MPO/6xLC-Q FLIPPED
AMP-1-1671590-1	UCP PATCH PANEL 1U ANGLED
AMP-1479698-1	BLANK QUICK-FIT MODULE- HSG,BLANK,FRONT-LOAD
AMP-1-5502776-2	SC DUPLEX / SC DUPLEX ADAPTOR-DUP ADAPTOR SC
AMP-1-599146-2	POC FIBER OPTIC CABLE - IEDC - 8X2
AMP-1-599624-2	FIBER OPTIC CABLE POC-FO-CABLE- RRGLT -8X2
AMP-1-6457567-6	ASSY, LC, DUPLEX, W/ FLNG AQUA
AMP-1671281-1	SPLICE TRAYS -SPLICE TRAY KIT SMOUV (62mm)
AMP-1671495-1	CABLE MANAGER FOR CABINET - HIGH DENSITY FRONT LOADING CM 1U
AMP-1933327-1	50PORT TEL PATCH PANEL - AMPTRAC ASY, 24P,CAT6UTP,1U
AMP-2160042-2	FOMM 50, PIG TAIL OM4 0.9S LC - 2M
AMP-2160046-3	FOMM 50, LEAD OM4 1.8 MZ, LC-LC -3M
AMP-2-2055715-0	PRE TERMINATED TRUNK - MPOPTIMATE LDMM50/OM3 24F STR 20M
AMP-2-2055715-5	PRE TERMINATED TRUNK - MPOPTIMATE LDMM50/OM3 24F STR 25M
AMP-2-5502776-6	SC DUPLEX / SC DUPLEX ADAPTOR-DUP RECEP, SC, CER, AQUA
AMP-2-599683-3	FIBER OPTIC CABLE - POC-CST-12X3-HDPE-2KM
AMP-2-599683-4	FIBER OPTIC CABLE - FO AKB ST HDPE 12F 9
AMP-5492123-1	SC CONNECTOR -KIT,CONN,SM,SC,1PC, 900UM,125UM
AMP-5503948-1	SC CONNECTOR -KIT,CONN,SC,900UM,3.0MM, MM, CER
AMP-5504640-1	SC DUPLEX/SC DUPLEX ADAPTORS- MM
AMP-5504932-1	SC CONNECTOR -KIT,CONN,SC,900UM,3.0MM, MM, CER
AMP-6348260-2	SC DUPLEX / SC DUPLEX PATCH CORD- FOSM LEAD 2.5T DPX2M
AMP-6457567-4	ASSY, ADAPTOR DUPLEX, LC, SR BLUE
AMP-6536464-2	SC DUPLEX / SC DUPLEX APATCH CORD - FOMM50 2.5S TZ OM3
AMP-6536508-2	LC DUPLEX/ SC DUPLEX PATCH CORD - FOSM LEAD 1.8MZ X 2M
AMP-6536508-3	SC DUPLEX / SC DUPLEX PATCH CORD- FOSM LEAD 1.8MZ DPX 3M
AMP-6536967-2	LC DUPLEX/ SC DUPLEX PATCH CORD - FOMM50 LEAD OM3 1.8MZX2M
AMP-6536967-3	LC DUPLEX/ SC DUPLEX PATCH CORD - FOMM50 LEAD OM3 1.8MZX3M
AMP-6536969-3	LC DUPLEX/ SC DUPLEX PATCH CORD-FOMM50LEAD OM3 1.8MZ LCLCX3M
AMP-6540181204	Deep Outlet Double - UK style
AMP-657054-000	SPLICE PROTECTOR SMOUV-1120-01-PK (62mm)
AMP-CAT-6	AMP Cat6 UTP 4 Pair Cable PVC (0-0219584-2)سلك كمبيوتر
AMP-CAT6FTP	C6A F/FTP SOLID PRO4 AWG23 LSZH WHT 500M (2153290-2)
AMP-CG	AMP Connector Green(0-0060945-4)
AMP-FC-MM2-FC-OM3	Pig Tail Patch Cord 2M FC OM3
AMP-FC-MM2-LC-OM3	Pig Tail PC 2M LC OM3 (0-6536966-2)
AMP-FC-MM2-SC-OM3	Pig Tail PC 2M SC OM3 (0-6536555-2)
AMP-FC-MM2-ST-OM3	Pig Tail Patch Cord 2M ST OM3(9-1966394-1)
AMP-FC-MM3-LCLC	F/O P.Cord LC/LC Duplex 3M MM (0-6536502-3)
AMP-FC-MM3-LCSC	F/O P.cord LC/SC Duplex 3M MM (0-6536509-3)
AMP-FC-MM3-SCSC	F/O P.CORD SC/SC DUP 3M MM (0-5349565-3)
AMP-FC-SM2-FC	Pig Tail PC 2M FC OS2 (0-5233593-2)
AMP-FC-SM2-LC	Pig Tail PC 2M LC OS2 (0-6536880-2)
AMP-FC-SM2-SC	Pig Tail PC 2M SC OS2 (0-5233582-2)
AMP-FC-SM2-ST	Pig Tail Patch Cord 2M ST OS2(5233352-2)
AMP-FC-SM3-LCLC	F/O P.Cord LC/LC Duplex 3M Single Mode (0-6536501-3)
AMP-FC-SM3-SCSC	F/O P.cord SC/SC DUP 3M SM (0-6348260-3)
AMP-FOC-12MN3	F/O Cable 12C MM OM3 Indoor 1KM/Drum (1-599148-3)
AMP-FOC-12MO3	F/O Cable 12C OM3 Outdoor MM 1km/Drum (1-599625-3)
AMP-FOC-12SN2	F/O Cable 12C SM OS2 Indoor 1KM/Drum (1-599148-4)
AMP-FOC-12SO2	F/O Cable 12C OS2 Outdoor SM 1km/Drum (1-599625-4)
AMP-FOC-24MO3	F/O Cable 24C OM3 Outdoor MM 1km/Drum (1-599627-3)
AMP-FOC-24SO2	F/O Cable 24C OS2 Outdoor SM 1km/Drum (1-599627-4)
AMP-FOC-8MN3	F/O Cable 8C MM OM3 Indoor 1KM/Drum (1-599146-3)
AMP-FOC-8MO3	F/O Cable 8C OM3 Outdoor MM 1km/Drum (1-599624-3)
AMP-FOC-8SN2	F/O Cable 8C SM OS2 Indoor 1KM/Drum (1-599146-4)
AMP-FOC-8SO2	F/O Cable 8C OS2 Outdoor SM 1km/Drum (1-599624-4)
AMP-FOPP12-SC	F/O P.Panel 12P Duplex SC (0-1206138-8)
AMP-FOPP24-LC	F/O P.Panel 24P Duplex LC (0-1671000-8)
AMP-FOPP24-SC	F/O P.Panel 24P Duplex SC (0-1206343-4)
AMP-FP1	AMP Single Face Plate 86x86mm (0-1711301-1)
AMP-FP2	AMP Dual Face Plate 86x86mm (0-1711302-1)
AMP-KES-6	AMP Cat6 K.Stone Jack (0-1375055-2)
AMP-PC1	AMP Cat6 UTP PatchCord 1 Meter (0-1711091-1)
AMP-PC3	AMP P Cord UTP Cat6 3 Meter (0-1711091-3)
AMP-PC5	AMP P Cord UTP Cat6 5 Meter (0-1711091-5)
AMP-PP24T6	AMP Patch Panel 24P Cat6 UTP (0-1375014-2)
AMP-PP48T6	PATCH PANEL 48 PORT-PNL ASSY CAT 6 (1375015-2)
AMP-SH-A	AMP Single Shutter Angled (0-1859096-1)
AMP-TL-C8PK	AMP Twist Modular Jack Termination Tool Kit (0-1725150-1)
AR-EMTP1	Thailand EMT Pipe 1"-ماسورة حديد
AR-EMTP1/2	Thailand EMT Pipe 1/2"-ماسورة حديد
AR-EMTP3/4	Thailand EMT Pipe 3/4"-ماسورة حديد
AR-GFLX1	THAILAND GALVANISED STEEL FLEXIBLE 1(15M)-جرجور
AR-GFLX1/2	THAILAND GALVANISED STEEL FLEXIBLE 1/2 (1x6Bag) & 30M-جرجور
AR-GFLX3/4	THAILAND GALVANISED STEEL FLEXIBLE 3/4(30M)-جرجور
AR-PFLX1	THAILAND PVC COATED STEEL FLEXIBLE 1-جرجور
AR-PFLX1/2	THAILAND PVC COATED STEEL FLEXIBLE 1/2-جرجور
AR-PFLX3/4	THAILAND PVC COATED STEEL FLEXIBLE 3/4-جرجور
BRO-HSE-231E	12MMX1.5M BLACK ON WHITE HEAT SHRINKABLE TUBE TAPE
BRO-PA-RL001	SPARE PARTS(ROLLER)-8VA91A009F6
BRO-PA-RL002	SPARE PARTS(ROLLER)-8VA91A009F7
BRO-PA-RL003	SPARE PARTS(ROLLER)-8VA91A009F8
BRO-PT-E110VP	ELECTRICIAN LABEL PRINTER
BRO-PT-E850TKWLI	INDUSTRIAL FERRULE TUBE PRINTER
BRO-PT-H110	HANDHELD HOME LABEL MAKER
BRO-TR-100BK	THERMAL INK RIBBON 100 METERS FOR PT-E850TKW
BRO-TZE-131	12MM BLACK ON CLEAR LAMINATED LABEL TAPE
BRO-TZE-221	9MM BLACK ON WHITE LAMINATED LABEL TAPE
BRO-TZE-231	12MM BLACK ON WHITE LAMINATED LABEL TAPE
BRO-TZE-325	9MM WHITE ON BLACK LAMINATED LABEL TAPE
BRO-TZE-335	12MM WHITE ON BLACK LAMINATED LABEL TAPE
BRO-TZE-421	9MM BLACK ON RED LAMINATED LABEL TAPE
BRO-TZE-431	12MM BLACK ON RED LAMINATED LABEL TAPE
BRO-TZE-521	9MM BLACK ON BLUE LAMINATED LABEL TAPE
BRO-TZE-531	12MM BLACK ON BLUE LAMINATED LABEL TAPE
BRO-TZE-621	9MM BLACK ON YELLOW LAMINATED LABEL TAPE
BRO-TZE-631	12MM BLACK ON YELLOW LAMINATED LABEL TAPE
BRO-TZE-FA3	12MMX3M BLUE ON WHITE IRON TAPE (FABRIC)
CAB-0181190	70 MM  TERMINAL BLOCK SET
CAB-ACB-120/CC	Cabur Italy Terminal Block
CAB-ACB-185/CC	Cabur Italy Terminal Block
CAB-ACB-70/CC	Cabur Italy Terminal Block 70mm
CAB-BT/3	Cabur Italy Stopper
CAB-BT/DIN/PO	Cabur Italy Stopper
CAB-BTU	Cabur Italy End  Stoper
CAB-CB10/PT	Cabur Italy Terminal Block
CAB-CB10/PT(EX)I	Cabur Italy End Plate 10MM
CAB-CB16/PT(EX)I	Cabur Italy End Plate 16MM
CAB-CB16PT	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-CB2/PT	Cabur Italy Terminal Block-  غطاء توصيلة اسلاك
CAB-CB2/PT(EX)I	Cabur Italy Acessories- غطاء توصيلة اسلاك
CAB-CB25/PT	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-CB25/PT(EX)I	Cabur Italy End Plate 25MM- غطاء توصيلة اسلاك
CAB-CB35/PT	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-CB35/PT(EX)I	Cabur, Italy, End Selction-غطاء توصيلة اسلاك
CAB-CB4/6/PT(EX)	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-CB4/6PT	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-CB50/PT	Cabur,Italy End Plate-غطاء توصيلة اسلاك
CAB-CB70/PT	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-CB70/PT(EX)I	Cabur Italy End Plate 70M-غطاء توصيلة اسلاك
CAB-CBD10	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CBD-10(EX)I	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-CBD16	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CBD-16(EX)I	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CBD2	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CBD-2(EX)I	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CBD25	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CBD-25(EX)I	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CBD35	Cabur Italy Terminal Block
CAB-CBD-35(EX)I	Cabur Italy Terminal Block
CAB-CBD4	Cabur Italy Terminal Block 4mm
CAB-CBD-4(EX)I	Cabur Italy Terminal Block 4mm
CAB-CBD50	Cabur Italy Terminal Block
CAB-CBD-50(EX)I	Cabur Italy Terminal Block 50mm
CAB-CBD6	Cabur Italy Terminal Block
CAB-CBD-6(EX)I	Cabur Italy Terminal Block 6mm
CAB-CBD70	Cabur Italy Terminal block
CAB-CBD-70(EX)I	Cabur Italy Terminal Block
CAB-CDA/BT	Cabur Italy Accessories
CAB-CDA-120/CC	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CDA-120/PT	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-CDA-185/CC	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-CDA-185/PT	Cabur Italy Terminal Block-
CAB-CDA-70/BB	Cabur Italy Terminal Block
CAB-CDA-70/BC	Cabur Italy Terminal Block
CAB-CDA-70/CC	Cabur Italy Terminal Block
CAB-CDA-70/PT	Cabur Italy Terminal Block
CAB-CNU/8	Cabur Italy Terminal Marker-مجموعة ارقام
CAB-CO/5	Conducting Elements (VL103)
CAB-CPM/01	Cabur Italy Screw Jumber 2mm-برغي قنطره
CAB-CPM/03	Cabur Italy Screw Jumber 10mm- برغي قنطره
CAB-CPM/05	Cabur Italy ScrewJumber 16mm-برغي قنطره
CAB-CPM/06	Cabur Italy Screw Jumber 25mm- برغي قنطره
CAB-CPM/07	Cabur Italy Screw Jumber 35mm-برغي قنطره
CAB-CPM/08	Cabur Italy Screw Jumber 70mm-برغي قنطره
CAB-CPM/11	Cabur  Italy Jumber Screw- برغي قنطره
CAB-CPM/12	Cabur Italy Screw Jumber 4mm-برغي قنطره
CAB-CPM/21	Cabur Italy Screws-برغي قنطره
CAB-CPM/44	Cabur Italy Jumber Screw-برغي قنطره
CAB-CPM/83	Cabur Italy Screw Jumber 6mm- برغي قنطره
CAB-CSF85C	Single Phase Power Supply 120-230V 24VDC-محول خط واحد
CAB-CU-3/F	Cabur Italy Porcelin
CAB-DAS/PT	Itally End Section
CAB-DAS-4	Italy Terminal Block(DCS.4)-توصيلة اسلاك
CAB-DCS/PT	Cabur Italy End Plate-مثبت التوصيل
CAB-DCS-4	Cabur Italy Terminal Block (DAS.4)- توصيلة اسلاك
CAB-DFM/600	Cabur, Italy, Barrier-توصيلة اسلاك
CAB-DFU/01	Cabur Italy Accessories-توصيلة اسلاك
CAB-DFU/04	Cabur, Italy, Accessories- توصيلة اسلاك
CAB-EDM/2/PT(EX)	Cabur Italy Accessories-توصيلة اسلاك
CAB-EDM-10	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-EDM-16	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-EDM-16(EX)I	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-EDM16PT	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-EDM-2	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-EDM-2(EX)I	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-EDM-25	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-EDM-25(EX)I	Cabur Italy Terminal Block-توصيلة سلك
CAB-EDM25PT	Cabur Italy Terminal Block-توصيلة سلك
CAB-EDM2PT	Cabur Italy Terminal Block-توصيلة سلك
CAB-EDM-35	Cabur Italy Terminal Block-توصيلة سلك
CAB-EDM35PT	Cabur Italy Terminal Block-توصيلة سلك
CAB-EDM-4	Cabur Italy Terminal Block 4mm- توصيلة سلك
CAB-EDM-4(EX)I	Cabur Italy Terminal Block 4mm-توصيلة سلك
CAB-EDM4-10PT	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-EDM4-10PTEX	Cabur Italy Terminal Block Cover 10mm Blue-غطاء توصيلة اسلاك
CAB-EDM-6	Cabur Italy Terminal Block 6mm- غطاء توصيلة اسلاك
CAB-EDM-6(EX)I	Cabur Italy Terminal Block 6mm- غطاء توصيلة اسلاك
CAB-EDM-70	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-EDM70PT	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-FPC-10	Cabur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-FPL-10	.abur Italy Terminal Block-غطاء توصيلة اسلاك
CAB-GPA-150	SAMPLE
CAB-GPA-150/FIX	SAMPLE
CAB-GPA-240	SAMPLE
CAB-GPA-240/FIX	SAMPLE
CAB-GPA-95	SAMPLE
CAB-GPA-95/FIX	SAMPLE
CAB-GPM-240/CC	Cabur Terminal Block 240MM
CAB-GPM-95	Cabur Italy Special Terminal
CAB-MAC-6	Cabur Italy Terminal
CAB-MBL-120/10	Cabur Italy Terminal Block
CAB-MBL-150/12	Cabur Italy Terminal Block
CAB-MBL-50/6	Cabur Italy Terminal Block
CAB-MBL-95/8	Cabur Italy Terminal Block
CAB-ML-10	Cabur Italy Porcelin
CAB-ML-2	Cabur Italy Porcelin
CAB-ML-3	Cabur Italy Porcelin Connectors
CAB-ML-4	Cabur Italy Procelin Connector
CAB-ML-6	Cabur Italy Procelin
CAB-ML-8	Cabur Italy Procelin
CAB-MPS-4	Italy Disconnect Terminal(SPO.4)
CAB-MPS-4/PT	Italy End Cover
CAB-MVS/PT	Cabur Italy End Plate
CAB-PCE-4	Cabur Italy Terminal Block 4mm
CAB-PILOT	Cabur Pilot Twin Marker
CAB-PMP/01	Cabur Italy Terminal Jumper- قنطره
CAB-PMP/04	Cabur Italy Terminal Jumper- قنطره
CAB-PMP/05	Cabur Italy Terminal Jumper- قنطره
CAB-PMP/06	Cabur Italy Terminal Jumper- قنطره
CAB-PMP/07	Cabur Italy Terminal Jumper- قنطره
CAB-PMP/08	Cabur Italy Terminal Jumper- قنطره
CAB-PMP/13	Cabur Italy Terminal Jumper- قنطره
CAB-PMP/42	Cabur Italy Terminal Jumper- قنطره
CAB-PMP/58	Cabur Italy Terminal Jumper- قنطره
CAB-POF/08	Italy Permanent Cross Connector-توصيلة
CAB-POF/CPM	Sleeve For PMP/01-توصيلة
CAB-POS/42	Cabur Italy Switchble Cross Connection-توصيلة
CAB-PZD-6/SO	Italy Cabur Cover Suport-توصيلة
CAB-SCB/4/PT	Cabur Italy End Plate-نهاية طرفية
CAB-SCB/6/PT	Cabur Italy End Plate-نهاية طرفية
CAB-SCB-4	Cabur Italy Terminal-توصيلة
CAB-SCB-6	Cabur Italy Terminal-توصيلة
CAB-SCB-6CD	Cabur Italy Terminal-توصيلة
CAB-SCB-6DD	Cabur Italy Terminal-توصيلة
CAB-SCX/PO2	Cabur,Italy Short Cercute Plate- توصيلة
CAB-SCX/PO4	Cabur , Italy Short Circuit Plate- توصيلة
CAB-SCX/PT	Cabur Italy End Plate-توصيلة
CAB-SCX-10	Italy Disconnect Terminal-نهاية غير موصلة
CAB-SCX-10/CD	Italy Disconnect Terminal-نهايةغير موصلة
CAB-SCX-10/CPM	Italy Shutting Scerw Sleev-نهاية غير موصلة
CAB-SCX-10/DD	Italy Disconnect Terminal-نهاية غير موصلة
CAB-SDO-4	Cabur Italy Terminal-نهاية غير موصلة
CAB-SFC/PT	Cabur Italy Terminal Block-توصيلة
CAB-SFC-10	Cabur Italy Terminal Block-توصيلة
CAB-SFO/PT	Cabur Italy End Plate-توصيلة
CAB-SFO-4	Italy, Fuse Holder Terminal-توصيلة
CAB-SFO-4VS	Cabur Italy Terminal-توصيلة
CAB-SFR/PT	Cabur, Italy, End Section-توصيلة
CAB-SFR-4	Cabur, Italy, Terminal Block(VLO.4)- توصيلة
CAB-SFR-4/C115	Cabur Italy Terminal Block With LED Circuit- توصيل مع مؤشر
CAB-SFR-4/C230	Cabur Italy Terminal Block With LED Circuit- توصيل مع مؤشر
CAB-SFR-4/C24	Cabur Italy Terminal Block With LED Circuit- توصيل مع مؤشر
CAB-SFR-4/DIA	Cabur, Italy, Terminal Block- توصيل مع مؤشر
CAB-SP-4	Cabur Italy Terminal
CAB-SPO-4	Cabur Italy Terminal Block(MPS.4)
CAB-SRO-4	Cabur Italy Terminal
CAB-SV-2	Cabur Italy Porcelin Terminal
CAB-SV-2/PT(S)	Cabur Italy Accesories
CAB-SV-4/PT(S)	Cabur Italy Accessories
CAB-SV-6	Cabur Italy Porcelin  Terminal
CAB-SV-6/PT(S)	Cabur Italy Accessories
CAB-SWMP1	SoftWare +Adaptor For EKTEAM Plotter Mechion
CAB-TC/PO	TC 300 Terminal Block
CAB-TE-10/D	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-TE-10/O	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-TE-16/D	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-TE-16/O	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-TE-35/D	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-TE-35/O	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-TE-4/D	Cabur Italy  Terminal Block 4mm- توصيلة اسلاك
CAB-TE-4/O	Cabur Italy Terminal Block 4mm(TEO/4)- توصيلة اسلاك
CAB-TE-50/O	Cabur Italy Terminal Block-توصيلة اسلاك
CAB-TE-6/D	Cabur Italy Terminal Block  6mm- نهاية طرفية
CAB-TE-6/O	Cabur Italy Terminal Block 6mm-نهاية طرفية
CAB-TF/PT	Cabur Italy Accessories- نهاية طرفية
CAB-TF-4	Cabur,  Italy  Terminal  Block- نهاية طرفية
CAB-TIM	Cabur Italy Marker Tag-نهاية طرفية
CAB-VL-16	Cabur Italy Terminal Block-نهاية طرفية
CAB-VL-4	Cabur,Italy Terminal Block-نهاية طرفية
CAB-VLM/PT	Cabur Italy End Plate-نهاية توصيلة
CAB-VLM-10	Cabur Italy Terminal Block-نهاية توصيلة
CAB-VLM-10/PT	Cabur, Italy, Terminal Block-نهايات طرفية
CAB-VLO-4	Cabur Italy Terminal Block(SFR.4)- نهايات طرفية
CAB-VSO/PT	Cabur Italy Terminal Block-نهايات طرفية
CEM-1143-M12N	12BK LOCKNUT
CEM-1143-M16N	16BK LOCKNUT
CEM-1143-M20	20GY LOCKNUT
CEM-1143-M20N	20BK LOCKNUT
CEM-1143-M25	25GY LOCKNUT
CEM-1143-M25N	25BK LOCKNUT
CEM-1143-M32	32GY LOCKNUT
CEM-1143-M32N	32BK LOCKNUT
CEM-1143-M40	40GY LOCKNUT
CEM-1143-M40N	40BK LOCKNUT
CEM-1626-90	1600 Series PA12 Polyamide CableTies
CEM-1900-M12/X	12GY GLAND+LOCKNUT
CEM-1900-M12N	12BK GLAND(1143-M12N LOCKNUT)
CEM-1900-M16/X	16GY GLAND+LOCKNUT
CEM-1900-M16N	16BK GLAND (1143-M16N LOCKNUT)
CEM-1940-M20	20GY GLAND (1143-M20 LOCKNUT)
CEM-1940-M20N	20BK GLAND(1143-M20N LOCKNUT)
CEM-1940-M25	25GY GLAND(1143-M25 LOCKNUT)
CEM-1940-M25N	25BK GLAND (1143-M25N LOCKNUT)
CEM-1940-M32	32GY GLAND(1143-M32 LOCKNUT)
CEM-1940-M32N	32BK GLAND(1143-M32N LOCKNUT)
CEM-1941E-M40	40GY GLAND(1143-M40 LOCKNUT)
CEM-1941E-M40N	40BK GLAND(1143-M40N LOCKNUT)
CEM-20N3-M16N	METRIC EMC LOCK NUT - (2900-M16N)
CEM-2344	Cable Clamp  70-150-نهايات طرفية
CEM-2593861	Cembre- Spare Parts (Q38-F FEMALE COUPLING)
CEM-2670050	RH50 HYDRAULIC CRIMPING HEAD-نهايات طرفية
CEM-2900-M12N	MAXI BRASS CABLE GLAND
CEM-2900-M16N	METRIC MAXI BRASS CABLE GLAND
CEM-2900-M20N	MAXI BRASS CABLE GLAND
CEM-2900-M25N	Maxi Brass Cable Gland-نهايات طرفية
CEM-2900-M32N	MAXI BRASS CABLE GLAND
CEM-2900-M40N	MAXI BRASS CABLE GLAND
CEM-2900-M50N	MAXI BRASS CABLE GLAND
CEM-2900-M63N	MAXI BRASS CABLE GLAND
CEM-2A100-2M14	Cembre Terminal Lug-نهايات طرفية
CEM-2A100-2M16	Cembre High Voltage lug-نهايات طرفية
CEM-2A100-M14	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A100-M16	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A100-M20	Cembre, Italy, Long Barrel Lugs- نهايات طرفية
CEM-2A10-M10	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A10-M12	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A10-M14	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A10-M16	Cembre Terminal Lug-نهايات طرفية
CEM-2A120-2M12	Cembre High Voltage Lug-نهايات طرفية
CEM-2A120-2M14	Cembre, Italy High voltage lugs- نهايات طرفية
CEM-2A120-2M14/55	Cembre, Italy High voltage lugs / Bent at 55 d- نهايات طرفية
CEM-2A120-2M16	Cembre High Voltage Lug-نهايات طرفية
CEM-2A120-M12	Cembre, Italy High Voltage Copper Terminal- نهايات طرفية
CEM-2A120-M14	Cembre, Italy High Voltage Copper Terminal- نهايات طرفية
CEM-2A120-M16	Cembre, Italy High Voltage Copper Terminal- نهايات طرفية
CEM-2A120-M20	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A14-M10	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A14-M12	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A14-M14	Cembre,Medium Voltage Cable Lugs 70mm- نهايات طرفية
CEM-2A14-M16	Cembre,Medium Voltage Cable Lugs 70mm- نهايات طرفية
CEM-2A16-M14	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A19-M10	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A19-M12	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A19-M14	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A19-M16	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A24-M12	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A24-M14	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A24-M16	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A30-M12	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A30-M14	Cembre Italy Long Barrel Lugs- نهايات طرفية
CEM-2A30-M16	Cembre Italy Double Barrel Lug- نهايات طرفية
CEM-2A37-2M14	Cembre Italy Heavy Duty Lug-نهايات طرفية
CEM-2A37-M12	Cembre Italy Heavy Duty Lug-نهايات طرفية
CEM-2A37-M14	Cembre Italy Heavy Duty Lug-نهايات طرفية
CEM-2A37-M16	Cembre Italy Long Barrel Lugs- نهايات طرفية
CEM-2A3-M10	Cembre Italy Long Bareel Lug- نهايات طرفية
CEM-2A3-M6	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A3-M8	Cembre, Italy, Long Barrel Lugs 16/8MM- نهايات طرفية
CEM-2A48-M12	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A48-M14	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A48-M16	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A48-M20	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A5-M10	Cembre Italy Long Bareel Lug- نهايات طرفية
CEM-2A5-M12	Cembre, Italy Long barrel Lugs- نهايات طرفية
CEM-2A5-M8	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A60-M12	Cembre,Italy,Heavy Duty Lug-  نهايات طرفية
CEM-2A60-M14	Cembre Italy long Barrel Lug-نهايات طرفية
CEM-2A60-M16	Cembre Italy Long Barrel Lug-نهايات طرفية
CEM-2A60-M20	Cembre Italy long Barrel Lug-نهايات طرفية
CEM-2A60-M6	Cembre Italy long Barrel Lug-نهايات طرفية
CEM-2A7-M10	Cembre Italy Heavy Duty Lug-نهايات طرفية
CEM-2A7-M12	Cembre Italy Long Bareel Lug- نهايات طرفية
CEM-2A7-M8	Cembre Italy Long Barrel Lug- نهايات طرفية
CEM-2A80-2M12	Cembre, Ittaly Cabile Lug-نهايات طرفية
CEM-2A80-2M14	Cembre, Italy, Cable Lug-نهايات طرفية
CEM-2A80-2M16	Cembre, Italy  Cable Lugs-نهايات طرفية
CEM-2A80-M12	Cembre, Italy, Long Barrel Lug-نهايات طرفية
CEM-2A80-M14	Cembre, Italy, Long Barrel Lug-نهايات طرفية
CEM-2A80-M16	Cembre Italy Long Barrel Lug- نهايات طرفية
CEM-2A80-M20	Cembre Italy Heavy Duty Lug- نهايات طرفية
CEM-34602	BASE PTPSA-22 34602(17X30BK)
CEM-35102N	BASE PLA 35102N (17X30BK)
CEM-35202N	BASE PLA 35202N(17X52 BK)
CEM-3601	Cembre Sicur Clips 13-21mm-مثبت
CEM-3602	Cembre Sicur Clips 24-34mm- مثبت
CEM-3603	Cembre Sicur Clips 38-50mm- مثبت
CEM-4001140	Marker Group 30mm PM-00
CEM-41390N	Cembre Terminal Block markers
CEM-4320-0866	Red Stripping Die - HB6 Stripping Tool-Cembre,Italy
CEM-44896N	LABEL MG-VYT 44896N(9X20 WH)
CEM-45089	Cembre Terminal Block markers
CEM-45094N	Cembre Terminal Block markers
CEM-46415	LABEL MG-VYT 46415(6X15 YE)
CEM-47091N	LEGEND MG-TAP 47091N(15X27 WH)
CEM-47092N	LEGEND MG-TAP 47092N(15X49 WH)
CEM-48040	LABEL MG-VCT 48040(6X15 YE)
CEM-48046N	LABEL MG-VCT 48046N(9X20 YE)
CEM-49190N	MG-TAA 49190N(9X20 WH)
CEM-6000019	SPARES KIT HT-TC041
CEM-6001709	CARBURETOR M5 NUT 92015-2097(LD-1P)
CEM-6002104	GASKET INSULATER 11060-2299 (TH48)
CEM-6002112	INSULATOR 16073-2176 (TH48)
CEM-6002541	PISTON 13001-2141 (TH-48)
CEM-6002542	PISTON RING SET 13008-6044 (TH48)
CEM-6002596	PISTON PIN 13002-2067 -(TH48)
CEM-6002597	PISTON CIRCLIP 92033-2058-(TH48)
CEM-6006128	Pumping RAM - CPE-1
CEM-6040425	Spare Parts - TC-120 Chain Retainer Ring.
CEM-6100020	KEY (HT120 / 130)
CEM-6100030	Spare Parts - KEY
CEM-6100035	KEY NUT (HT120)- 11mm - ORIGINAL TYPE
CEM-6170016	Spare Parts-RATCHET
CEM-6180345	Spare Parts - TC-120 MB Self Lock Nut
CEM-6220050	Spacer - PO7000-Spare Part
CEM-6340566	BALL POSITIONING DOWEL(HT...)
CEM-6340710	Spare Parts - TC-120 Lower Blade Fixing Grub Screw
CEM-6340720	PRESSURE RELEASE DOWEL
CEM-6380011	Spare Parts-Handle Grip Set(ND#)(PAIR)
CEM-6402005	Spare Parts-ROLL RNB
CEM-64192	Cembre Terminal Block markers
CEM-64193-SBS	CEMBRE TAG MG-ETF (13X60)
CEM-6420140	Spare Parts - HT.TC 041 Lower Blade
CEM-6420142	LOWER BLADE(HT-TC041N)
CEM-6420162	UPPER BLADE (HT-TC041N)
CEM-6420231	Spare Parts  HT.TC051 Lower Blade
CEM-6420232	Spare Parts  HT-TC0851 Lower Blade
CEM-6420241	Spare Parts  HT.TC051 Upper Blade
CEM-6420242	Spare Parts  HT-TC0851 Upper Blade
CEM-6420250	Spare Parts - TC-120 Lower Blade
CEM-6420255	Lower Blade For ( HT-TC055) - Cembre, Italy
CEM-64591-PO	TAG MG-ETF 64591-PO(13X60 WH)
CEM-6520145	Spare Parts-SPRING HS3
CEM-65201500	RATCHET SPRING HS3
CEM-6520236	PIN SPRING (PO-7000)
CEM-6520432	RAM RETURN SPRING
CEM-6520570	Spare Parts - Ball Spring
CEM-6520685	Cembre- Spare Parts (Pedal Return Spring PO-7000)
CEM-6520762	Spare Parts - SPRING
CEM-6520861	Spare Parts - TC-120 Pressure Release Spring
CEM-6560326	Spare Parts - PO-7000 Pedal Lever Pin
CEM-6560740	Spare Parts - TC-120 Locking Pin
CEM-6580190	Spare Parts - TC-120 STUD
CEM-6600100	Ball Support - Spare Part
CEM-6620120	PRESSURE RELEASE PIN(HT...)
CEM-6620315	CEM-6620315
CEM-6620367	RAM FOR PO7000
CEM-6620382	Pumping RAM - HT131
CEM-6635011	PRESSURE RELEASE PIN (HT120)
CEM-6640104	6,4X18X1,6 Washer - Spare Part
CEM-6640195	M8 Washer - Spare Part
CEM-6641000	M8 COPPER WASHER
CEM-6650138	WASHER DIA 14X8X1 - (PO-7000)
CEM-6700100	θ7 CIR CLIP
CEM-6740020	Spare Parts - TC-120  BALL 1/4"
CEM-6740120	Spare Parts - B 60-HRC  BALL 7/32"
CEM-6760011	Spare Parts - Pin 2.5x20 A.ST
CEM-6760164	Split Pin DIA 3X36MM - (PO-7000)
CEM-6760240	Spare Parts - Spring Pin 4x20
CEM-6760320	SPRING PIN Ø5X30
CEM-6760327	o5X36 Split Pin- (PO-7000)
CEM-6760409	Spare Parts-3X10 ELASTIC PIN
CEM-6895032	COMPLETE VALVE
CEM-6895050	COMPLETE MAX PRESSURE VALVE
CEM-6900059	Spare Parts - HT.TC 041 Screw  M4X8
CEM-6900211	SCREW - M5X10
CEM-6900318	M6X18 Screw - Spare Part
CEM-6900342	Screw M8X14 - Spare Part
CEM-6900847	ANTI-RETURN SCREW
CEM-6970038	BHC5507SS PRINT HEAD (MG)
CEM-842213	RIBBON TPPS-060 842213(BK)
CEM-88404	PLATE MG-VRT-A 88404(105X110YE)
CEM-88900N	PLATE MG-VRT-A 88900N (32X58 WH)
CEM-88903	PLATE MG-VRT-A 88903(52X107 WH)
CEM-88904	PLATE MG-VRT-A 88904(105X110WH)
CEM-88928	PLATE MG-VRT-A 88928(102X138 WH)
CEM-990521	LEGEND TAP-CCS 990521 (15X27 TR)
CEM-990522	LEGEND TAP-CCS 990522(15X49 TR)
CEM-990880	LEGEND MG-17.5-A 990880(15X140 WH)
CEM-991016	TEMPLATE MG2-ETB 991016
CEM-991560	TEMPLATE MG-PXB 991560
CEM-991600	RIBBON MG2-ETR 991600 (BK)
CEM-991613	RIBBON MG-EPTR 991613(BK)
CEM-A03-M6	Terminal Lug Big Hole
CEM-A06-M6	Cembre, Terminal Lugs Big Hole
CEM-A100-4ESI	Italy,Copper Crimp Lug-نهايات طرفية
CEM-A100-M12	Cembre, Italy Copper Crimp Lug-نهايات طرفية
CEM-A100-M14	Cembre, Italy Copper Crimp Lug-نهايات طرفية
CEM-A100-M16	Cembre, Italy Copper Crimp Lug-نهايات طرفية
CEM-A100-M20	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A10B-M6/11-5	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A10-L10	CEM-A10-L10 COPPER TERMINAL
CEM-A10-L8	A10-L8 COPPER TERMINAL
CEM-A10-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A10-M12	Cembre Italy Copper Crimp.Lug-نهايات طرفية
CEM-A10-M14	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A10-M16	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A10-M6	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A10-M8	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A10-P25	Cembre Italy Uninsulated Pin- نهايات طرفية
CEM-A120-4ESI	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A120-M14	Cembre, Italy Copper Crimp Lugs- نهايات طرفية
CEM-A120-M16	Cembre, Italy Copper Crimp Lugs- نهايات طرفية
CEM-A120-M20	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A12-M10/19	Cembre, Italy Special Breaker Lugs- نهايات طرفية
CEM-A12-M12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A12-M6/15	Copper Tube Crimping Lugs-نهايات طرفية
CEM-A130	Broach Cutter (Railway) 13mm dia- نهايات طرفية
CEM-A14B-M6/11-5	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A14-L12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A14-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A14-M12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A14-M14	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A14-M16	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A14-M6	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A14-M8	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A14-P30	Cembre Italy Uninsulated Pin- نهايات طرفية
CEM-A160-4ESI	Italy,Copper Crimp Lug-نهايات طرفية
CEM-A160-M20	Cembre, Italy Copper Crimp Lugs- نهايات طرفية
CEM-A17-M10	Cembre , Italy Crimp Lug-نهايات طرفية
CEM-A17-M10/19	Cembre, Italy Special Breaker Lugs- نهايات طرفية
CEM-A17-M14	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A190	Broach Cutter (Railway)-نهايات طرفية
CEM-A190L	Broach Cutter 19mm - Long Range (Railway)- نهايات طرفية
CEM-A19B-M8/15-5	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A19-L10	COPPER TERMINALS ITALY
CEM-A19-L12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A19-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A19-M10/19	Cembre Italy Special Breaker Lug- نهايات طرفية
CEM-A19-M12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A19-M14	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A19-M16	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A19-M20	Cembre, Italy copper crimp lugs- نهايات طرفية
CEM-A19-M6	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A19-M8	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A1-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A1-M4	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A1-M6	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A1-M8	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A200-M20	Cembre Italy High Volt Copper Lug- نهايات طرفية
CEM-A20-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A20-M12	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A20-M14	Cembre,Italy Copper Crimp Lug- نهايات طرفية
CEM-A24B-M10/19	Cembre Italy Special Breaker Lug- نهايات طرفية
CEM-A24B-M8/19	Cembre Italy Special Breaker Lug- نهايات طرفية
CEM-A24-L12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A24-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A24-M12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A24-M14	Cembre , Italy Copper Crimp Lug-نهايات طرفية
CEM-A24-M16	Cembr, Italy Copper Crimp Lug- نهايات طرفية
CEM-A24-M20	Cembre, Italy Copper crimp  lugs- نهايات طرفية
CEM-A24-M8	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A29-M10	Cembre,Italy Copper Crimp- نهايات طرفية
CEM-A29-M12	Cembre, Italy, Copper Crip Lug 120mm- نهايات طرفية
CEM-A2-M10	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A2-M12	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A2-M5/9	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A2-M6	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A2-M8	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A2-P12	Cembre Italy Uninsulated Pin- نهايات طرفية
CEM-A30B-M10/19	Cembre Italy Special Breaker Lug- نهايات طرفية
CEM-A30B-M12/31	Cembre, Italy special breaker lugs- نهايات طرفية
CEM-A30B-M8/19	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A30-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A30-M12	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A30-M14	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A30-M16	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A30-M20	Cembre, Italy copper crimp lugs- نهايات طرفية
CEM-A30-M8	Cembre Terminal Lug-نهايات طرفية
CEM-A35-M12	Cembre Italy Copper lug 150-185mm-نهايات طرفية
CEM-A37-4ESI	Italy,Copper Crimping Lugs 4 holes
CEM-A37B-M10/24-5	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A37-M10	Cembre Italy Copper crimp lug 185/10mm-  نهايات طرفية
CEM-A37-M12	Cembre, Italy, Brass Cable Lug-نهايات طرفية
CEM-A37-M12/31	Cembre Italy Special Breaker Lug- نهايات طرفية
CEM-A37-M14	Cembre, Italy Copper Crimp Lug-نهايات طرفية
CEM-A37-M16	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A37-M20	3embre, Italy Copper Crimp lugs- نهايات طرفية
CEM-A3-M10	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A3-M12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A3-M3	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A3-M5/9	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A3-M6	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A3-M8	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A3-P14	Cembre Italy Uninsulated Pin- نهايات طرفية
CEM-A48-L12	Cembre, Italy, Copper Crimping lugs Angled 90 degree
CEM-A48-M10	Cembre , Italy Copper Crimp Lug-نهايات طرفية
CEM-A48-M10/31	Cembre Italy Special Breaker Lug- نهايات طرفية
CEM-A48-M12	Cembre, Italy, Copper Crimp Lug-نهايات طرفية
CEM-A48-M12/31	Cembre Italy Special Breaker Lug- نهايات طرفية
CEM-A48-M14	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A48-M16	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A48-M16/31	Cembre Italy Special Breaker Lug- نهايات طرفية
CEM-A48-M20	Cembre, Italy Copper Crimp Lugs- نهايات طرفية
CEM-A5-M10	Cembre, Italy, copper Crimp Lug- نهايات طرفية
CEM-A5-M12	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A5-M14	Cembre, Itlay copper crimp  lugs- نهايات طرفية
CEM-A5-M5/9	Cembre Italy Copper Crimp Lugs(Breaker)-نهايات طرفية
CEM-A5-M6	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A5-M8	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A5-P16	Cembre Italy Uninsulated Pin- نهايات طرفية
CEM-A60-4ESI	Italy,Copper Crimping Lug-نهايات طرفية
CEM-A60B-M10/31	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A60B-M12/31	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A60-M10	Cembre, Italy Copper Crimp Lug-نهايات طرفية
CEM-A60-M12	Cembre, Italy, Copper Crimp Lug- نهايات طرفية
CEM-A60-M14	Cembre Italy Copper crimp  Lug 300/14mm- نهايات طرفية
CEM-A60-M16	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A60-M20	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A7B-M6/11-5	Ring Tongue Terminals With Contained Palm- نهايات طرفية
CEM-A7-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A7-M12	Cembre , Italy Copper Crimp Lug-نهايات طرفية
CEM-A7-M14	Cembre, Italy copper crimp lugs- نهايات طرفية
CEM-A7-M16	Cembre, Italy copper crimp lugs- نهايات طرفية
CEM-A7-M6	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A7-M8	5embre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A7-P20	Cembre Italy Uninsulated Pin- نهايات طرفية
CEM-A80-4ESI	Italy,Copper Crimp Lug-نهايات طرفية
CEM-A80-M12	Cembre, Italy Copper Crimp Lugs- نهايات طرفية
CEM-A80-M12/10	Cembre, Italy Copper Crimp Lugs- نهايات طرفية
CEM-A80-M16	Cembre Italy Copper Crimp Lug- نهايات طرفية
CEM-A80-M20	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A9-M10	Cembre Italy Copper Crimp. Lug- نهايات طرفية
CEM-A9-M6/15	Cembre,Italy Special Breaker Lugs- نهايات طرفية
CEM-A9-M8	Cembre, Italy copper crimp lugs- نهايات طرفية
CEM-AA120-M12	Cembre Italy Aluminium Lugs- نهايات طرفية
CEM-AA120-M14	Cembre Italy Aluminium Lugs- نهايات طرفية
CEM-AA150-M12	Cembre Italy Aluminium Lugs- نهايات طرفية
CEM-AA150-M16	Cembre Italy Aluminium Lugs- نهايات طرفية
CEM-AA185-M12	Cembre Italy Aluminium Lug- نهايات طرفية
CEM-AA240-M12	Cembre Italy Aluminium Lug- نهايات طرفية
CEM-AA300-34-M12	Cembre Italy Aluminium Lug- نهايات طرفية
CEM-AA35-M10	Cembre Italy Aluminium Lug-  نهايات طرفية
CEM-AA50-M12	Cembre Italy Aluminium Lug- نهايات طرفية
CEM-AA70-M10	Cembre Italy Alluminium Lugs- نهايات طرفية
CEM-AA70-M12	Cembre Italy Aluminium Lug- نهايات طرفية
CEM-AA75-20-M12	Cembre Italy Alluminium Lugs- نهايات طرفية
CEM-AA75-M12	Cembre Italy Alluminium Lugs- نهايات طرفية
CEM-AA75-M16	Cembre Italy Alluminium Lugs- نهايات طرفية
CEM-AA95-M12	Cembre Italy Aluminium Lug- نهايات طرفية
CEM-AC130-P	Adaptor-نهايات طرفية
CEM-AN2-M10	Cembre Italy Insulated Terminal
CEM-AN2-M6	Cembre Italy Insulated Terminal
CEM-AN5-M10	Cembre Italy Insulated Terminal
CEM-AN7-M10	Cembre Italy Insulated Terminal
CEM-ANE12-M10/19	Cembre Italy Nylon Ins. Lug- نهايات طرفية
CEM-ANE12-M6/15	Cembre Italy Nylon INS. Lug- نهايات طرفية
CEM-ANE17-M10/19	Cembre Italy Nylon Ins. Lug 70mm- نهايات طرفية
CEM-ANE2-M10	Cembre Italy INS. Copper Lug- نهايات طرفية
CEM-ANE2-M4	Nylon Insulated Copper Tube Lugs- نهايات طرفية
CEM-ANE2-M6	Cembre Italy Nylon INS. Copper Lug-نهايات طرفية
CEM-ANE2-M8	Cembre Italy Nylon INS. Copper Lug-نهايات طرفية
CEM-ANE2-P12	Cembre Italy Nylon Insulated Lug- نهايات طرفية
CEM-ANE2-U4	Cembre Italy Nylon Insulated Lug- نهايات طرفية
CEM-ANE2-U5	Cembre Italy Nylon Insulated Lug- نهايات طرفية
CEM-ANE3-M6	Cembre Italy INS.Copper Lug- نهايات طرفية
CEM-ANE3-M8	Cembre Italy INS.Copper Lug- نهايات طرفية
CEM-ANE3-P14	Cembre Italy Nylon Insulated Lug- نهايات طرفية
CEM-ANE3-P16	=======NOT USE=====
CEM-ANE3-U4	Cembre Italy Nylon Insulated Lug- نهايات طرفية
CEM-ANE3-U5	Cembre Italy Nylon Insulated Lug- نهايات طرفية
CEM-ANE5-M10	Cembre Italy INS.Copper Lug- نهايات طرفية
CEM-ANE5-P16	Cembre Italy Nylon Insulated Lug- نهايات طرفية
CEM-ANE7-M10	ANE7-M10 INSULATED TERMINAL
CEM-ANE7-M8	Cembre Italy INS.Copper Lug- نهايات طرفية
CEM-ANE7-P20	Cembre Italy Nylon Insulated Lug- نهايات طرفية
CEM-ANE9-M12	Cembre Italy INS.Copper Lug- نهايات طرفية
CEM-ANE9-M6/15	Cembre Italy Nylon INS. Lug
CEM-ANE9-M8	Cembre Italy INS. Copper Lug
CEM-APED130	ADAPTER FOR SPIRAL BIT
CEM-APED135/165	ADAPTER FOR SPIRAL BIT (FOR PE135AR)
CEM-AR260D	Rail Web Electrical  Connection System
CEM-AR60D	Rail Web Electrical  Connection System
CEM-AR65	COMPLETE FIXING KIT
CEM-AR69	CEMBRE AR69 INSTALLATION KIT
CEM-AR69D	Rail Web Electrical  Connection System
CEM-ASED110-22-M12	Cable Lug, Cembre , Italy
CEM-ASED110-22-M16	Cable Lug, Cembre , Italy
CEM-AU130-130	Adaptor
CEM-AU130-150	Adaptor
CEM-AU130-240	Adaptor
CEM-AU230-130D	Cembre þItaly Tool Set.
CEM-AU520-130-C	Adaptor For RHU520
CEM-B1300-C	BATTERY CRIMPING TOOL,ITALY
CEM-B1300TEP	Bush Installation Tool
CEM-B131-C	Italy Crimping Tool
CEM-B1350-C	BATTERY CRIMPING TOOL,ITALY
CEM-B1350L-C	CORDLESS HYDRAULIC CRIMPING TOOL (BATTERY)
CEM-B135L-C	HYDRAULIC CRIMPING TOOL
CEM-B15	Battery Opearated Crimping Tool
CEM-B150YA	B1500YA BATTERY CRIMP TOOL
CEM-B15MD	Cembre, Italy - Battery Crimping Tool
CEM-B-500ND	Battery Crimping Tool, Cembre Italy
CEM-B70M-P24	Portable Electro Hydraulic Pump- جهاز كهربائي للكبس
CEM-B70M-P24-CH	BATTERY PUMP (TOOLS)
CEM-BF-BF5	Cembre Italy INS Bullet & Socket Con. 1.5-2.5mm-نهايات طرفية
CEM-BF-BM5	Cembre Italy IýNS. Bullet & Socket Con. 1.5-2.5mm-نهايات طرف
CEM-BF-F405	Cembre, Italy, Ins. Female Disconnect Terminals- نهايات طرف
CEM-BF-F405P	Cembre, Italy, Terminals-نهايات طرفية
CEM-BF-F408	Cembre Italy INS. Female-نهايات طرفية
CEM-BF-F408P	Italy, Cembre, terminals-نهايات طرفية
CEM-BF-F608	Cembre Italy INS. Male-نهايات طرفية
CEM-BF-F608P	Cembre Italy Nylon Ter. Full-نهايات طرفية
CEM-BF-FM608	Cembre Italy INS. Male & Female- نهايات طرفية
CEM-BF-M10	Cembre Italy INS. Terminal-نهايات طرفية
CEM-BF-M12	Cembre Italy INS. Ring-نهايات طرفية
CEM-BF-M3	Cembre Italy INS. Crimp. Terminal 1.5-2.5mm- نهايات طرفية
CEM-BF-M3-5	Cembre Italy INS. Terminal-نهايات طرفية
CEM-BF-M3-5/1	Cembre Italy INS. Terminal-نهايات طرفية
CEM-BF-M4	Cembre Italy INS. Terminal-نهايات طرفية
CEM-BF-M5	Cembre Italy INS. Terminal-نهايات طرفية
CEM-BF-M6	Cembre Italy Ins. Terminal-نهايات طرفية
CEM-BF-M6/1	Cembre Italy  Ins. Terminal-نهايات طرفية
CEM-BF-M608	Cembre Italy  Ins. Male-نهايات طرفية
CEM-BF-M608P	Cembre, Italy, Terminals-نهايات طرفية
CEM-BF-M8	Cembre Italy Ins. Terminal-نهايات طرفية
CEM-BF-P10	Cembre Italy Ins. Terminal-نهايات طرفية
CEM-BF-P12	Cembre Italy Ins. Terminal-نهايات طرفية
CEM-BF-PP12	Cembre Italy Ins. Terminal-نهايات طرفية
CEM-BF-PP12/25	Cmbre, Italy, ins. Terminal Blade- نهايات طرفية
CEM-BF-PP12/29	Cembre Italy Ins. Terminal-نهايات طرفية
CEM-BF-PP16/25	Cembre Italy Ins. Terminal-نهايات طرفية
CEM-BF-PPL30	Cembre, Italy Hook Blade Ins.Terminal- نهايات طرفية
CEM-BF-PPL46	Cembre, Italy Hook Blade Ins. Terminal- نهايات طرفية
CEM-BF-U10	Cembre Italy INS. Fork-نهايات طرفية
CEM-BF-U12	Cembre Italy INS. Terminal-نهايات طرفية
CEM-BF-U3	Cembre Italy INS. Terminal-نهايات طرفية
CEM-BF-U3-5	Cembre Italy INS. Terminal-نهايات طرفية
CEM-BF-U3-5/1	Cembre Italy INS. Terminal
CEM-BF-U4	Cembre Italy INS. Terminal نهاية طرفية
CEM-BF-U4/1	Cembre, Italy, terminals
CEM-BF-U4/2	Cembre Italy INS. Terminal
CEM-BF-U5	Cembre Italy INS. Terminal
CEM-BF-U6	Cembre Italy INS. Terminal
CEM-BF-U6/1	Italy, Cembre, Terminals
CEM-BF-U8	Cembre Italy INS. Terminal
CEM-BH2433	BATTERY 24V 3.0AH NIMH ,BATTERY
CEM-BK-M4	Cembre Italy Ins Terminals
CEM-BK-M5	Cembre Italy INS. Terminal
CEM-BK-M6	Cembre Italy INS. Terminal
CEM-BK-M7	Cembre Italy Ins Terminals
CEM-BK-M8	Cembre Italy Ins Terminals
CEM-BK-P12	Cembre Italy Ins Terminal
CEM-BK-PP12	Cembre Italy INS. Terminal
CEM-BK-U4	Cembre Italy Ins.Terminal
CEM-BP-M6/1	CEMBRE RING TERMINAL
CEM-B-TC026	Battery operated Hydraulic Cutting Tool
CEM-B-TC500Y	B-TC500Y BATTERY TOOL
CEM-BTEPD2	BUSH INSTALLATION TOOL
CEM-BX500ND	BX500ND BATTERY CRIMPING TOOL WITH 9 DIE PCS
CEM-C1/0-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(50-12)
CEM-C1/0-38	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(50-10)
CEM-C10-C10	Cembre, Italy, ~C~ Sleeve connector
CEM-C10-C10ST	Cembre Italy ~C~ Sleeve
CEM-C120-C120	~C~ Sleeve Connector
CEM-C120-C120ST	Cembre Italy ~C~ Connecotr
CEM-C150-C120	Cembre ~C~ Sleeve Connector
CEM-C150-C120ST	Cembre , Italy ,Copper Connector
CEM-C150-C150	Cembre,Italy "C" Conecter
CEM-C16-C16	Cembre, Italy "C" Conecter
CEM-C16-C16ST	Cembre Italy ~C~ Connector
CEM-C16-C25	Cembre, Italy "C" Conecter
CEM-C185-C185	Cembre, Italy, ~C~ Connector
CEM-C185-C95	Cembre, Italy, ~C~ Connector
CEM-C185-C95ST	Cembre Italy ~C~ Connector
CEM-C2/0-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(70-12)
CEM-C2/0-38	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(70-10)
CEM-C2-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(35-12)
CEM-C2-38	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(35-10)
CEM-C250-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(120-12)
CEM-C250-38	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(120-10)
CEM-C25-C10	Cembre, Italy, ~C~ Connector
CEM-C25-C10ST	Cembre Italy ~C~ Connector
CEM-C25-C25	~C~ Sleeve Conecter
CEM-C25-C25ST	Cembre Italy ~C~ Connector
CEM-C3/0-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(95-12)
CEM-C300-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(150-12)
CEM-C300-38	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(150-10)
CEM-C350-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(185-12)
CEM-C35-C16	Cembre, Italy, ~C~ Sleeve connector
CEM-C35-C16ST	Cembre Italy ~C~ Connector
CEM-C35-C35	~C~ Sleeve Connecter
CEM-C35-C35ST	Cembre Italy ~C~ Connector
CEM-C35-C50	Cembry ~C~ Clamp
CEM-C4-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(25-12)
CEM-C4-38	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(25-10)
CEM-C4-516	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(25-8)
CEM-C500-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(240-12)
CEM-C50-C25	~C~ Sleeve Connector
CEM-C50-C25ST	Cembre Italy ~C~ Connector
CEM-C50-C50	~C~Sleeve Connector
CEM-C50-C50ST	Cembre Italy ~C~ Connectot
CEM-C600-12	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(300-12)
CEM-C6-516	STANDARD BARRELL SINGLE HOLE COLOUR CODED LUGS-(16-8)
CEM-C70-C25N	C Sleev Connetor
CEM-C70-C25NST	Cembre Italy ~C~ Connecoter
CEM-C70-C35	~C~ Sleeve Connector
CEM-C70-C35ST	Cembre Italy ~C~ Connector
CEM-C70-C70	Cembre, Italy, ~C~ Connector 70/70MM
CEM-C70-C70ST	Cembre Italy ~C~ Connector
CEM-C95-C35	Cembre, Italy, ~C~ Sleeve Connector
CEM-C95-C35ST	Cembre Italy ~C~ Connector
CEM-C95-C70	Cembre, Italy, ~C~ Sleeve Connector
CEM-C95-C70ST	Cembre Italy ~C~ Connector
CEM-C95-C95	~C~ Sleeve Connector
CEM-C95-C95ST	Cembre, Italy, C Connectors 95/95
CEM-CA150R-2M12	Cembre,Italy High Voltage Terminal
CEM-CA150R-2M14	Cembre, Italy, High Voltage Copper Terminals
CEM-CA150R-M12	Cembre Italy High Voltage Copper Terminal
CEM-CA150R-M14	Cembre Italy High Voltage Copper Terminal
CEM-CA150S-2M14	Cembre High Voltage Lug-نهايات طرفية
CEM-CA150S-M12	Cembre High Voltage Lug-نهايات طرفية
CEM-CA150S-M14	Cembre High Voltage Lug-نهايات طرفية
CEM-CA200R-2M12	Cembre Italy High Voltage Copper Terminal- نهايات طرفية
CEM-CA200R-2M14	Cembre Italy High Voltage Copper Terminal- نهايات طرفية
CEM-CA200R-M12	Cembre Italy High Volatage Copper Termianl- نهايات طرفية
CEM-CA200R-M14	Cembre, Italy High Voltage Terminal Lugs- نهايات طرفية
CEM-CA240-M14	Cembre Italy High Volatage Terminal- نهايات طرفية
CEM-CA240R-2M12	Cembre Italy High Voltage Copper Terminalنهاية طرفية
CEM-CA240R-2M14	Cembre Italy High Voltage Copper Terminal
CEM-CA240R-M12	Cembre,Italy High Voltage Copper Terminal
CEM-CA240R-M14	Cembre Italty High Voltage Copper Terminals
CEM-CA240R-M16	Cembre High Voltage Lug
CEM-CA25-2M12	Cembre High Voltage Lug
CEM-CA25-M12	Cembre High Voltage Lug
CEM-CA25-M8	Cembre High Voltage Lug
CEM-CA315R-2M12	Cembre Italy High Volttage Two Hole Lugs
CEM-CA315R-2M14	Cembre Italy High Volttage Two Hole Lugs
CEM-CA315R-2M16	Cembre Italy High Volttage Two Hole Lugs
CEM-CA315R-M12	Cembre,Italy High Volatage Terminal
CEM-CA315R-M14	Cembre Italy High Volt Terminal 300mm
CEM-CA315S-2M14	Cembre,Italy High Volatage Terminal
CEM-CA315S-M14	Cembre,Italy High Volatage Terminal
CEM-CA40R-M14	Cembre Italy Heavy Duty Copper Ter. 35mm
CEM-CA40S-2M12	Cembre Italy High Volt Terminal
CEM-CA40S-M12	Cembre, Italy Heavy duty Lugs
CEM-CA40S-M16	Cembre, Italy Heavy duty Lugs
CEM-CA50R-2M12	Cembre Italy
CEM-CA50R-M12	Cembre Italy High Volt Copper
CEM-CA50S-M12	High Voltage Copper Lugs
CEM-CA70R-M12	Cembre Italy High Volt Terminal 70mm
CEM-CA70S-2M12	Cembre Italy High Volt Terminal نهاية كيبل
CEM-CA70S-2M14	Cembre, Italy  high  voltage lugs 70mm
CEM-CA70S-M12	Cembre, Italy High voltage lugs 70mm
CEM-CA70S-M14	Cembre, Italy High voltage lugs 70mm
CEM-CA70S-M16	Cembre, Italy High voltage lugs 70mm
CEM-CA95R-2M12	Cembre Italy High Voltage  Terminal
CEM-CA95R-2M14	Cembre Italy High Voltage Terminal 95mm
CEM-CA95R-M12	Cembre Italy High Volt Copper Lug Upto 33 kv
CEM-CA95R-M14	Cembre Italy High Volt Terminal 95mm
CEM-CA95S-M12	Cembre Italy High Voltage  Copper Terminal
CEM-CA95S-M16	Cembre, Italy Heavy duty Lugs
CEM-CAA10-M12	Cembre bimetalic lugs
CEM-CAA120-M12	Cembre Italy Bimetallic Lug
CEM-CAA150-M12	Cembre, Italy, Bimetallic Connector
CEM-CAA185-M12	Cembre Italy Bimetallic Lugنهاية كيبل نحاس والومنيوم
CEM-CAA185-M16	Cembre Italy Bimetallic Lug
CEM-CAA240-M12	Cembre Italy Bimetallic Lug موصل كهربائي
CEM-CAA240-M14	Cembre Italy Bimetallic Lug
CEM-CAA240-M16	Cembre Italy Bimetallic Lug
CEM-CAA25-M12	Cembre Italy Bimetallic Lug
CEM-CAA300-34-M12	Cembre Italy Bimetallic Lug
CEM-CAA300-34-M16	Cembre Italy Bimetallic Lug
CEM-CAA300-M16	Cembre Italy Bimetallic Lug
CEM-CAA35-M12	Cembre Italy Bimetallic Lug موصل كهربائي
CEM-CAA500-M16	Cembre Italy- TNBD Bimet Terminal
CEM-CAA50-M12	Cembre italy Bimetaalic Lug
CEM-CAA70-M12	Cembre Italy Bimetallic Lug موصل كهربائي
CEM-CAA95-M12	Cembre Italy Bimetallic
CEM-CBP-M4	Italy Linked Terminal( Roll/1750Pcs)
CEM-CBP-M5	CEM-CBItaly Linked Terminal( Roll/1750Pcs)P-M5
CEM-CBP-M6	Italy Linked Terminal( Roll/1750Pcs)P-M6
CEM-CBP-PP12	Italy Linked Terminal( Roll/1750Pcs)
CEM-CBP-PP12/25	Italy Linked Terminal( Roll/1750Pcs)
CEM-CBP-PPL30	Italy Linked Terminal( Roll/1750Pcs)
CEM-CBP-U4	Italy Linked Terminal( Roll/1750Pcs)
CEM-CGP-U4	Italy Linked Terminal( Roll/1250Pcs)
CEM-CL1/0-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(50-12)
CEM-CL1/0-38	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(50-10)
CEM-CL1/0-D38	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL1/0-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL2/0-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(70-12)
CEM-CL2/0-38	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(70-10)
CEM-CL2/0-D38	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL2/0-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL2-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(35-12)
CEM-CL250-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(120-12)
CEM-CL250-D38	COLOURED CODED TERMINAL
CEM-CL250-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL2-516	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(35-8)
CEM-CL2-D38	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL2-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL3/0-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(95-12)
CEM-CL3/0-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL300-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(150-12)
CEM-CL300-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL350-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(185-12)
CEM-CL350-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL4-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(25-12)
CEM-CL4-38	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(25-10)
CEM-CL4-D14	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL4-D38	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL4-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL500-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(240-12)
CEM-CL500-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL600-12	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(300-12)
CEM-CL600-DN	Colour Coded Copper Terminal Lugs- Double Hole Long Barrel
CEM-CL6-14	LONG BARREL SINGLE HOLE COLOUR CODED LUGS-(16-6)
CEM-CL6-D14	Colour Coded Copper Terminal
CEM-CPE-1	Hydraulic Pump
CEM-CPP-0	Cembre Hydralic Pneumatic Pump
CEM-CRP-M4	Italy Linked Terminal( Roll/2000Pcs)
CEM-CRP-M5	Italy Linked Terminal( Roll/2000Pcs)-M5
CEM-CRP-PP12	Italy Linked Terminal( Roll/2000Pcs)-PP12
CEM-CRP-PP12/23	Italy Linked Terminal( Roll/2000Pcs)
CEM-CRP-PPL30	Italy Linked Terminal( Roll/2000Pcs)
CEM-CRP-U3-5	Italy Linked Terminal( Roll/2000Pcs)
CEM-CRP-U4	Italy Linked Terminal( Roll/2000Pcs)-U4
CEM-CS-CPE-1	Transportation Trolley
CEM-CY130	13MM BROACH CUTTER
CEM-CY170	17MM BROACH CUTTER
CEM-CY190	19MM BROACH CUTTER
CEM-DR185-12	Cembre DIN Copper Terminal 185
CEM-DR240-12	Cembre DIN Copper Terminal 240
CEM-ECR-1	Positioner ( Extractor to remove bush from Rail)
CEM-ECR-19	PUNCH+PULLER ( EXTRACTOR TO REMOVE BUSH FROM RAILS)
CEM-ECW-H3D	Cembre Tool
CEM-EN2-M10	Cembre Italy Insulated Terminal
CEM-EN3-M10	Cembre Italy Insulated Terminal
CEM-EN3-M6	Cembre Italy Insulated Terminal
CEM-FL10-150	Cembre, Italy, Flexible Braids
CEM-FL10-200	Cembre Italy Flexible Braidsd
CEM-FL10-250	Cembre Italy Flexible Braids
CEM-FL16-150	Cembre Italy Flexible Braids W-16mm L-250mm
CEM-FL16-200	Cembre Italy Flexible Braids
CEM-FL16-250	Cembre, Italy, Flexible Braids
CEM-FL16-320	Cembre Italy Flexible Braids W-16mm L-320mm
CEM-FL16-350	Cembre Italy Flexible Braids
CEM-FL16-420	Cembre Italy Flexible Braids
CEM-FL16-570	Cembre, Italy Flexible Braide
CEM-FL16-660	Cembre Italy Flexible Braids
CEM-FL25-150	Cembre Italy Flexible Braids
CEM-FL25-200	Cembre Italy Flexible Braids`;

export const getProducts = (): Product[] => {
  const lines = RAW_DATA.split('\n');
  const products: Product[] = [];
  
  lines.forEach(line => {
    if (!line.trim()) return;
    // Handle potential varied spacing or tab characters
    const parts = line.split('\t');
    if (parts.length >= 2) {
      products.push({
        code: parts[0].trim(),
        name: parts[1].trim()
      });
    }
  });
  return products;
};

// Calculate Levenshtein distance for fuzzy matching
const levenshteinDistance = (a: string, b: string): number => {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

export const searchProducts = (query: string): SearchResult[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  const products = getProducts();
  const results: SearchResult[] = [];

  products.forEach(product => {
    const codeMatch = product.code.toLowerCase().includes(normalizedQuery);
    const nameMatch = product.name.toLowerCase().includes(normalizedQuery);
    
    // Direct matches get high priority
    if (codeMatch || nameMatch) {
       let similarity = 100;
       
       // Penalize based on length difference to prioritize exact matches
       const diff = Math.abs(product.code.length - normalizedQuery.length) + Math.abs(product.name.length - normalizedQuery.length);
       similarity -= Math.min(diff * 2, 40); 
       
       results.push({ ...product, similarity });
    } else {
        // Fuzzy Logic for slight typos
        const codeDist = levenshteinDistance(product.code.toLowerCase(), normalizedQuery);
        const maxLen = Math.max(product.code.length, normalizedQuery.length);
        const sim = 100 - ((codeDist / maxLen) * 100);
        
        if (sim > 60) { // Threshold for "close enough"
            results.push({ ...product, similarity: Math.floor(sim) });
        }
    }
  });

  return results.sort((a, b) => b.similarity - a.similarity).slice(0, 10);
};