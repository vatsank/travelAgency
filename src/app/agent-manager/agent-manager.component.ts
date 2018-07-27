import { ComponentAdderService } from './../component-adder.service';
import { TravelAgent } from './../travel-agent';
import { AgentApiService } from './../agent-api.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AgentReviewComponent } from '../agent-review/agent-review.component';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-agent-manager',
  templateUrl: './agent-manager.component.html',
  styleUrls: ['./agent-manager.component.css']
})
export class AgentManagerComponent implements OnInit {
  agentList: TravelAgent[];
  qryString: number;
  buttonStatus = 'Add';
  showDiscard = false;
  isEdit = false;
  toEdit:TravelAgent;
  @ViewChild('#frm') frmRef: any;
  @ViewChild('placeHolder', {read: ViewContainerRef})
               viewRef: ViewContainerRef;
  agent: TravelAgent = {
    id: 0,
    name: '',
    location: '',
    mobileNumber: 0
  };
  editPox: number;

  constructor(private service: AgentApiService,private adderService: ComponentAdderService) { }

  ngOnInit() {

   this.fetch();
  }

   fetch() {
    this.service.findAllAgents().
    subscribe(data => this.agentList = data);
   }
   showDetails(name) {

     this.adderService.setViewContainer(this.viewRef);
       this.adderService.addComponent(AgentReviewComponent, name);


   }

   submit(frmData) {
     this.agent = frmData;
   
     if (this.isEdit){
       this.toEdit = frmData;
     this.agentList.splice(this.editPox, 0, this.toEdit);
       console.log(this.toEdit);
     }
      // this.service.addAgent(this.agent).subscribe(resp => { this.fetch(); console.log(resp)});
    }

    remove(trvlAgent){
     
      this.service.removeAgent(trvlAgent.id).subscribe(resp=> console.log(resp));
    }
    edit(trvlAgent){
     this.toEdit = trvlAgent;
     this.editPox = this.agentList.indexOf(this.toEdit);
     
      this.buttonStatus = 'Edit';
      this.isEdit = true;
      this.showDiscard = true;
      this.agent = trvlAgent;
    }

    reset(){

      this.frmRef.reset();
    }

}
