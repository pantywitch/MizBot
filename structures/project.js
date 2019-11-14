const Database = require('./../structures/db.js');
const lib = require('./../lib.js');

class Project
{
    
    constructor(msg, guildID, userID)
    {
        
        this.msg = msg;
        this.guildID = guildID;
        this.userID = userID;
        
    }
    
    getByID(id){
        
        var db = new Database();
        var record = db.conn.prepare('SELECT * FROM [projects] WHERE [id] = :id').get({
            id: id
        });
        db.close();
        
        return (record) ? record : false;
        
    }
    
    get(shortname){
        
        var db = new Database();
        var record = db.conn.prepare('SELECT * FROM [projects] WHERE [guild] = :guild AND [user] = :user AND [shortname] = :shortname COLLATE NOCASE').get({
            guild: this.guildID,
            user: this.userID,
            shortname: shortname
        });
        db.close();
        
        return (record) ? record : false;
        
    }
    
    all(){
        
        var db = new Database();
        var records = db.conn.prepare('SELECT * FROM [projects] WHERE [guild] = :guild AND [user] = :user ORDER BY name, shortname, words').all({
            guild: this.guildID,
            user: this.userID
        });
        db.close();
        
        return (records) ? records : false;
        
    }
    
    
    create(shortname, name){
        
        var db = new Database();
        
        db.conn.prepare('INSERT INTO [projects] (guild, user, shortname, name) VALUES (:guild, :user, :shortname, :name)').run({
            guild: this.guildID,
            user: this.userID,
            shortname: shortname,
            name: name
        });
        db.close();

        return true;
        
    }
    
    delete(shortname){
        
        var db = new Database();
        db.conn.prepare('DELETE FROM [projects] WHERE [guild] = :guild AND [user] = :user AND [shortname] = :shortname COLLATE NOCASE').run({
            guild: this.guildID,
            user: this.userID,
            shortname: shortname
        });
        db.close();
        
        return true;        
        
    }
    
    
    update(shortname, words){
        
        var db = new Database();
        db.conn.prepare('UPDATE [projects] SET [words] = :words WHERE [guild] = :guild AND [user] = :user AND [shortname] = :shortname COLLATE NOCASE').run({
            words: words,
            guild: this.guildID,
            user: this.userID,
            shortname: shortname
        });
        db.close();
        
        return true;        
        
    }
    
    
    increment(id, words){
        
        var db = new Database();
        db.conn.prepare('UPDATE [projects] SET [words] = [words] + :words WHERE [id] = :id').run({
            words: words,
            id: id
        });
        db.close();
        
        return true;  
        
    }
    
    
    
    
}

module.exports = Project;