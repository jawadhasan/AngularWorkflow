import {IWidget} from './IWidget';
import {Type} from '@angular/core';

export class WidgetInfo {   
    widgetType: Type<IWidget>
    constructor(widgetType: Type<IWidget>){       
        this.widgetType = widgetType;
    }
}