({
    getValues : function(component, opt) {
        const nums= [];
        nums[0] = parseInt(component.find('num1').get('v.value'));
        nums[1] = parseInt(component.find('num2').get('v.value'));
        if(opt === 'add')
           return (nums[0]+nums[1]);
        if(opt === 'sub')
           return (nums[0]-nums[1]);
        if(opt === 'multiply')
           return (nums[0]*nums[1]);
        if(opt === 'divide')
           return (nums[0]/nums[1]);
    },
    
    setResults : function(component, res){
        component.set('v.output', res);
        component.set('v.showOutput', true);
    },
    
    errorHandler : function(component, task){
        if(task === 'error')
        alert('Enter the Valid number');
        component.set('v.input1','');
        component.set('v.input2','');
        component.set('v.showOutput', false);
    }
})
