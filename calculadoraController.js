({
    addNum : function(component, event, helper) {
        
        var res = helper.getValues(component, 'add');
        
        if(isNaN(res)){ //isnan(2)= false ->!false->true
            helper.errorHandler(component, 'error');
            return null;
        }   
        
        helper.setResults(component, res);
        
    },
    
    subNum : function(component, event, helper) {
        
        var res = helper.getValues(component, 'sub');
        
        if(isNaN(res)){ 
            helper.errorHandler(component, 'error');
            return null;
        }  
        
        helper.setResults(component, res);
        
    },
 
     multNum : function(component, event, helper) {
        
        var res = helper.getValues(component, 'multiply');
        
        if(isNaN(res)){
            helper.errorHandler(component,'error');
            return null;
        }  
        
        helper.setResults(component, res);
        
    },

    divNum : function(component, event, helper) {
        
        var res = helper.getValues(component, 'divide');
        
        if(parseInt(component.find('num2').get('v.value')) === 0){
            helper.errorHandler(component, 'error');
            return null;
        }
        
         if(isNaN(res)){
            helper.errorHandler(component);
            return null;
        }   
        
        helper.setResults(component, res); 
    },
    
    resetForm : function(component, event, helper){
        helper.errorHandler(component, 'reset');
    }
})
