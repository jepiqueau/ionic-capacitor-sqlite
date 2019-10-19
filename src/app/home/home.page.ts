
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as CapacitorSQLPlugin from 'capacitor-sqlite';

const { CapacitorSQLite, Device } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

  }

  async testPlugin(){ 
    let db: any = {};
    const info = await Device.getInfo();
    console.log('platform ',info.platform)
    if (info.platform === "ios" || info.platform === "android") {
      db = CapacitorSQLite;
      console.log('db ',db)
    }  else {
      db = CapacitorSQLPlugin.CapacitorSQLite;     
    }
    //populate some data
    //string
    let retOpenDB: boolean = false;
    let retExecute1: boolean = false;
    let retExecute2: boolean = false;
    let retQuery1: boolean = false;
    let retQuery2: boolean = false;
    let retRun1: boolean = false;
    let retRun2: boolean = false;
    // Open Database
    let result:any = await db.open({name:"testsqlite"});
    console.log("Open database : " + result.result);
    retOpenDB = result.result;
    if(retOpenDB) {
      document.querySelector('.openDB').classList.remove('hidden');
      // Create Tables if not exist
      let sqlcmd: string = `
      BEGIN TRANSACTION;
      CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY NOT NULL,
          email TEXT UNIQUE NOT NULL,
          name TEXT,
          age INTEGER
      );
      CREATE TABLE IF NOT EXISTS posts (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          body TEXT NOT NULL,
          published_at DATETIME
      );
      PRAGMA user_version = 1;
      COMMIT TRANSACTION;
      `;
      console.log('sqlcmd ',sqlcmd)
      var retExe: any = await db.execute({statements:sqlcmd});
      console.log('retExe ',retExe.result)
      retExecute1 = retExe.result === 0 ? true : false;
      if (retExecute1) {
        document.querySelector('.execute1').classList.remove('hidden');        
      }
      // Insert some Users
      sqlcmd = `
      BEGIN TRANSACTION;
      DELETE FROM users;
      INSERT INTO users (name,email,age) VALUES ("Whiteley","Whiteley.com",30);
      INSERT INTO users (name,email,age) VALUES ("Jones","Jones.com",44);
      COMMIT TRANSACTION;
      `;
      retExe = await db.execute({statements:sqlcmd});
      retExecute2 = retExe.result >= 1 ? true : false;
      if (retExecute2) {
        document.querySelector('.execute2').classList.remove('hidden');        
      }
      // Select all Users
      sqlcmd = "SELECT * FROM users";
      var retSelect: any = await db.query({statement:sqlcmd});
      console.log('retSelect ',retSelect)
      retQuery1 = retSelect.result.length === 2 ? true : false;
      if (retQuery1) {
        document.querySelector('.query1').classList.remove('hidden');        
      }
      // Insert a new User with SQL and Values

      sqlcmd = "INSERT INTO users (name,email,age) VALUES (?,?,?)";
      let values: Array<Array<any>>  = [["Simpson","TEXT"],["Simpson@example.com","TEXT"],[69,"INTEGER"]];
      var retRun: any = await db.run({statement:sqlcmd,values:values});
      retRun1 = retRun.result === 1 ? true : false;
      if (retRun1) {
        document.querySelector('.run1').classList.remove('hidden');        
      }

      // Insert a new User with SQL
      sqlcmd = `INSERT INTO users (name,email,age) VALUES ("Brown","Brown@example.com",15)`;
      retRun = await db.run({statement:sqlcmd,values:[]});
      retRun2 = retRun.result === 1 ? true : false;
      if (retRun2) {
        document.querySelector('.run2').classList.remove('hidden');        
      }
      // Select all Users
      sqlcmd = "SELECT * FROM users";
      retSelect = await db.query({statement:sqlcmd});
      console.log('retSelect ',retSelect)
      retQuery2 = retSelect.result.length === 4 ? true : false;
      if (retQuery2) {
        document.querySelector('.query2').classList.remove('hidden');        
      }

      if(!retExecute1 || !retExecute2 || !retQuery1 || !retRun1 || !retRun2  || !retQuery2) {
        document.querySelector('.failure').classList.remove('hidden');
      } else {
        document.querySelector('.success').classList.remove('hidden');
      }
    } else {
      document.querySelector('.failure').classList.remove('hidden');
    }
  }

}
