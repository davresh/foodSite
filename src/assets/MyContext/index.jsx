
import React from "react";

import sandwich from '../images/sandwich.jpg';
import steak from '../images/steak.jpg';
import cherries from '../images/cherries.jpg';
import wine from '../images/wine.jpg';
import popsicle from '../images/popsicle.jpg';
import salmon from '../images/salmon.jpg';
import croissant from '../images/croissant.jpg';

export const myContext = React.createContext({
    city:[
        {
            id:30,
            city:'Travel',
        },
        {
            id:31,
            city:'New York',
        },        
        {
            id:32,
            city:'Dinner',
        },        
        {
            id:33,
            city:'Salmon',
        },        
        {
            id:34,
            city:'France',
        },        
        {
            id:35,
            city:'Drinks',
        },        
        {
            id:36,
            city:'Ideas',
        },        
        {
            id:37,
            city:'Flavors',
        },        
        {
            id:38,
            city:'Cuisine',
        },        
        {
            id:39,
            city:'Chicken',
        },        
        {
            id:40,
            city:'Dressing',
        },        
        {
            id:41,
            city:'Fried',
        },        
        {
            id:42,
            city:'Fish',
        },
        {
            id:43,
            city:'Duck',
        },
    ],
    foodBox:[
        {
            id:1,
            foodImg:sandwich,
            foodName:'The Perfect Sandwich, A Real NYC Classic',
            aboutFood:'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',
            food:'pizza',
            value:120
        },
        {
            id:2,
            foodImg:steak,
            foodName:'Let Me Tell You About This Steak',
            aboutFood:'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
            food:'noodel',
            value:105
        },
        {
            id:3,
            foodImg:cherries,
            foodName:'Cherries, interrupted',
            aboutFood:'orem ipsum text praesent tincidunt ipsum lipsum.What else?',
            food:'pizza',
            value:95
        },
        {
            id:4,
            foodImg:wine,
            foodName:'Once Again, Robust Wine and Vegetable Pasta',
            aboutFood:'Lorem ipsum text praesent tincidunt ipsum lipsum.',
            food:'noodel',
            value:68,
        },
        {
            id:5,
            foodImg:popsicle,
            foodName:'All I Need Is a Popsicle',
            aboutFood:'Lorem ipsum text praesent tincidunt ipsum lipsum.',
            food:'pizza',
            value:90
        },
        {
            id:6,
            foodImg:salmon,
            foodName:'Salmon For Your Skin',
            aboutFood:'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
            food:'noodel',
            value:76
        },
        {
            id:7,
            foodImg:sandwich,
            foodName:'The Perfect Sandwich, A Real Classic',
            aboutFood:'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',
            food:'pizza',
            value:132
        },
        {
            id:8,
            foodImg:croissant,
            foodName:'Le French',
            aboutFood:'Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
            food:'noodel',
            value:85
        }
    ],
    numbers:[
        {
            id:9,
            num:'all'
        },
        {
            id:10,
            num:'pizza'
        },
        {
            id:11,
            num:'noodel'
        },
    ],
    buyFood: function(value = 100,val,setValue,setBoxMany){
        if(value>=val){
            setValue(value-val)
        }else{
            setBoxMany('flex')
        }
    }
})