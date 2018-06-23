import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class NodeService {

    constructor(private http: Http) {}
    
}
