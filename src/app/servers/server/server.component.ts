import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
     
  //  this.server = this.serversService.getServer(1);
    //we had to add the plus sign below so that the id is treated as a number and not a string 
    //we had to do the same in the observable below (+params)
      const id = +this.route.snapshot.params['id'];
      this.server = this.serversService.getServer(id);
       
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id'])
      } 
    );   
  }

}
