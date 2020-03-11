import React from 'react';
import ReactDOM from 'react-dom';
import {act, Simulate} from 'react-dom/test-utils'
import renderer from 'react-test-renderer';
import ToggleInput from '../../ToggleableInput/index.js';

describe("Toggle Input", function(){
    let div;
    beforeEach(function(){
        div = document.createElement('div');
       
    });
    it('renders without crashing', () => {
        ReactDOM.render(<ToggleInput value="test" />, div);
    });

    describe("read state", function(){
        beforeEach(function(){
            act(()=>{
                ReactDOM.render(<ToggleInput value="test" input-class="input" div-class="div" editable="true"/>, div);
            })  
        })
        it("should be in read state by default", function(){
            let toggleContainer = div.querySelector(".div");
            expect(toggleContainer.textContent).toBe("test")
        })
        it("should go to edit state on click of div", function(){
            let inputContainer = div.querySelector(".input");
            let divContainer = div.querySelector(".div");

            expect(inputContainer.style.display).toBe("none");
            expect(divContainer.style.display).toBe("block");
            
            act(()=>{
                Simulate.click(divContainer);
            });
            
            expect(inputContainer.style.display).toBe("block");
            expect(divContainer.style.display).toBe("none");
        });
    });

    describe("edit state", function(){
        beforeEach(function(){
            act(()=>{
                ReactDOM.render(<ToggleInput value="test" input-class="input" div-class="div" editable="true" default-edit-mode="true"/>, div);
            })
        })

        it("should be in edit state by default", function(){
            let toggleContainer = div.querySelector(".input");
            expect(toggleContainer.tagName).toBe("INPUT");
            expect(toggleContainer.value).toBe("test");
            expect(toggleContainer.style.display).toBe("block");
        })

        it("should go to read state on blur of input", function(){
            let toggleContainer = div.querySelector(".input");
            let divContainer = div.querySelector(".div");
            act(()=>{
                Simulate.blur(toggleContainer);
            })
            expect(toggleContainer.style.display).toBe("none");
        })
    })

    afterEach(function(){
        ReactDOM.unmountComponentAtNode(div);
    })
})