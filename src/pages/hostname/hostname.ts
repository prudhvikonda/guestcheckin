import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GuestService } from "../../services/guest.service";
import { GuestimagePage } from "../guestimage/guestimage";
import { OtherhostPage } from "../otherhost/otherhost";

@Component({
  selector: 'page-hostname',
  templateUrl: 'hostname.html',
})
export class HostnamePage {

  showList: boolean = false;
  completeHostList: string[];
  hosts: string[];
  OTHER_HOST_TYPE: string = 'Other Employee';

  constructor(private navCtrl: NavController, private guestSrvc: GuestService) {
    this.initializeHostList();
  }

  initializeHostList() {
    this.completeHostList = ["Ken Thompson","Ricardo Harmon","Phil Sedlack","Lynne Laube","Matt Karp","Scott Grimes","Eva Haiden","Eugene Lewis","Andrew Phillips","Mia Smole","David Kim","Jared Luskin","Craig Snodgrass","Kelvin Webb","Justin Kong","Elisabeth Allen","Mary Rowan","Greg Cordell","Ciji Bostic","Ryan Morris","Ryan Johnson","Kevin Aikens","Warren Hearnes","Jenny Nelson","David Beaver","Holly Jackson-Lun","Tara O'Donnell","Chris Cliver","John Michael Robertson"," Nathan Philippi","Kandra Perreira","Jennifer Farmer","Casey Duggan","Jackie Ziznewski","Theodore Arapoglou","Eric Dungan","Andrew Koppmann","Oksana Romankova","Charles Hitchcock","Matt Daly","Lincoln Waddell","Kellan Folkers","Megan Heaney","Allison Kinard","Chelsea McKoy","Samantha Seifer","Rachel Lyons","Megan McKean","Abigail Arapoglou","Matt Ferring","Jacob Warhaftig","Chuck Toomey","Tim Copley","Ran Xu","Sravanthi Yarava","In-Wook Yoo","Stephanie Wu","Jody Yusko","Gary Chiang","Brittany Watson","Floyd Samuels","Garry Campbell","Cyndi Richardson","Sindura Akkineni","Andrew Whitmire","Andy Thorson","Scott Pedersoli","Tim Hanley","Debbie Cifone","Jared Prellwitz","Gareth Brown","Clare Benstead","Adam Denham","Randy Conley","Dani Limbach"," svc_display","Isabella Lex","Bryan MacPherson","David Edgar","Trevor Wooden","Nicholas Neuenschwander","Biju Samuel","Leslie Burhenn","Matt Blantern","Alex Krueger","Kirk Somers","Nichelle Foster","David Evans","Chris Scott","Matthew Robin","Derrick Brown","Elaine Augustine","Matthew Francis","Christina Banks","Amber Rouse","Vadim Brodsky","Brandon Newell","Lacy Thomas","Wesley Mellone","Andy Christiansen","Gregory McCoy","Sterling Metz","Jillian Safko","Eric Jacobson","Anuj Panday","Jacques Nadeau","Aman Sinha","Joe Mitchell","Nicole LaJoe","Tim Mullins","Caroline Sturm","Domenico Pelliccia","Ryan Cornett","Shikha Mittal","Mary Ellen Grant","Merelise Wilson","Dani Cushion","Lisa Bowdoin","Nick Lynton","Deborah Furr","Jamie Marshall","Pavan Nadakarni","Ian Stammer","Elliot Strumlauf","Samidh Chatterjee","Paige Fox","Christa Tinsley Spaht","Brent Ducote","Ben Harris","Kristin MacKenzie","Andreas Demetri","Nadine Carter","Matt Hughes","Joan Corcoran","Simon Hughson","Meera Gopinath"," Tilly Manners","Brinson Thomas","Courtney Maddix","Emily Willey","Howard Young","Sarah Cook","Srikanth Santhapur","Swathi Sudhaakar","Marina Rakitova","Lena Gonzalez","Denzel Thompson","Megan Oyakhire","Evelyne Forester","Bilal Ahmed","Taylor Zacks","Adam Roundtree","Xixiang Zhang","Russell Toon","Reiner Aguspurnomo","Meg Wilson","Benjamin Hornsby","Lydia Brannen","Katie Holtzclaw","Nate Holtzclaw","John Krier","Carson Napps","Abraham Song","Mindy Zeh","Alexa Kravitz","Rudolph Carey","Doug Robertson","Robert Kuypers","Naveed Ahmed","James Ostenson","Shawn Williams","Brooke Zimmerman","Peter Gleason","Michael Vincent","Gene Corcoran","Kali Franklin","David Bussin"," UK Test","Michael Broe","Tina Yu","Chloe Hall","Hollie Swinburn","Sally Griffith","Callie Murr","Patrick McClellan","David Sanders","Ricky Kersey","Sathish Gaddipati","Harvey White","Leslie Crawford","Alex Bahr","Shawn Craig","Jason Theodorson","Matt Postema","Lauren Reinmann","Gerald Thomas","Scott Siegle","Allie Amato","Aliraza Huda","Brock Akerman","Tammy DeMont-Greenbaum","John Standridge","Prudhvi Konda","Laura Stock","Nandini Vijayaraghavan","Katherine Porter","Jake Neuber","Rett Harris","LaKora Loyd","Alex Neumann","Delin Yang","Garth Fritz","Jordan Wygal","Irven Aguirre","Jason Ziemba","Andrew Burford","Lixian Dai","Olivia Taylor","IT AuditTesting","Nick Price","Germaine Montagne","Raghavendra Kandi","AshleyShaffer","Chris Murphy","Melody Pena","Matt Selvaratnam","Jed Murphy","Julie Hughes","Joel Robertson","Jake Anderson","Allen Collier","Eliott Stokes","Weijie Huang","Kavya Gullipalli","Liv Mumaugh","Sylwia Borejko","Achal Inamdar","MichaelSimpson","Gregory Willcox","Francis Solomon","Kate Rogers","Zachary Herndon","James Hart"," Varsha Kota","Kye Harris","Shannon Johnson","Thomas Slusher","Jennifer Yim","Alex Pritchett","Konstantinos Chatzivasileiou","Rachel Morin","Chase Ottinger","Kamron Moore","Amy Stewart","d makinghstacc","Dani Kenady","Erika Borges","Annelise Murphy","Kimberly James","Angela Ettari","Test user3","Abigail Memoli","Andrew Yang","Scott Joseph","Prithvi Maram","Danielle Concordia","Ronald Coleman","Ryan McDermott","Test User33","Zora Wan","John DeBlock","Sam Kirsch","Andrew Hill","McKenzie Rochester","Scott Virgo","Kaddy Ahmed","Gokul Surendra","KC Burney","Anais Stewart","Anvesh Vallabhaneni","Jenna Land","Johannes Denson","Katherine Rock","Steven Ferraro","Maegan Brooks","Vijay Akkineni","Manideep Kothapalli","Matt Stinchcomb","Eric Leung","Isabella Smith","Catherine Chu","Skylar Foote","Miles Sherman","Lee Jenison","Jordan Eason"," Neneh Tagoe","Lori Knutson","Jenny Herrmann","Alec Holtz","Caroline Fooshee","Ansley Ponder","Wendy Wang","Angie Amberg","Nathaniel Daniels","Leigh Spessard","Nick Mahoney","Jairus Glenn","Aisha Jones","Dotti Plemmons","Praharsha Muddana","Jenni Morrison","Jessica Ewing","Kim Vandall","Tripp King","James Wert","Thomas Monaco","Stephanie Owusu","Sasha Trifunac","Brian Cummings","Selenia Villa","Abhinav Sharma","Bennett Williams","Jordan Spencer","Melanie Manns","Yesica Pavon","Adam Nicholls","Juan Arroyo","Brian Calahan","Lindsey Winesburg","John Haire","Marc Kelley","Andrew Landon","Cam Stone","Venugopal Vadlamudi","Mike Kelly","Irene Kim","Courtney Kociemba","Sundeep Vemulapalli","Joani Ruddock","Preston Wilson","Kelly Luzier","ManoharDendi","Aniketh Musugu","Lindsey Stamper","Shawn Young","Emilia Zhang","Kiran Malla","Adi Yerrapragada","Siva Medicharla","John Hider","sre re_test_user","Neelima Paluri","Narasinga Allumalla","Nageswara Bugata","Kishore Talasila","Jordan Marr","Gouri Makatala","Shanna Morning","Ian Maffett","Siddhant Maharana","Imran Patan","Ketan Chirde","Bhavani Bandaru","Theodore Wilson","VZTEST user","Amir Hamer","Ramesh Ramineedi","Stephanie Seals","LonDarius Cunningham","Andy Ong","Hanumantha Alla"," testgt","Juliana Lupinacci","Janine Stephan","Nate Bucholz","Sunil Rongali","Preeti Raju","Ashley Dunn","Jaime DeGrave","Rajani Kumari","Charles Bessellieu","Walton Delavan","Deepali Pareek","John Suh","John Berger","MaheshBongani","Vaidehi Chintapalli","Rajesh Inumula","Scott Jordan","Ravi Patnana","Hailey Liu"]
  }

  getHostList(ev: any) {
    // Copy the array for filtering
    this.hosts = Array.from(this.completeHostList);

    // set val to the value of the searchbar
    console.log(ev);
    let val = ev.target.value;

    // if the value is an empty string don't filter
    if (val && val.trim() != '') {

      // Filter the items
      this.hosts = this.hosts.filter((host) => {
        return (host.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }).slice(0,5);

      if(this.hosts.length == 0) this.hosts.push(this.OTHER_HOST_TYPE);

      // Show the results
      this.showList = true;
    } else {

      // hide the results when the query is empty
      this.showList = false;
    }
  }

  selectHost(ev : any) {
    this.showList = false;
    if(this.OTHER_HOST_TYPE == ev) {
      this.navCtrl.push(OtherhostPage);
    } else {
      this.guestSrvc.setGuestProperty('host', ev);
      this.navCtrl.push(GuestimagePage);
    }
  }

}
