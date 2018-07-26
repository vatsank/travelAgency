import { ComponentAdderService } from './../component-adder.service';
import { TravelAgent } from './../travel-agent';
import { AgentApiService } from './../agent-api.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AgentReviewComponent } from '../agent-review/agent-review.component';

@Component({
  selector: 'app-agent-manager',
  templateUrl: './agent-manager.component.html',
  styleUrls: ['./agent-manager.component.css']
})
export class AgentManagerComponent implements OnInit {
  agentList: TravelAgent[];
  qryString: number;

  @ViewChild('placeHolder', {read: ViewContainerRef})
               viewRef: ViewContainerRef;
  constructor(private service: AgentApiService,private adderService: ComponentAdderService) { }

  ngOnInit() {

    this.service.findAllAgents().
        subscribe(data => this.agentList = data);
  }

   showDetails(name) {

     this.adderService.setViewContainer(this.viewRef);
       this.adderService.addComponent(AgentReviewComponent, name);


   }
}
