import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
export class Teammembers extends Component{
    state={
        counters:[
           {id:'Nikitha'},
           {id:'Rohit'},
           {id:'Krupesh'}
        ]
    }
    render(){
        return(
            <div class="container">
              <div class="row">
                {this.state.counters.map((counter) => (
                    <div class="col-lg-4>
                      <TeamCard
                         key={counter.id}
                         id={counter.id}
                      ></TeamCard>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}
