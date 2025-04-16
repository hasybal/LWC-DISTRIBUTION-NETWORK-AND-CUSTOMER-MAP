var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_phase1rd_1 = new ol.format.GeoJSON();
var features_phase1rd_1 = format_phase1rd_1.readFeatures(json_phase1rd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_phase1rd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_phase1rd_1.addFeatures(features_phase1rd_1);
var lyr_phase1rd_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_phase1rd_1, 
                style: style_phase1rd_1,
                popuplayertitle: 'phase 1 rd',
                interactive: false,
                title: '<img src="styles/legend/phase1rd_1.png" /> phase 1 rd'
            });
var format_phase1boundary_2 = new ol.format.GeoJSON();
var features_phase1boundary_2 = format_phase1boundary_2.readFeatures(json_phase1boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_phase1boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_phase1boundary_2.addFeatures(features_phase1boundary_2);
var lyr_phase1boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_phase1boundary_2, 
                style: style_phase1boundary_2,
                popuplayertitle: 'phase 1 boundary',
                interactive: false,
                title: '<img src="styles/legend/phase1boundary_2.png" /> phase 1 boundary'
            });
var format_parcel_3 = new ol.format.GeoJSON();
var features_parcel_3 = format_parcel_3.readFeatures(json_parcel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcel_3.addFeatures(features_parcel_3);
var lyr_parcel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcel_3, 
                style: style_parcel_3,
                popuplayertitle: 'parcel',
                interactive: false,
                title: '<img src="styles/legend/parcel_3.png" /> parcel'
            });
var format_ACTIVECUSTOMERS_4 = new ol.format.GeoJSON();
var features_ACTIVECUSTOMERS_4 = format_ACTIVECUSTOMERS_4.readFeatures(json_ACTIVECUSTOMERS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACTIVECUSTOMERS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACTIVECUSTOMERS_4.addFeatures(features_ACTIVECUSTOMERS_4);
var lyr_ACTIVECUSTOMERS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACTIVECUSTOMERS_4, 
                style: style_ACTIVECUSTOMERS_4,
                popuplayertitle: 'ACTIVE CUSTOMERS',
                interactive: true,
                title: '<img src="styles/legend/ACTIVECUSTOMERS_4.png" /> ACTIVE CUSTOMERS'
            });
var format_LEKKIWATERWORKS_5 = new ol.format.GeoJSON();
var features_LEKKIWATERWORKS_5 = format_LEKKIWATERWORKS_5.readFeatures(json_LEKKIWATERWORKS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEKKIWATERWORKS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEKKIWATERWORKS_5.addFeatures(features_LEKKIWATERWORKS_5);
var lyr_LEKKIWATERWORKS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEKKIWATERWORKS_5, 
                style: style_LEKKIWATERWORKS_5,
                popuplayertitle: 'LEKKI WATER WORKS',
                interactive: false,
                title: '<img src="styles/legend/LEKKIWATERWORKS_5.png" /> LEKKI WATER WORKS'
            });
var format_100mm_6 = new ol.format.GeoJSON();
var features_100mm_6 = format_100mm_6.readFeatures(json_100mm_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100mm_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100mm_6.addFeatures(features_100mm_6);
var lyr_100mm_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100mm_6, 
                style: style_100mm_6,
                popuplayertitle: '100mm',
                interactive: true,
                title: '<img src="styles/legend/100mm_6.png" /> 100mm'
            });
var format_150mm_7 = new ol.format.GeoJSON();
var features_150mm_7 = format_150mm_7.readFeatures(json_150mm_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150mm_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150mm_7.addFeatures(features_150mm_7);
var lyr_150mm_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_150mm_7, 
                style: style_150mm_7,
                popuplayertitle: '150mm',
                interactive: true,
                title: '<img src="styles/legend/150mm_7.png" /> 150mm'
            });
var format_200mm_8 = new ol.format.GeoJSON();
var features_200mm_8 = format_200mm_8.readFeatures(json_200mm_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200mm_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200mm_8.addFeatures(features_200mm_8);
var lyr_200mm_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200mm_8, 
                style: style_200mm_8,
                popuplayertitle: '200mm',
                interactive: true,
                title: '<img src="styles/legend/200mm_8.png" /> 200mm'
            });
