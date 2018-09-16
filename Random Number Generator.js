var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
          var string_length = 6;
          var randomstring = '';
          for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
          }