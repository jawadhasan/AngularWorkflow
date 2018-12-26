import { Directive, ViewContainerRef, Input, Injector, ComponentFactoryResolver, ViewChild, Type } from '@angular/core';
import { IWidget } from '../../widget-fx/IWidget';

@Directive({
  selector: '[wf-host]',
})
export class WfstepDirective {
  @Input() widgetType: Type<IWidget>;
  constructor(
    public viewContainerRef: ViewContainerRef, 
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,) {
   }

   ngAfterViewInit() {
    // console.log('WfstepDirective ',this.widgetType);
     this.applyWidgetType(this.widgetType);    
  }
  public applyWidgetType(newType: Type<IWidget>){
    if(!newType){
      alert('TODO: implement emptywidgetcomponent if needed');
    }  
    const factory = this.componentFactoryResolver.resolveComponentFactory(newType);
    const componentRef = factory.create(this.injector);
    this.viewContainerRef.clear();
    this.viewContainerRef.insert(componentRef.hostView);
    // this.activeWidget = componentRef.instance;
    // this.activeWidgetTitle = this.activeWidget.WidgetTitle;
  
  
  
  }

}
