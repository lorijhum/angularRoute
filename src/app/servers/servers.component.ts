import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //using relative path since it doesn't have the / before it
    // we comment this out because this will break the app, when using relative path it tries to go to servers/servers
    // rather than /servers
  //  this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