var format_300mm_9 = new ol.format.GeoJSON();
var features_300mm_9 = format_300mm_9.readFeatures(json_300mm_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300mm_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300mm_9.addFeatures(features_300mm_9);
var lyr_300mm_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300mm_9, 
                style: style_300mm_9,
                popuplayertitle: '300mm',
                interactive: true,
                title: '<img src="styles/legend/300mm_9.png" /> 300mm'
            });
var format_AIRVALVE_10 = new ol.format.GeoJSON();
var features_AIRVALVE_10 = format_AIRVALVE_10.readFeatures(json_AIRVALVE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRVALVE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRVALVE_10.addFeatures(features_AIRVALVE_10);
var lyr_AIRVALVE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRVALVE_10, 
                style: style_AIRVALVE_10,
                popuplayertitle: 'AIR VALVE',
                interactive: false,
                title: '<img src="styles/legend/AIRVALVE_10.png" /> AIR VALVE'
            });
var format_FIREHYDRANT_11 = new ol.format.GeoJSON();
var features_FIREHYDRANT_11 = format_FIREHYDRANT_11.readFeatures(json_FIREHYDRANT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIREHYDRANT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIREHYDRANT_11.addFeatures(features_FIREHYDRANT_11);
var lyr_FIREHYDRANT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIREHYDRANT_11, 
                style: style_FIREHYDRANT_11,
                popuplayertitle: 'FIRE HYDRANT',
                interactive: false,
                title: '<img src="styles/legend/FIREHYDRANT_11.png" /> FIRE HYDRANT'
            });
var format_SLOWVALVE_12 = new ol.format.GeoJSON();
var features_SLOWVALVE_12 = format_SLOWVALVE_12.readFeatures(json_SLOWVALVE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLOWVALVE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOWVALVE_12.addFeatures(features_SLOWVALVE_12);
var lyr_SLOWVALVE_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLOWVALVE_12, 
                style: style_SLOWVALVE_12,
                popuplayertitle: 'SLOW VALVE',
                interactive: false,
                title: '<img src="styles/legend/SLOWVALVE_12.png" /> SLOW VALVE'
            });
var format_NETWORKNODE_13 = new ol.format.GeoJSON();
var features_NETWORKNODE_13 = format_NETWORKNODE_13.readFeatures(json_NETWORKNODE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NETWORKNODE_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NETWORKNODE_13.addFeatures(features_NETWORKNODE_13);
cluster_NETWORKNODE_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_NETWORKNODE_13
});
var lyr_NETWORKNODE_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_NETWORKNODE_13, 
                style: style_NETWORKNODE_13,
                popuplayertitle: 'NETWORK NODE',
                interactive: true,
                title: '<img src="styles/legend/NETWORKNODE_13.png" /> NETWORK NODE'
            });
var group_PIPESIZES = new ol.layer.Group({
                                layers: [lyr_100mm_6,lyr_150mm_7,lyr_200mm_8,lyr_300mm_9,],
                                fold: "open",
                                title: 'PIPE SIZES'});

