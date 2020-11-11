sap.ui.define([                                                                                                                                                                                                                                                
	"sap/ui/core/mvc/Controller",                                                                                                                                                                                                                                 
    "sap/m/MessageBox",                                                                                                                                                                                                                                        
    "sap/ui/model/json/JSONModel"&nbsp;                                                                                                                                                                                                                        
], function(Controller,MessageBox, JSONModel) {                                                                                                                                                                                                                
	"use strict";                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                               
	return Controller.extend("zis1017.controller.View1", {                                                                                                                                                                                                        
		onInit: function() {                                                                                                                                                                                                                                         
			var json = {                                                                                                                                                                                                                                                
				firstName: "123",                                                                                                                                                                                                                                          
				lastName: "dao",                                                                                                                                                                                                                                           
				data: [{                                                                                                                                                                                                                                                   
					key: "A",                                                                                                                                                                                                                                                 
					text: "Apple"                                                                                                                                                                                                                                             
				}, {                                                                                                                                                                                                                                                       
					key: "B",                                                                                                                                                                                                                                                 
					text: "Ball"                                                                                                                                                                                                                                              
				}, {                                                                                                                                                                                                                                                       
					key: "C",                                                                                                                                                                                                                                                 
					text: "Cat"                                                                                                                                                                                                                                               
				}, {                                                                                                                                                                                                                                                       
					key: "D",                                                                                                                                                                                                                                                 
					text: "Dog"                                                                                                                                                                                                                                               
				}],                                                                                                                                                                                                                                                        
				initialValue: "please make your choice:",                                                                                                                                                                                                                  
				selectedKey: "None"                                                                                                                                                                                                                                        
			};                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                               
			var oModel = new JSONModel(json);                                                                                                                                                                                                                           
			this.getView().setModel(oModel);                                                                                                                                                                                                                            
						var Json2 = {                                                                                                                                                                                                                                            
				address: {                                                                                                                                                                                                                                                 
					city: "AAA",                                                                                                                                                                                                                                              
					postCode: "234"                                                                                                                                                                                                                                           
				}                                                                                                                                                                                                                                                          
			};                                                                                                                                                                                                                                                          
			var oModel2 = new JSONModel(Json2);                                                                                                                                                                                                                         
			this.getView().setModel(oModel2,"Model2");                                                                                                                                                                                                                  
		},                                                                                                                                                                                                                                                           
				onChange: function(oEvent) {                                                                                                                                                                                                                               
				var input = oEvent.getSource();                                                                                                                                                                                                                            
				if (input.getValue() < 10) {                                                                                                                                                                                                                               
					input.setValueState(sap.ui.core.ValueState.Error);                                                                                                                                                                                                        
					input.setValueStateText("value must be at least 10");                                                                                                                                                                                                     
				} else {                                                                                                                                                                                                                                                   
					input.setValueState(sap.ui.core.ValueState.None);                                                                                                                                                                                                         
				}                                                                                                                                                                                                                                                          
				}                                                                                                                                                                                                                                                          
	});                                                                                                                                                                                                                                                           
});                                                                                                                                                                                                                                                            