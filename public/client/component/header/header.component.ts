import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector: 'app-header',
    templateUrl: './client/Component/header/header.html',
    directives:[ROUTER_DIRECTIVES]
})


export class HeaderComponent { }