lyr_googlehybrid_0.setVisible(true);lyr_phase1rd_1.setVisible(false);lyr_phase1boundary_2.setVisible(true);lyr_parcel_3.setVisible(true);lyr_ACTIVECUSTOMERS_4.setVisible(true);lyr_LEKKIWATERWORKS_5.setVisible(true);lyr_100mm_6.setVisible(true);lyr_150mm_7.setVisible(true);lyr_200mm_8.setVisible(true);lyr_300mm_9.setVisible(true);lyr_AIRVALVE_10.setVisible(true);lyr_FIREHYDRANT_11.setVisible(true);lyr_SLOWVALVE_12.setVisible(true);lyr_NETWORKNODE_13.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_phase1rd_1,lyr_phase1boundary_2,lyr_parcel_3,lyr_ACTIVECUSTOMERS_4,lyr_LEKKIWATERWORKS_5,group_PIPESIZES,lyr_AIRVALVE_10,lyr_FIREHYDRANT_11,lyr_SLOWVALVE_12,lyr_NETWORKNODE_13];
lyr_phase1rd_1.set('fieldAliases', {'full_id': 'full_id', 'old_name': 'old_name', 'oneway': 'oneway', 'name': 'name', 'alt_name': 'alt_name', });
lyr_phase1boundary_2.set('fieldAliases', {'FID': 'FID', 'AREA': 'AREA', });
lyr_parcel_3.set('fieldAliases', {'id': 'id', 'NO': 'NO', 'Serial': 'Serial', 'Zone Name': 'Zone Name', 'Customer Type': 'Customer Type', 'Current Charge': 'Current Charge', 'BILL_UNIT': 'BILL_UNIT', 'Cust Ref': 'Cust Ref', 'Property Ref': 'Property Ref', 'Name': 'Name', 'Address': 'Address', 'Cust Tarriff': 'Cust Tarriff', 'Tarrif Name': 'Tarrif Name', 'Tariff Unit': 'Tariff Unit', 'Bill Total': 'Bill Total', 'Account Balance': 'Account Balance', 'Debit Adjustments': 'Debit Adjustments', 'Credit Adjustments': 'Credit Adjustments', 'Payments': 'Payments', 'Dec24_Consump': 'Dec24_Consump', 'Jan25_consump': 'Jan25_consump', 'Feb25_consump': 'Feb25_consump', });
lyr_ACTIVECUSTOMERS_4.set('fieldAliases', {'id': 'id', 'NO': 'NO', 'Serial': 'Serial', 'Zone Name': 'Zone Name', 'Customer T': 'Customer T', 'Current Ch': 'Current Ch', 'BILL_UNIT': 'BILL_UNIT', 'Cust Ref': 'Cust Ref', 'Property R': 'Property R', 'Name': 'Name', 'Address': 'Address', 'Cust Tarri': 'Cust Tarri', 'Tarrif Nam': 'Tarrif Nam', 'Tariff Uni': 'Tariff Uni', 'Bill Total': 'Bill Total', 'Account Ba': 'Account Ba', 'Debit Adju': 'Debit Adju', 'Credit Adj': 'Credit Adj', 'Payments': 'Payments', 'Dec24_Cons': 'Dec24_Cons', 'Jan25_cons': 'Jan25_cons', 'Feb25_cons': 'Feb25_cons', });
lyr_LEKKIWATERWORKS_5.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_100mm_6.set('fieldAliases', {'id': 'id', 'Material': 'Material', 'L': 'L', 'main': 'main', 'DIAMETER': 'DIAMETER', 'LENGTH_(m)': 'LENGTH_(m)', 'YEAR INST': 'YEAR INST', 'LABEL': 'LABEL', 'START NODE': 'START NODE', 'STOP NODE': 'STOP NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_150mm_7.set('fieldAliases', {'id': 'id', 'Material': 'Material', 'L': 'L', 'main': 'main', 'DIAMETER': 'DIAMETER', 'LENGTH_(m)': 'LENGTH_(m)', 'YEAR INST': 'YEAR INST', 'LABEL': 'LABEL', 'START NODE': 'START NODE', 'STOP NODE': 'STOP NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_200mm_8.set('fieldAliases', {'id': 'id', 'Material': 'Material', 'L': 'L', 'main': 'main', 'DIAMETER': 'DIAMETER', 'LENGTH_(m)': 'LENGTH_(m)', 'YEAR INST': 'YEAR INST', 'LABEL': 'LABEL', 'START NODE': 'START NODE', 'STOP NODE': 'STOP NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_300mm_9.set('fieldAliases', {'id': 'id', 'Material': 'Material', 'L': 'L', 'main': 'main', 'DIAMETER': 'DIAMETER', 'LENGTH_(m)': 'LENGTH_(m)', 'LABEL': 'LABEL', 'START NODE': 'START NODE', 'STOP NODE': 'STOP NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_AIRVALVE_10.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_FIREHYDRANT_11.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_SLOWVALVE_12.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_NETWORKNODE_13.set('fieldAliases', {'id': 'id', 'NODE': 'NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_phase1rd_1.set('fieldImages', {'full_id': 'TextEdit', 'old_name': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'alt_name': 'TextEdit', });
lyr_phase1boundary_2.set('fieldImages', {'FID': 'TextEdit', 'AREA': 'TextEdit', });
lyr_parcel_3.set('fieldImages', {'id': 'TextEdit', 'NO': 'TextEdit', 'Serial': 'Range', 'Zone Name': 'TextEdit', 'Customer Type': 'TextEdit', 'Current Charge': 'Range', 'BILL_UNIT': 'TextEdit', 'Cust Ref': 'TextEdit', 'Property Ref': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'Cust Tarriff': 'TextEdit', 'Tarrif Name': 'TextEdit', 'Tariff Unit': 'Range', 'Bill Total': 'TextEdit', 'Account Balance': 'Range', 'Debit Adjustments': 'TextEdit', 'Credit Adjustments': 'Range', 'Payments': 'Range', 'Dec24_Consump': 'Range', 'Jan25_consump': 'Range', 'Feb25_consump': 'Range', });
lyr_ACTIVECUSTOMERS_4.set('fieldImages', {'id': 'TextEdit', 'NO': 'TextEdit', 'Serial': 'TextEdit', 'Zone Name': 'TextEdit', 'Customer T': 'TextEdit', 'Current Ch': 'TextEdit', 'BILL_UNIT': 'TextEdit', 'Cust Ref': 'TextEdit', 'Property R': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'Cust Tarri': 'TextEdit', 'Tarrif Nam': 'TextEdit', 'Tariff Uni': 'TextEdit', 'Bill Total': 'TextEdit', 'Account Ba': 'TextEdit', 'Debit Adju': 'TextEdit', 'Credit Adj': 'TextEdit', 'Payments': 'TextEdit', 'Dec24_Cons': 'TextEdit', 'Jan25_cons': 'TextEdit', 'Feb25_cons': 'TextEdit', });
lyr_LEKKIWATERWORKS_5.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', });
lyr_100mm_6.set('fieldImages', {'id': 'TextEdit', 'Material': 'TextEdit', 'L': 'TextEdit', 'main': 'TextEdit', 'DIAMETER': 'TextEdit', 'LENGTH_(m)': 'TextEdit', 'YEAR INST': 'TextEdit', 'LABEL': 'TextEdit', 'START NODE': 'TextEdit', 'STOP NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_150mm_7.set('fieldImages', {'id': 'TextEdit', 'Material': 'TextEdit', 'L': 'TextEdit', 'main': 'TextEdit', 'DIAMETER': 'TextEdit', 'LENGTH_(m)': 'TextEdit', 'YEAR INST': 'TextEdit', 'LABEL': 'TextEdit', 'START NODE': 'TextEdit', 'STOP NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_200mm_8.set('fieldImages', {'id': 'TextEdit', 'Material': 'TextEdit', 'L': 'TextEdit', 'main': 'TextEdit', 'DIAMETER': 'TextEdit', 'LENGTH_(m)': 'TextEdit', 'YEAR INST': 'TextEdit', 'LABEL': 'TextEdit', 'START NODE': 'TextEdit', 'STOP NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_300mm_9.set('fieldImages', {'id': 'TextEdit', 'Material': 'TextEdit', 'L': 'TextEdit', 'main': 'TextEdit', 'DIAMETER': 'TextEdit', 'LENGTH_(m)': 'TextEdit', 'LABEL': 'TextEdit', 'START NODE': 'TextEdit', 'STOP NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_AIRVALVE_10.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_FIREHYDRANT_11.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_SLOWVALVE_12.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_NETWORKNODE_13.set('fieldImages', {'id': 'TextEdit', 'NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_phase1rd_1.set('fieldLabels', {'full_id': 'no label', 'old_name': 'no label', 'oneway': 'no label', 'name': 'no label', 'alt_name': 'no label', });
lyr_phase1boundary_2.set('fieldLabels', {'FID': 'no label', 'AREA': 'no label', });
lyr_parcel_3.set('fieldLabels', {'id': 'no label', 'NO': 'no label', 'Serial': 'inline label - visible with data', 'Zone Name': 'inline label - visible with data', 'Customer Type': 'inline label - visible with data', 'Current Charge': 'hidden field', 'BILL_UNIT': 'inline label - visible with data', 'Cust Ref': 'inline label - visible with data', 'Property Ref': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Cust Tarriff': 'inline label - visible with data', 'Tarrif Name': 'no label', 'Tariff Unit': 'no label', 'Bill Total': 'no label', 'Account Balance': 'no label', 'Debit Adjustments': 'no label', 'Credit Adjustments': 'no label', 'Payments': 'no label', 'Dec24_Consump': 'no label', 'Jan25_consump': 'no label', 'Feb25_consump': 'no label', });
lyr_ACTIVECUSTOMERS_4.set('fieldLabels', {'id': 'hidden field', 'NO': 'hidden field', 'Serial': 'inline label - always visible', 'Zone Name': 'inline label - always visible', 'Customer T': 'inline label - always visible', 'Current Ch': 'inline label - always visible', 'BILL_UNIT': 'inline label - always visible', 'Cust Ref': 'inline label - always visible', 'Property R': 'inline label - always visible', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'Cust Tarri': 'inline label - always visible', 'Tarrif Nam': 'inline label - always visible', 'Tariff Uni': 'inline label - always visible', 'Bill Total': 'inline label - always visible', 'Account Ba': 'inline label - always visible', 'Debit Adju': 'inline label - always visible', 'Credit Adj': 'inline label - always visible', 'Payments': 'inline label - always visible', 'Dec24_Cons': 'inline label - always visible', 'Jan25_cons': 'inline label - always visible', 'Feb25_cons': 'no label', });
lyr_LEKKIWATERWORKS_5.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_100mm_6.set('fieldLabels', {'id': 'hidden field', 'Material': 'inline label - always visible', 'L': 'hidden field', 'main': 'hidden field', 'DIAMETER': 'inline label - always visible', 'LENGTH_(m)': 'inline label - always visible', 'YEAR INST': 'inline label - always visible', 'LABEL': 'inline label - always visible', 'START NODE': 'inline label - always visible', 'STOP NODE': 'inline label - always visible', 'X1_(m)': 'hidden field', 'Y1_(m)': 'hidden field', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_150mm_7.set('fieldLabels', {'id': 'hidden field', 'Material': 'inline label - always visible', 'L': 'hidden field', 'main': 'hidden field', 'DIAMETER': 'inline label - visible with data', 'LENGTH_(m)': 'inline label - visible with data', 'YEAR INST': 'inline label - visible with data', 'LABEL': 'inline label - visible with data', 'START NODE': 'inline label - visible with data', 'STOP NODE': 'inline label - visible with data', 'X1_(m)': 'hidden field', 'Y1_(m)': 'hidden field', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_200mm_8.set('fieldLabels', {'id': 'hidden field', 'Material': 'inline label - always visible', 'L': 'hidden field', 'main': 'hidden field', 'DIAMETER': 'inline label - always visible', 'LENGTH_(m)': 'inline label - always visible', 'YEAR INST': 'inline label - always visible', 'LABEL': 'inline label - always visible', 'START NODE': 'inline label - always visible', 'STOP NODE': 'inline label - always visible', 'X1_(m)': 'hidden field', 'Y1_(m)': 'hidden field', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_300mm_9.set('fieldLabels', {'id': 'hidden field', 'Material': 'inline label - visible with data', 'L': 'hidden field', 'main': 'hidden field', 'DIAMETER': 'inline label - visible with data', 'LENGTH_(m)': 'inline label - visible with data', 'LABEL': 'inline label - visible with data', 'START NODE': 'inline label - visible with data', 'STOP NODE': 'inline label - visible with data', 'X1_(m)': 'hidden field', 'Y1_(m)': 'hidden field', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_AIRVALVE_10.set('fieldLabels', {'id': 'hidden field', 'X': 'no label', 'Y': 'no label', });
lyr_FIREHYDRANT_11.set('fieldLabels', {'id': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_SLOWVALVE_12.set('fieldLabels', {'id': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_NETWORKNODE_13.set('fieldLabels', {'id': 'hidden field', 'NODE': 'inline label - visible with data', 'X1_(m)': 'inline label - visible with data', 'Y1_(m)': 'inline label - visible with data', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_NETWORKNODE_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});