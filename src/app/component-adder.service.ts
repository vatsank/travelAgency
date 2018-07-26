import { AgentManagerComponent } from './agent-manager/agent-manager.component';
import { AgentReviewComponent } from './agent-review/agent-review.component';
import { AgentApiService } from './agent-api.service';
import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentFactory } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {
  viewContainer: ViewContainerRef;
  factory: ComponentFactory<{}>;
  reviews: {};

  constructor(private facResolver: ComponentFactoryResolver,
             private agentService: AgentApiService) { }

   setViewContainer(viewContainer: ViewContainerRef) {
     this.viewContainer = viewContainer;
   }

   addComponent(compToAdd: any, name:string) {

    this.viewContainer.clear();
  
    this.factory = this.facResolver.resolveComponentFactory(compToAdd);

     const component = this.factory.create(this.viewContainer.parentInjector);
 
        this.agentService.findReviews(name).subscribe(
          data =>
          (<AgentReviewComponent>component.instance).reviews = data   );

            this.viewContainer.insert(component.hostView);
    }

}
