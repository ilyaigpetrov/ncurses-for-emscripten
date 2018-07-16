// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'hello.data';
    var REMOTE_PACKAGE_BASE = 'hello.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'home', true, true);
Module['FS_createPath']('/home', 'web_user', true, true);
Module['FS_createPath']('/home/web_user', '.terminfo', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'n', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'a', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'k', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'm', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'N', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'L', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '7', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'p', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'M', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'x', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '9', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '4', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'g', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'c', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '1', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '5', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'w', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '3', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'P', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'j', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'i', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '8', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'z', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'q', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'l', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'Q', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'E', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'A', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '6', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'X', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'v', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 't', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', '2', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'o', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'h', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'b', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'e', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'r', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'd', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 's', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'u', true, true);
Module['FS_createPath']('/home/web_user/.terminfo', 'f', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      }
    };

        var files = metadata.files;
        for (var i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // Reuse the bytearray from the XHR as the source for file reads.
        DataRequest.prototype.byteArray = byteArray;
  
          var files = metadata.files;
          for (var i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_hello.data');

    };
    Module['addRunDependency']('datafile_hello.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 1259, "filename": "/home/web_user/.terminfo/n/news31"}, {"audio": 0, "start": 1259, "crunched": 0, "end": 2552, "filename": "/home/web_user/.terminfo/n/nsterm-7"}, {"audio": 0, "start": 2552, "crunched": 0, "end": 4530, "filename": "/home/web_user/.terminfo/n/nsterm-acs-c-s"}, {"audio": 0, "start": 4530, "crunched": 0, "end": 5702, "filename": "/home/web_user/.terminfo/n/ncr260vppp"}, {"audio": 0, "start": 5702, "crunched": 0, "end": 7276, "filename": "/home/web_user/.terminfo/n/ncr260vt100wan"}, {"audio": 0, "start": 7276, "crunched": 0, "end": 9076, "filename": "/home/web_user/.terminfo/n/ncr260vt200wpp"}, {"audio": 0, "start": 9076, "crunched": 0, "end": 10320, "filename": "/home/web_user/.terminfo/n/news42"}, {"audio": 0, "start": 10320, "crunched": 0, "end": 11860, "filename": "/home/web_user/.terminfo/n/nsterm-m-s-acs"}, {"audio": 0, "start": 11860, "crunched": 0, "end": 13666, "filename": "/home/web_user/.terminfo/n/ncr160vt300pp"}, {"audio": 0, "start": 13666, "crunched": 0, "end": 15446, "filename": "/home/web_user/.terminfo/n/ncr260vt200an"}, {"audio": 0, "start": 15446, "crunched": 0, "end": 16705, "filename": "/home/web_user/.terminfo/n/nwp513"}, {"audio": 0, "start": 16705, "crunched": 0, "end": 17103, "filename": "/home/web_user/.terminfo/n/next"}, {"audio": 0, "start": 17103, "crunched": 0, "end": 18062, "filename": "/home/web_user/.terminfo/n/nd9500"}, {"audio": 0, "start": 18062, "crunched": 0, "end": 19306, "filename": "/home/web_user/.terminfo/n/news-a"}, {"audio": 0, "start": 19306, "crunched": 0, "end": 19645, "filename": "/home/web_user/.terminfo/n/nextshell"}, {"audio": 0, "start": 19645, "crunched": 0, "end": 21259, "filename": "/home/web_user/.terminfo/n/ncr260wy350wpp"}, {"audio": 0, "start": 21259, "crunched": 0, "end": 22827, "filename": "/home/web_user/.terminfo/n/ncr160vt100an"}, {"audio": 0, "start": 22827, "crunched": 0, "end": 24110, "filename": "/home/web_user/.terminfo/n/newscbm-o"}, {"audio": 0, "start": 24110, "crunched": 0, "end": 25497, "filename": "/home/web_user/.terminfo/n/nsterm-old"}, {"audio": 0, "start": 25497, "crunched": 0, "end": 26766, "filename": "/home/web_user/.terminfo/n/nwp512-o"}, {"audio": 0, "start": 26766, "crunched": 0, "end": 28303, "filename": "/home/web_user/.terminfo/n/ntconsole-25"}, {"audio": 0, "start": 28303, "crunched": 0, "end": 30260, "filename": "/home/web_user/.terminfo/n/ncsa-m"}, {"audio": 0, "start": 30260, "crunched": 0, "end": 31478, "filename": "/home/web_user/.terminfo/n/ncr260wy60wpp"}, {"audio": 0, "start": 31478, "crunched": 0, "end": 33060, "filename": "/home/web_user/.terminfo/n/ncr160vt100pp"}, {"audio": 0, "start": 33060, "crunched": 0, "end": 34272, "filename": "/home/web_user/.terminfo/n/nsterm-m"}, {"audio": 0, "start": 34272, "crunched": 0, "end": 35535, "filename": "/home/web_user/.terminfo/n/news"}, {"audio": 0, "start": 35535, "crunched": 0, "end": 37070, "filename": "/home/web_user/.terminfo/n/ntconsole-w"}, {"audio": 0, "start": 37070, "crunched": 0, "end": 39233, "filename": "/home/web_user/.terminfo/n/ncsa-vt220"}, {"audio": 0, "start": 39233, "crunched": 0, "end": 41121, "filename": "/home/web_user/.terminfo/n/nsterm-c-s-7"}, {"audio": 0, "start": 41121, "crunched": 0, "end": 42325, "filename": "/home/web_user/.terminfo/n/ncr260wy50+pp"}, {"audio": 0, "start": 42325, "crunched": 0, "end": 43906, "filename": "/home/web_user/.terminfo/n/nsterm-7-c"}, {"audio": 0, "start": 43906, "crunched": 0, "end": 45698, "filename": "/home/web_user/.terminfo/n/ncr260vt200pp"}, {"audio": 0, "start": 45698, "crunched": 0, "end": 47330, "filename": "/home/web_user/.terminfo/n/nansi.sys"}, {"audio": 0, "start": 47330, "crunched": 0, "end": 48275, "filename": "/home/web_user/.terminfo/n/ndr9500-nl"}, {"audio": 0, "start": 48275, "crunched": 0, "end": 49692, "filename": "/home/web_user/.terminfo/n/ncrvt100wan"}, {"audio": 0, "start": 49692, "crunched": 0, "end": 50991, "filename": "/home/web_user/.terminfo/n/nwp513-a"}, {"audio": 0, "start": 50991, "crunched": 0, "end": 52769, "filename": "/home/web_user/.terminfo/n/ncr260vt200wan"}, {"audio": 0, "start": 52769, "crunched": 0, "end": 54282, "filename": "/home/web_user/.terminfo/n/ntconsole-60"}, {"audio": 0, "start": 54282, "crunched": 0, "end": 56060, "filename": "/home/web_user/.terminfo/n/ncr160vt200wan"}, {"audio": 0, "start": 56060, "crunched": 0, "end": 57692, "filename": "/home/web_user/.terminfo/n/nansisys"}, {"audio": 0, "start": 57692, "crunched": 0, "end": 59427, "filename": "/home/web_user/.terminfo/n/nwp517-w"}, {"audio": 0, "start": 59427, "crunched": 0, "end": 61001, "filename": "/home/web_user/.terminfo/n/ncr160vt100wan"}, {"audio": 0, "start": 61001, "crunched": 0, "end": 62284, "filename": "/home/web_user/.terminfo/n/news31-o"}, {"audio": 0, "start": 62284, "crunched": 0, "end": 63903, "filename": "/home/web_user/.terminfo/n/ncr260wy325pp"}, {"audio": 0, "start": 63903, "crunched": 0, "end": 65154, "filename": "/home/web_user/.terminfo/n/news-42"}, {"audio": 0, "start": 65154, "crunched": 0, "end": 67275, "filename": "/home/web_user/.terminfo/n/ncsa-ns"}, {"audio": 0, "start": 67275, "crunched": 0, "end": 69067, "filename": "/home/web_user/.terminfo/n/ncr160vt300wan"}, {"audio": 0, "start": 69067, "crunched": 0, "end": 70649, "filename": "/home/web_user/.terminfo/n/ncr260vt100pp"}, {"audio": 0, "start": 70649, "crunched": 0, "end": 72477, "filename": "/home/web_user/.terminfo/n/ncr260vt300wpp"}, {"audio": 0, "start": 72477, "crunched": 0, "end": 73776, "filename": "/home/web_user/.terminfo/n/nwp251-a"}, {"audio": 0, "start": 73776, "crunched": 0, "end": 75035, "filename": "/home/web_user/.terminfo/n/newscbm"}, {"audio": 0, "start": 75035, "crunched": 0, "end": 76625, "filename": "/home/web_user/.terminfo/n/ncr160vt100wpp"}, {"audio": 0, "start": 76625, "crunched": 0, "end": 78130, "filename": "/home/web_user/.terminfo/n/ntconsole-35-nti"}, {"audio": 0, "start": 78130, "crunched": 0, "end": 79234, "filename": "/home/web_user/.terminfo/n/ndr9500-mc"}, {"audio": 0, "start": 79234, "crunched": 0, "end": 80371, "filename": "/home/web_user/.terminfo/n/nsterm+c"}, {"audio": 0, "start": 80371, "crunched": 0, "end": 81876, "filename": "/home/web_user/.terminfo/n/ntconsole-60-nti"}, {"audio": 0, "start": 81876, "crunched": 0, "end": 83908, "filename": "/home/web_user/.terminfo/n/ncr260intwan"}, {"audio": 0, "start": 83908, "crunched": 0, "end": 86114, "filename": "/home/web_user/.terminfo/n/nsterm-bce"}, {"audio": 0, "start": 86114, "crunched": 0, "end": 87817, "filename": "/home/web_user/.terminfo/n/nwp517"}, {"audio": 0, "start": 87817, "crunched": 0, "end": 89021, "filename": "/home/web_user/.terminfo/n/ncr160wy50+pp"}, {"audio": 0, "start": 89021, "crunched": 0, "end": 91093, "filename": "/home/web_user/.terminfo/n/ncr260intwpp"}, {"audio": 0, "start": 91093, "crunched": 0, "end": 91692, "filename": "/home/web_user/.terminfo/n/nwp511"}, {"audio": 0, "start": 91692, "crunched": 0, "end": 93220, "filename": "/home/web_user/.terminfo/n/nsterm-m-s"}, {"audio": 0, "start": 93220, "crunched": 0, "end": 95026, "filename": "/home/web_user/.terminfo/n/ncr260vt300pp"}, {"audio": 0, "start": 95026, "crunched": 0, "end": 96225, "filename": "/home/web_user/.terminfo/n/news-old-unk"}, {"audio": 0, "start": 96225, "crunched": 0, "end": 97490, "filename": "/home/web_user/.terminfo/n/news-42-sjis"}, {"audio": 0, "start": 97490, "crunched": 0, "end": 98712, "filename": "/home/web_user/.terminfo/n/nsterm-acs-m"}, {"audio": 0, "start": 98712, "crunched": 0, "end": 99963, "filename": "/home/web_user/.terminfo/n/news-33"}, {"audio": 0, "start": 99963, "crunched": 0, "end": 101531, "filename": "/home/web_user/.terminfo/n/ncr260vt100an"}, {"audio": 0, "start": 101531, "crunched": 0, "end": 102794, "filename": "/home/web_user/.terminfo/n/news-42-euc"}, {"audio": 0, "start": 102794, "crunched": 0, "end": 104384, "filename": "/home/web_user/.terminfo/n/ncr260vt100wpp"}, {"audio": 0, "start": 104384, "crunched": 0, "end": 106074, "filename": "/home/web_user/.terminfo/n/nsterm-s"}, {"audio": 0, "start": 106074, "crunched": 0, "end": 108126, "filename": "/home/web_user/.terminfo/n/ncr260intpp"}, {"audio": 0, "start": 108126, "crunched": 0, "end": 110271, "filename": "/home/web_user/.terminfo/n/nsterm-256color"}, {"audio": 0, "start": 110271, "crunched": 0, "end": 111822, "filename": "/home/web_user/.terminfo/n/nxterm"}, {"audio": 0, "start": 111822, "crunched": 0, "end": 113371, "filename": "/home/web_user/.terminfo/n/ntconsole-w-vt"}, {"audio": 0, "start": 113371, "crunched": 0, "end": 114636, "filename": "/home/web_user/.terminfo/n/news-33-sjis"}, {"audio": 0, "start": 114636, "crunched": 0, "end": 116017, "filename": "/home/web_user/.terminfo/n/nsterm-acs"}, {"audio": 0, "start": 116017, "crunched": 0, "end": 117831, "filename": "/home/web_user/.terminfo/n/ncr160vt300wpp"}, {"audio": 0, "start": 117831, "crunched": 0, "end": 118672, "filename": "/home/web_user/.terminfo/n/nsterm+c41"}, {"audio": 0, "start": 118672, "crunched": 0, "end": 120068, "filename": "/home/web_user/.terminfo/n/ncrvt100pp"}, {"audio": 0, "start": 120068, "crunched": 0, "end": 122260, "filename": "/home/web_user/.terminfo/n/nsterm-build361"}, {"audio": 0, "start": 122260, "crunched": 0, "end": 123710, "filename": "/home/web_user/.terminfo/n/nsterm-7-m-s"}, {"audio": 0, "start": 123710, "crunched": 0, "end": 125009, "filename": "/home/web_user/.terminfo/n/nwe501-a"}, {"audio": 0, "start": 125009, "crunched": 0, "end": 126459, "filename": "/home/web_user/.terminfo/n/nsterm-m-s-7"}, {"audio": 0, "start": 126459, "crunched": 0, "end": 127718, "filename": "/home/web_user/.terminfo/n/nwp518"}, {"audio": 0, "start": 127718, "crunched": 0, "end": 129001, "filename": "/home/web_user/.terminfo/n/nwe501-o"}, {"audio": 0, "start": 129001, "crunched": 0, "end": 130506, "filename": "/home/web_user/.terminfo/n/ntconsole-50-nti"}, {"audio": 0, "start": 130506, "crunched": 0, "end": 132019, "filename": "/home/web_user/.terminfo/n/ntconsole-35"}, {"audio": 0, "start": 132019, "crunched": 0, "end": 133895, "filename": "/home/web_user/.terminfo/n/nansisysk"}, {"audio": 0, "start": 133895, "crunched": 0, "end": 135566, "filename": "/home/web_user/.terminfo/n/nsterm-c-acs"}, {"audio": 0, "start": 135566, "crunched": 0, "end": 135747, "filename": "/home/web_user/.terminfo/n/northstar"}, {"audio": 0, "start": 135747, "crunched": 0, "end": 137704, "filename": "/home/web_user/.terminfo/n/ncsa-vt220-8"}, {"audio": 0, "start": 137704, "crunched": 0, "end": 138963, "filename": "/home/web_user/.terminfo/n/nwe501"}, {"audio": 0, "start": 138963, "crunched": 0, "end": 140226, "filename": "/home/web_user/.terminfo/n/news40"}, {"audio": 0, "start": 140226, "crunched": 0, "end": 141481, "filename": "/home/web_user/.terminfo/n/news-unk"}, {"audio": 0, "start": 141481, "crunched": 0, "end": 143357, "filename": "/home/web_user/.terminfo/n/nansi.sysk"}, {"audio": 0, "start": 143357, "crunched": 0, "end": 145292, "filename": "/home/web_user/.terminfo/n/ncsa-m-ns"}, {"audio": 0, "start": 145292, "crunched": 0, "end": 146904, "filename": "/home/web_user/.terminfo/n/ncr260wy350pp"}, {"audio": 0, "start": 146904, "crunched": 0, "end": 149035, "filename": "/home/web_user/.terminfo/n/ncsa"}, {"audio": 0, "start": 149035, "crunched": 0, "end": 150095, "filename": "/home/web_user/.terminfo/n/ndr9500-25-mc-nl"}, {"audio": 0, "start": 150095, "crunched": 0, "end": 151889, "filename": "/home/web_user/.terminfo/n/ncr260vt300an"}, {"audio": 0, "start": 151889, "crunched": 0, "end": 152563, "filename": "/home/web_user/.terminfo/n/nsterm+s"}, {"audio": 0, "start": 152563, "crunched": 0, "end": 154751, "filename": "/home/web_user/.terminfo/n/nsterm-build343"}, {"audio": 0, "start": 154751, "crunched": 0, "end": 155210, "filename": "/home/web_user/.terminfo/n/newhpkeyboard"}, {"audio": 0, "start": 155210, "crunched": 0, "end": 156831, "filename": "/home/web_user/.terminfo/n/ncr260wy325wpp"}, {"audio": 0, "start": 156831, "crunched": 0, "end": 158114, "filename": "/home/web_user/.terminfo/n/nwp251-o"}, {"audio": 0, "start": 158114, "crunched": 0, "end": 159336, "filename": "/home/web_user/.terminfo/n/nsterm-m-acs"}, {"audio": 0, "start": 159336, "crunched": 0, "end": 160995, "filename": "/home/web_user/.terminfo/n/netbsd6"}, {"audio": 0, "start": 160995, "crunched": 0, "end": 163183, "filename": "/home/web_user/.terminfo/n/nsterm-16color"}, {"audio": 0, "start": 163183, "crunched": 0, "end": 164446, "filename": "/home/web_user/.terminfo/n/nwp514"}, {"audio": 0, "start": 164446, "crunched": 0, "end": 165715, "filename": "/home/web_user/.terminfo/n/nwp514-o"}, {"audio": 0, "start": 165715, "crunched": 0, "end": 166984, "filename": "/home/web_user/.terminfo/n/news40-o"}, {"audio": 0, "start": 166984, "crunched": 0, "end": 168497, "filename": "/home/web_user/.terminfo/n/ntconsole-50"}, {"audio": 0, "start": 168497, "crunched": 0, "end": 170107, "filename": "/home/web_user/.terminfo/n/nsterm-7-s"}, {"audio": 0, "start": 170107, "crunched": 0, "end": 171717, "filename": "/home/web_user/.terminfo/n/nsterm-s-7"}, {"audio": 0, "start": 171717, "crunched": 0, "end": 173236, "filename": "/home/web_user/.terminfo/n/ntconsole-35-w"}, {"audio": 0, "start": 173236, "crunched": 0, "end": 175124, "filename": "/home/web_user/.terminfo/n/nsterm-7-c-s"}, {"audio": 0, "start": 175124, "crunched": 0, "end": 176520, "filename": "/home/web_user/.terminfo/n/ncrvt100an"}, {"audio": 0, "start": 176520, "crunched": 0, "end": 178220, "filename": "/home/web_user/.terminfo/n/nsterm-s-acs"}, {"audio": 0, "start": 178220, "crunched": 0, "end": 178714, "filename": "/home/web_user/.terminfo/n/ncr7900"}, {"audio": 0, "start": 178714, "crunched": 0, "end": 179997, "filename": "/home/web_user/.terminfo/n/nwp513-o"}, {"audio": 0, "start": 179997, "crunched": 0, "end": 182035, "filename": "/home/web_user/.terminfo/n/ncr260intan"}, {"audio": 0, "start": 182035, "crunched": 0, "end": 183247, "filename": "/home/web_user/.terminfo/n/nsterm+acs"}, {"audio": 0, "start": 183247, "crunched": 0, "end": 184530, "filename": "/home/web_user/.terminfo/n/nwp518-o"}, {"audio": 0, "start": 184530, "crunched": 0, "end": 186191, "filename": "/home/web_user/.terminfo/n/nsterm-c"}, {"audio": 0, "start": 186191, "crunched": 0, "end": 187983, "filename": "/home/web_user/.terminfo/n/ncr260vt300wan"}, {"audio": 0, "start": 187983, "crunched": 0, "end": 189504, "filename": "/home/web_user/.terminfo/n/ntconsole-25-nti"}, {"audio": 0, "start": 189504, "crunched": 0, "end": 191204, "filename": "/home/web_user/.terminfo/n/nsterm-acs-s"}, {"audio": 0, "start": 191204, "crunched": 0, "end": 192503, "filename": "/home/web_user/.terminfo/n/news33"}, {"audio": 0, "start": 192503, "crunched": 0, "end": 193742, "filename": "/home/web_user/.terminfo/n/news29"}, {"audio": 0, "start": 193742, "crunched": 0, "end": 195159, "filename": "/home/web_user/.terminfo/n/ncrvt100wpp"}, {"audio": 0, "start": 195159, "crunched": 0, "end": 195541, "filename": "/home/web_user/.terminfo/n/nec5520"}, {"audio": 0, "start": 195541, "crunched": 0, "end": 197090, "filename": "/home/web_user/.terminfo/n/ntconsole-25-w-vt"}, {"audio": 0, "start": 197090, "crunched": 0, "end": 198334, "filename": "/home/web_user/.terminfo/n/nwp514-a"}, {"audio": 0, "start": 198334, "crunched": 0, "end": 199466, "filename": "/home/web_user/.terminfo/n/nsterm-7-m"}, {"audio": 0, "start": 199466, "crunched": 0, "end": 200765, "filename": "/home/web_user/.terminfo/n/newscbm33"}, {"audio": 0, "start": 200765, "crunched": 0, "end": 201971, "filename": "/home/web_user/.terminfo/n/ncr260wy50+wpp"}, {"audio": 0, "start": 201971, "crunched": 0, "end": 203201, "filename": "/home/web_user/.terminfo/n/nsterm+mac"}, {"audio": 0, "start": 203201, "crunched": 0, "end": 204160, "filename": "/home/web_user/.terminfo/n/ndr9500"}, {"audio": 0, "start": 204160, "crunched": 0, "end": 205429, "filename": "/home/web_user/.terminfo/n/news-o"}, {"audio": 0, "start": 205429, "crunched": 0, "end": 206969, "filename": "/home/web_user/.terminfo/n/nsterm-acs-m-s"}, {"audio": 0, "start": 206969, "crunched": 0, "end": 208141, "filename": "/home/web_user/.terminfo/n/ncr160vppp"}, {"audio": 0, "start": 208141, "crunched": 0, "end": 209876, "filename": "/home/web_user/.terminfo/n/nwp-517-w"}, {"audio": 0, "start": 209876, "crunched": 0, "end": 211120, "filename": "/home/web_user/.terminfo/n/nwp512-a"}, {"audio": 0, "start": 211120, "crunched": 0, "end": 212338, "filename": "/home/web_user/.terminfo/n/ncr160wy60wpp"}, {"audio": 0, "start": 212338, "crunched": 0, "end": 213470, "filename": "/home/web_user/.terminfo/n/nsterm-m-7"}, {"audio": 0, "start": 213470, "crunched": 0, "end": 214743, "filename": "/home/web_user/.terminfo/n/news-29-sjis"}, {"audio": 0, "start": 214743, "crunched": 0, "end": 215712, "filename": "/home/web_user/.terminfo/n/ndr9500-25"}, {"audio": 0, "start": 215712, "crunched": 0, "end": 217678, "filename": "/home/web_user/.terminfo/n/nsterm-c-s"}, {"audio": 0, "start": 217678, "crunched": 0, "end": 218629, "filename": "/home/web_user/.terminfo/n/ndr9500-25-nl"}, {"audio": 0, "start": 218629, "crunched": 0, "end": 219163, "filename": "/home/web_user/.terminfo/n/ncr7901"}, {"audio": 0, "start": 219163, "crunched": 0, "end": 221604, "filename": "/home/web_user/.terminfo/n/nsterm-build400"}, {"audio": 0, "start": 221604, "crunched": 0, "end": 222810, "filename": "/home/web_user/.terminfo/n/ncr160wy50+wpp"}, {"audio": 0, "start": 222810, "crunched": 0, "end": 224513, "filename": "/home/web_user/.terminfo/n/nwp-517"}, {"audio": 0, "start": 224513, "crunched": 0, "end": 226954, "filename": "/home/web_user/.terminfo/n/nsterm"}, {"audio": 0, "start": 226954, "crunched": 0, "end": 228489, "filename": "/home/web_user/.terminfo/n/ntconsole-25-w"}, {"audio": 0, "start": 228489, "crunched": 0, "end": 229728, "filename": "/home/web_user/.terminfo/n/news28-a"}, {"audio": 0, "start": 229728, "crunched": 0, "end": 231027, "filename": "/home/web_user/.terminfo/n/news31-a"}, {"audio": 0, "start": 231027, "crunched": 0, "end": 232243, "filename": "/home/web_user/.terminfo/n/ncr260wy60pp"}, {"audio": 0, "start": 232243, "crunched": 0, "end": 233514, "filename": "/home/web_user/.terminfo/n/news-29-euc"}, {"audio": 0, "start": 233514, "crunched": 0, "end": 234777, "filename": "/home/web_user/.terminfo/n/nwp512"}, {"audio": 0, "start": 234777, "crunched": 0, "end": 236008, "filename": "/home/web_user/.terminfo/n/news28"}, {"audio": 0, "start": 236008, "crunched": 0, "end": 237224, "filename": "/home/web_user/.terminfo/n/ncr160wy60pp"}, {"audio": 0, "start": 237224, "crunched": 0, "end": 238741, "filename": "/home/web_user/.terminfo/n/ntconsole-100"}, {"audio": 0, "start": 238741, "crunched": 0, "end": 240533, "filename": "/home/web_user/.terminfo/n/ncr160vt200pp"}, {"audio": 0, "start": 240533, "crunched": 0, "end": 242333, "filename": "/home/web_user/.terminfo/n/ncr160vt200wpp"}, {"audio": 0, "start": 242333, "crunched": 0, "end": 242715, "filename": "/home/web_user/.terminfo/n/nec"}, {"audio": 0, "start": 242715, "crunched": 0, "end": 244252, "filename": "/home/web_user/.terminfo/n/ntconsole"}, {"audio": 0, "start": 244252, "crunched": 0, "end": 245427, "filename": "/home/web_user/.terminfo/n/ncr160vpwpp"}, {"audio": 0, "start": 245427, "crunched": 0, "end": 245921, "filename": "/home/web_user/.terminfo/n/ncr7900i"}, {"audio": 0, "start": 245921, "crunched": 0, "end": 246971, "filename": "/home/web_user/.terminfo/n/ndr9500-mc-nl"}, {"audio": 0, "start": 246971, "crunched": 0, "end": 248234, "filename": "/home/web_user/.terminfo/n/news-33-euc"}, {"audio": 0, "start": 248234, "crunched": 0, "end": 249300, "filename": "/home/web_user/.terminfo/n/ndr9500-25-mc"}, {"audio": 0, "start": 249300, "crunched": 0, "end": 250544, "filename": "/home/web_user/.terminfo/n/news40-a"}, {"audio": 0, "start": 250544, "crunched": 0, "end": 251511, "filename": "/home/web_user/.terminfo/n/newhp"}, {"audio": 0, "start": 251511, "crunched": 0, "end": 253092, "filename": "/home/web_user/.terminfo/n/nsterm-c-7"}, {"audio": 0, "start": 253092, "crunched": 0, "end": 254351, "filename": "/home/web_user/.terminfo/n/news-29"}, {"audio": 0, "start": 254351, "crunched": 0, "end": 256022, "filename": "/home/web_user/.terminfo/n/nsterm-acs-c"}, {"audio": 0, "start": 256022, "crunched": 0, "end": 257146, "filename": "/home/web_user/.terminfo/n/nsterm+7"}, {"audio": 0, "start": 257146, "crunched": 0, "end": 258940, "filename": "/home/web_user/.terminfo/n/ncr160vt300an"}, {"audio": 0, "start": 258940, "crunched": 0, "end": 259539, "filename": "/home/web_user/.terminfo/n/nwp-511"}, {"audio": 0, "start": 259539, "crunched": 0, "end": 261727, "filename": "/home/web_user/.terminfo/n/nsterm-build326"}, {"audio": 0, "start": 261727, "crunched": 0, "end": 263507, "filename": "/home/web_user/.terminfo/n/ncr160vt200an"}, {"audio": 0, "start": 263507, "crunched": 0, "end": 263982, "filename": "/home/web_user/.terminfo/n/ncr7900iv"}, {"audio": 0, "start": 263982, "crunched": 0, "end": 265281, "filename": "/home/web_user/.terminfo/n/newscbm-a"}, {"audio": 0, "start": 265281, "crunched": 0, "end": 266456, "filename": "/home/web_user/.terminfo/n/ncr260vpwpp"}, {"audio": 0, "start": 266456, "crunched": 0, "end": 267975, "filename": "/home/web_user/.terminfo/n/ntconsole-50-w"}, {"audio": 0, "start": 267975, "crunched": 0, "end": 269274, "filename": "/home/web_user/.terminfo/n/nwp518-a"}, {"audio": 0, "start": 269274, "crunched": 0, "end": 270783, "filename": "/home/web_user/.terminfo/n/ntconsole-100-nti"}, {"audio": 0, "start": 270783, "crunched": 0, "end": 272302, "filename": "/home/web_user/.terminfo/n/ntconsole-60-w"}, {"audio": 0, "start": 272302, "crunched": 0, "end": 274280, "filename": "/home/web_user/.terminfo/n/nsterm-c-s-acs"}, {"audio": 0, "start": 274280, "crunched": 0, "end": 274743, "filename": "/home/web_user/.terminfo/a/ansi+sgrbold"}, {"audio": 0, "start": 274743, "crunched": 0, "end": 275969, "filename": "/home/web_user/.terminfo/a/avt-w-s"}, {"audio": 0, "start": 275969, "crunched": 0, "end": 276112, "filename": "/home/web_user/.terminfo/a/ansi+sgrul"}, {"audio": 0, "start": 276112, "crunched": 0, "end": 277590, "filename": "/home/web_user/.terminfo/a/ansi80x25-mono"}, {"audio": 0, "start": 277590, "crunched": 0, "end": 278859, "filename": "/home/web_user/.terminfo/a/aaa-40"}, {"audio": 0, "start": 278859, "crunched": 0, "end": 279504, "filename": "/home/web_user/.terminfo/a/avatar0"}, {"audio": 0, "start": 279504, "crunched": 0, "end": 280830, "filename": "/home/web_user/.terminfo/a/att510d"}, {"audio": 0, "start": 280830, "crunched": 0, "end": 282087, "filename": "/home/web_user/.terminfo/a/aaa-24"}, {"audio": 0, "start": 282087, "crunched": 0, "end": 282772, "filename": "/home/web_user/.terminfo/a/ansi+enq"}, {"audio": 0, "start": 282772, "crunched": 0, "end": 283200, "filename": "/home/web_user/.terminfo/a/appleII"}, {"audio": 0, "start": 283200, "crunched": 0, "end": 284153, "filename": "/home/web_user/.terminfo/a/altos3"}, {"audio": 0, "start": 284153, "crunched": 0, "end": 285405, "filename": "/home/web_user/.terminfo/a/ansi80x60-mono"}, {"audio": 0, "start": 285405, "crunched": 0, "end": 287371, "filename": "/home/web_user/.terminfo/a/at-color"}, {"audio": 0, "start": 287371, "crunched": 0, "end": 289260, "filename": "/home/web_user/.terminfo/a/aixterm-16color"}, {"audio": 0, "start": 289260, "crunched": 0, "end": 290865, "filename": "/home/web_user/.terminfo/a/att610-103k"}, {"audio": 0, "start": 290865, "crunched": 0, "end": 292121, "filename": "/home/web_user/.terminfo/a/ansi.sys-old"}, {"audio": 0, "start": 292121, "crunched": 0, "end": 293663, "filename": "/home/web_user/.terminfo/a/att4425-w"}, {"audio": 0, "start": 293663, "crunched": 0, "end": 294743, "filename": "/home/web_user/.terminfo/a/att630"}, {"audio": 0, "start": 294743, "crunched": 0, "end": 296056, "filename": "/home/web_user/.terminfo/a/aaa-36-rv"}, {"audio": 0, "start": 296056, "crunched": 0, "end": 296995, "filename": "/home/web_user/.terminfo/a/adm3a+"}, {"audio": 0, "start": 296995, "crunched": 0, "end": 298234, "filename": "/home/web_user/.terminfo/a/avt-rv"}, {"audio": 0, "start": 298234, "crunched": 0, "end": 299450, "filename": "/home/web_user/.terminfo/a/apollo_15P"}, {"audio": 0, "start": 299450, "crunched": 0, "end": 299560, "filename": "/home/web_user/.terminfo/a/ansi+local1"}, {"audio": 0, "start": 299560, "crunched": 0, "end": 300902, "filename": "/home/web_user/.terminfo/a/aaa-60-s-rv"}, {"audio": 0, "start": 300902, "crunched": 0, "end": 302472, "filename": "/home/web_user/.terminfo/a/ansi.sys"}, {"audio": 0, "start": 302472, "crunched": 0, "end": 302936, "filename": "/home/web_user/.terminfo/a/att5620-s"}, {"audio": 0, "start": 302936, "crunched": 0, "end": 303871, "filename": "/home/web_user/.terminfo/a/adm3a"}, {"audio": 0, "start": 303871, "crunched": 0, "end": 305000, "filename": "/home/web_user/.terminfo/a/att5410v1"}, {"audio": 0, "start": 305000, "crunched": 0, "end": 306362, "filename": "/home/web_user/.terminfo/a/aaa-30-s"}, {"audio": 0, "start": 306362, "crunched": 0, "end": 306783, "filename": "/home/web_user/.terminfo/a/apple-ae"}, {"audio": 0, "start": 306783, "crunched": 0, "end": 307140, "filename": "/home/web_user/.terminfo/a/aj832"}, {"audio": 0, "start": 307140, "crunched": 0, "end": 308059, "filename": "/home/web_user/.terminfo/a/alt2"}, {"audio": 0, "start": 308059, "crunched": 0, "end": 309477, "filename": "/home/web_user/.terminfo/a/aaa-s-rv-ctxt"}, {"audio": 0, "start": 309477, "crunched": 0, "end": 310333, "filename": "/home/web_user/.terminfo/a/atari-m"}, {"audio": 0, "start": 310333, "crunched": 0, "end": 311729, "filename": "/home/web_user/.terminfo/a/att5420-rv"}, {"audio": 0, "start": 311729, "crunched": 0, "end": 312023, "filename": "/home/web_user/.terminfo/a/ansi+idl"}, {"audio": 0, "start": 312023, "crunched": 0, "end": 312331, "filename": "/home/web_user/.terminfo/a/ansi+rep"}, {"audio": 0, "start": 312331, "crunched": 0, "end": 312967, "filename": "/home/web_user/.terminfo/a/adm12"}, {"audio": 0, "start": 312967, "crunched": 0, "end": 313600, "filename": "/home/web_user/.terminfo/a/ampex210"}, {"audio": 0, "start": 313600, "crunched": 0, "end": 314241, "filename": "/home/web_user/.terminfo/a/altoheath"}, {"audio": 0, "start": 314241, "crunched": 0, "end": 315407, "filename": "/home/web_user/.terminfo/a/avt-w-ns"}, {"audio": 0, "start": 315407, "crunched": 0, "end": 315757, "filename": "/home/web_user/.terminfo/a/adm1"}, {"audio": 0, "start": 315757, "crunched": 0, "end": 317053, "filename": "/home/web_user/.terminfo/a/aaa-60-s"}, {"audio": 0, "start": 317053, "crunched": 0, "end": 318321, "filename": "/home/web_user/.terminfo/a/aaa-db"}, {"audio": 0, "start": 318321, "crunched": 0, "end": 319438, "filename": "/home/web_user/.terminfo/a/att5430"}, {"audio": 0, "start": 319438, "crunched": 0, "end": 320739, "filename": "/home/web_user/.terminfo/a/aaa-18-rv"}, {"audio": 0, "start": 320739, "crunched": 0, "end": 322607, "filename": "/home/web_user/.terminfo/a/att730-41"}, {"audio": 0, "start": 322607, "crunched": 0, "end": 323759, "filename": "/home/web_user/.terminfo/a/att5410-w"}, {"audio": 0, "start": 323759, "crunched": 0, "end": 324385, "filename": "/home/web_user/.terminfo/a/att5620"}, {"audio": 0, "start": 324385, "crunched": 0, "end": 325304, "filename": "/home/web_user/.terminfo/a/altos2"}, {"audio": 0, "start": 325304, "crunched": 0, "end": 326549, "filename": "/home/web_user/.terminfo/a/avt-w-rv-s"}, {"audio": 0, "start": 326549, "crunched": 0, "end": 326801, "filename": "/home/web_user/.terminfo/a/ansi+arrows"}, {"audio": 0, "start": 326801, "crunched": 0, "end": 328058, "filename": "/home/web_user/.terminfo/a/aaa-18"}, {"audio": 0, "start": 328058, "crunched": 0, "end": 329442, "filename": "/home/web_user/.terminfo/a/att4415"}, {"audio": 0, "start": 329442, "crunched": 0, "end": 330523, "filename": "/home/web_user/.terminfo/a/att505-24"}, {"audio": 0, "start": 330523, "crunched": 0, "end": 330880, "filename": "/home/web_user/.terminfo/a/aj830"}, {"audio": 0, "start": 330880, "crunched": 0, "end": 331321, "filename": "/home/web_user/.terminfo/a/adm20"}, {"audio": 0, "start": 331321, "crunched": 0, "end": 332610, "filename": "/home/web_user/.terminfo/a/aaa"}, {"audio": 0, "start": 332610, "crunched": 0, "end": 333730, "filename": "/home/web_user/.terminfo/a/att630-24"}, {"audio": 0, "start": 333730, "crunched": 0, "end": 334873, "filename": "/home/web_user/.terminfo/a/avt-ns"}, {"audio": 0, "start": 334873, "crunched": 0, "end": 335495, "filename": "/home/web_user/.terminfo/a/abm85h"}, {"audio": 0, "start": 335495, "crunched": 0, "end": 336698, "filename": "/home/web_user/.terminfo/a/avt-w-rv-ns"}, {"audio": 0, "start": 336698, "crunched": 0, "end": 337046, "filename": "/home/web_user/.terminfo/a/ansi+local"}, {"audio": 0, "start": 337046, "crunched": 0, "end": 338333, "filename": "/home/web_user/.terminfo/a/aaa-30-ctxt"}, {"audio": 0, "start": 338333, "crunched": 0, "end": 339718, "filename": "/home/web_user/.terminfo/a/att610-w"}, {"audio": 0, "start": 339718, "crunched": 0, "end": 340525, "filename": "/home/web_user/.terminfo/a/att4426"}, {"audio": 0, "start": 340525, "crunched": 0, "end": 341023, "filename": "/home/web_user/.terminfo/a/apple-uterm-vb"}, {"audio": 0, "start": 341023, "crunched": 0, "end": 342637, "filename": "/home/web_user/.terminfo/a/att620-103k"}, {"audio": 0, "start": 342637, "crunched": 0, "end": 343346, "filename": "/home/web_user/.terminfo/a/amp219"}, {"audio": 0, "start": 343346, "crunched": 0, "end": 345312, "filename": "/home/web_user/.terminfo/a/atari-color"}, {"audio": 0, "start": 345312, "crunched": 0, "end": 345492, "filename": "/home/web_user/.terminfo/a/ansi+idc1"}, {"audio": 0, "start": 345492, "crunched": 0, "end": 345976, "filename": "/home/web_user/.terminfo/a/aaa-rv-unk"}, {"audio": 0, "start": 345976, "crunched": 0, "end": 347277, "filename": "/home/web_user/.terminfo/a/aaa-24-rv"}, {"audio": 0, "start": 347277, "crunched": 0, "end": 348697, "filename": "/home/web_user/.terminfo/a/at386"}, {"audio": 0, "start": 348697, "crunched": 0, "end": 349393, "filename": "/home/web_user/.terminfo/a/ampex219w"}, {"audio": 0, "start": 349393, "crunched": 0, "end": 350189, "filename": "/home/web_user/.terminfo/a/att4424-1"}, {"audio": 0, "start": 350189, "crunched": 0, "end": 351907, "filename": "/home/web_user/.terminfo/a/ansi-emx"}, {"audio": 0, "start": 351907, "crunched": 0, "end": 352763, "filename": "/home/web_user/.terminfo/a/atari_st"}, {"audio": 0, "start": 352763, "crunched": 0, "end": 354052, "filename": "/home/web_user/.terminfo/a/aaa-30"}, {"audio": 0, "start": 354052, "crunched": 0, "end": 356018, "filename": "/home/web_user/.terminfo/a/atari_st-color"}, {"audio": 0, "start": 356018, "crunched": 0, "end": 357353, "filename": "/home/web_user/.terminfo/a/aaa-30-rv-ctxt"}, {"audio": 0, "start": 357353, "crunched": 0, "end": 358622, "filename": "/home/web_user/.terminfo/a/aaa-26"}, {"audio": 0, "start": 358622, "crunched": 0, "end": 360505, "filename": "/home/web_user/.terminfo/a/att730r-41"}, {"audio": 0, "start": 360505, "crunched": 0, "end": 361792, "filename": "/home/web_user/.terminfo/a/att605"}, {"audio": 0, "start": 361792, "crunched": 0, "end": 362233, "filename": "/home/web_user/.terminfo/a/avt+s"}, {"audio": 0, "start": 362233, "crunched": 0, "end": 363603, "filename": "/home/web_user/.terminfo/a/ansi-m"}, {"audio": 0, "start": 363603, "crunched": 0, "end": 364459, "filename": "/home/web_user/.terminfo/a/atarist-m"}, {"audio": 0, "start": 364459, "crunched": 0, "end": 365989, "filename": "/home/web_user/.terminfo/a/aixterm-m-old"}, {"audio": 0, "start": 365989, "crunched": 0, "end": 367467, "filename": "/home/web_user/.terminfo/a/arm100-w"}, {"audio": 0, "start": 367467, "crunched": 0, "end": 368705, "filename": "/home/web_user/.terminfo/a/aaa-unk"}, {"audio": 0, "start": 368705, "crunched": 0, "end": 370201, "filename": "/home/web_user/.terminfo/a/ansi80x60"}, {"audio": 0, "start": 370201, "crunched": 0, "end": 371284, "filename": "/home/web_user/.terminfo/a/adm11"}, {"audio": 0, "start": 371284, "crunched": 0, "end": 372237, "filename": "/home/web_user/.terminfo/a/altos-3"}, {"audio": 0, "start": 372237, "crunched": 0, "end": 372739, "filename": "/home/web_user/.terminfo/a/ampex-232"}, {"audio": 0, "start": 372739, "crunched": 0, "end": 374119, "filename": "/home/web_user/.terminfo/a/att4415-nl"}, {"audio": 0, "start": 374119, "crunched": 0, "end": 375335, "filename": "/home/web_user/.terminfo/a/apollo_19L"}, {"audio": 0, "start": 375335, "crunched": 0, "end": 376300, "filename": "/home/web_user/.terminfo/a/att2300"}, {"audio": 0, "start": 376300, "crunched": 0, "end": 376775, "filename": "/home/web_user/.terminfo/a/aaa+rv"}, {"audio": 0, "start": 376775, "crunched": 0, "end": 377927, "filename": "/home/web_user/.terminfo/a/att4410-w"}, {"audio": 0, "start": 377927, "crunched": 0, "end": 378249, "filename": "/home/web_user/.terminfo/a/ansi+tabs"}, {"audio": 0, "start": 378249, "crunched": 0, "end": 379124, "filename": "/home/web_user/.terminfo/a/alt7pc"}, {"audio": 0, "start": 379124, "crunched": 0, "end": 380034, "filename": "/home/web_user/.terminfo/a/att5418-w"}, {"audio": 0, "start": 380034, "crunched": 0, "end": 381639, "filename": "/home/web_user/.terminfo/a/att615-103k"}, {"audio": 0, "start": 381639, "crunched": 0, "end": 382857, "filename": "/home/web_user/.terminfo/a/avt-s"}, {"audio": 0, "start": 382857, "crunched": 0, "end": 383874, "filename": "/home/web_user/.terminfo/a/awsc"}, {"audio": 0, "start": 383874, "crunched": 0, "end": 384394, "filename": "/home/web_user/.terminfo/a/addsvp60"}, {"audio": 0, "start": 384394, "crunched": 0, "end": 384806, "filename": "/home/web_user/.terminfo/a/ampex175"}, {"audio": 0, "start": 384806, "crunched": 0, "end": 384883, "filename": "/home/web_user/.terminfo/a/ansi+erase"}, {"audio": 0, "start": 384883, "crunched": 0, "end": 385344, "filename": "/home/web_user/.terminfo/a/appleIIgs"}, {"audio": 0, "start": 385344, "crunched": 0, "end": 387212, "filename": "/home/web_user/.terminfo/a/att730-24"}, {"audio": 0, "start": 387212, "crunched": 0, "end": 388727, "filename": "/home/web_user/.terminfo/a/att615"}, {"audio": 0, "start": 388727, "crunched": 0, "end": 389996, "filename": "/home/web_user/.terminfo/a/aaa-36"}, {"audio": 0, "start": 389996, "crunched": 0, "end": 391509, "filename": "/home/web_user/.terminfo/a/att605-pc"}, {"audio": 0, "start": 391509, "crunched": 0, "end": 392917, "filename": "/home/web_user/.terminfo/a/aaa-s-rv"}, {"audio": 0, "start": 392917, "crunched": 0, "end": 393870, "filename": "/home/web_user/.terminfo/a/altos5"}, {"audio": 0, "start": 393870, "crunched": 0, "end": 395372, "filename": "/home/web_user/.terminfo/a/ansi80x50"}, {"audio": 0, "start": 395372, "crunched": 0, "end": 396918, "filename": "/home/web_user/.terminfo/a/att5420_2"}, {"audio": 0, "start": 396918, "crunched": 0, "end": 397504, "filename": "/home/web_user/.terminfo/a/abm85e"}, {"audio": 0, "start": 397504, "crunched": 0, "end": 398640, "filename": "/home/web_user/.terminfo/a/att4410"}, {"audio": 0, "start": 398640, "crunched": 0, "end": 398982, "filename": "/home/web_user/.terminfo/a/adm3"}, {"audio": 0, "start": 398982, "crunched": 0, "end": 400390, "filename": "/home/web_user/.terminfo/a/aaa-30-s-rv"}, {"audio": 0, "start": 400390, "crunched": 0, "end": 400728, "filename": "/home/web_user/.terminfo/a/ansi+inittabs"}, {"audio": 0, "start": 400728, "crunched": 0, "end": 402108, "filename": "/home/web_user/.terminfo/a/att5420-nl"}, {"audio": 0, "start": 402108, "crunched": 0, "end": 403586, "filename": "/home/web_user/.terminfo/a/arm100-wam"}, {"audio": 0, "start": 403586, "crunched": 0, "end": 404107, "filename": "/home/web_user/.terminfo/a/adm42-ns"}, {"audio": 0, "start": 404107, "crunched": 0, "end": 405581, "filename": "/home/web_user/.terminfo/a/arm100"}, {"audio": 0, "start": 405581, "crunched": 0, "end": 406850, "filename": "/home/web_user/.terminfo/a/aaa-48"}, {"audio": 0, "start": 406850, "crunched": 0, "end": 407756, "filename": "/home/web_user/.terminfo/a/att4418"}, {"audio": 0, "start": 407756, "crunched": 0, "end": 408302, "filename": "/home/web_user/.terminfo/a/abm85"}, {"audio": 0, "start": 408302, "crunched": 0, "end": 408773, "filename": "/home/web_user/.terminfo/a/att5420+nl"}, {"audio": 0, "start": 408773, "crunched": 0, "end": 410183, "filename": "/home/web_user/.terminfo/a/att4415-w-rv-n"}, {"audio": 0, "start": 410183, "crunched": 0, "end": 411464, "filename": "/home/web_user/.terminfo/a/aaa-60-rv"}, {"audio": 0, "start": 411464, "crunched": 0, "end": 412882, "filename": "/home/web_user/.terminfo/a/aaa-30-s-rv-ct"}, {"audio": 0, "start": 412882, "crunched": 0, "end": 414195, "filename": "/home/web_user/.terminfo/a/aaa-40-rv"}, {"audio": 0, "start": 414195, "crunched": 0, "end": 414367, "filename": "/home/web_user/.terminfo/a/adm+sgr"}, {"audio": 0, "start": 414367, "crunched": 0, "end": 414828, "filename": "/home/web_user/.terminfo/a/appleIIc"}, {"audio": 0, "start": 414828, "crunched": 0, "end": 417038, "filename": "/home/web_user/.terminfo/a/aterm"}, {"audio": 0, "start": 417038, "crunched": 0, "end": 417501, "filename": "/home/web_user/.terminfo/a/ansi+sgrdim"}, {"audio": 0, "start": 417501, "crunched": 0, "end": 417927, "filename": "/home/web_user/.terminfo/a/atari-old"}, {"audio": 0, "start": 417927, "crunched": 0, "end": 419196, "filename": "/home/web_user/.terminfo/a/aaa-28"}, {"audio": 0, "start": 419196, "crunched": 0, "end": 420060, "filename": "/home/web_user/.terminfo/a/altos7"}, {"audio": 0, "start": 420060, "crunched": 0, "end": 420526, "filename": "/home/web_user/.terminfo/a/apple-videx"}, {"audio": 0, "start": 420526, "crunched": 0, "end": 421716, "filename": "/home/web_user/.terminfo/a/avt-rv-ns"}, {"audio": 0, "start": 421716, "crunched": 0, "end": 423172, "filename": "/home/web_user/.terminfo/a/amiga-vnc"}, {"audio": 0, "start": 423172, "crunched": 0, "end": 424028, "filename": "/home/web_user/.terminfo/a/at-m"}, {"audio": 0, "start": 424028, "crunched": 0, "end": 424571, "filename": "/home/web_user/.terminfo/a/att4420"}, {"audio": 0, "start": 424571, "crunched": 0, "end": 426433, "filename": "/home/web_user/.terminfo/a/aixterm"}, {"audio": 0, "start": 426433, "crunched": 0, "end": 427142, "filename": "/home/web_user/.terminfo/a/ampex219"}, {"audio": 0, "start": 427142, "crunched": 0, "end": 427460, "filename": "/home/web_user/.terminfo/a/ansi+pp"}, {"audio": 0, "start": 427460, "crunched": 0, "end": 427819, "filename": "/home/web_user/.terminfo/a/aas1901"}, {"audio": 0, "start": 427819, "crunched": 0, "end": 428295, "filename": "/home/web_user/.terminfo/a/ansi-nt"}, {"audio": 0, "start": 428295, "crunched": 0, "end": 429412, "filename": "/home/web_user/.terminfo/a/att505"}, {"audio": 0, "start": 429412, "crunched": 0, "end": 430168, "filename": "/home/web_user/.terminfo/a/ansiterm"}, {"audio": 0, "start": 430168, "crunched": 0, "end": 431432, "filename": "/home/web_user/.terminfo/a/ansil-mono"}, {"audio": 0, "start": 431432, "crunched": 0, "end": 432307, "filename": "/home/web_user/.terminfo/a/altos7pc"}, {"audio": 0, "start": 432307, "crunched": 0, "end": 432793, "filename": "/home/web_user/.terminfo/a/att4424m"}, {"audio": 0, "start": 432793, "crunched": 0, "end": 434195, "filename": "/home/web_user/.terminfo/a/att4415-w-rv"}, {"audio": 0, "start": 434195, "crunched": 0, "end": 435459, "filename": "/home/web_user/.terminfo/a/ansi80x50-mono"}, {"audio": 0, "start": 435459, "crunched": 0, "end": 436821, "filename": "/home/web_user/.terminfo/a/aaa-s"}, {"audio": 0, "start": 436821, "crunched": 0, "end": 437161, "filename": "/home/web_user/.terminfo/a/ansi+rca"}, {"audio": 0, "start": 437161, "crunched": 0, "end": 438703, "filename": "/home/web_user/.terminfo/a/att5425-nl"}, {"audio": 0, "start": 438703, "crunched": 0, "end": 439164, "filename": "/home/web_user/.terminfo/a/appleIIe"}, {"audio": 0, "start": 439164, "crunched": 0, "end": 439883, "filename": "/home/web_user/.terminfo/a/amiga-8bit"}, {"audio": 0, "start": 439883, "crunched": 0, "end": 441135, "filename": "/home/web_user/.terminfo/a/ansi80x43-mono"}, {"audio": 0, "start": 441135, "crunched": 0, "end": 442387, "filename": "/home/web_user/.terminfo/a/ansi80x30-mono"}, {"audio": 0, "start": 442387, "crunched": 0, "end": 443333, "filename": "/home/web_user/.terminfo/a/att2350"}, {"audio": 0, "start": 443333, "crunched": 0, "end": 443841, "filename": "/home/web_user/.terminfo/a/ampex232w"}, {"audio": 0, "start": 443841, "crunched": 0, "end": 445399, "filename": "/home/web_user/.terminfo/a/att5420_2-w"}, {"audio": 0, "start": 445399, "crunched": 0, "end": 446535, "filename": "/home/web_user/.terminfo/a/att5410"}, {"audio": 0, "start": 446535, "crunched": 0, "end": 447931, "filename": "/home/web_user/.terminfo/a/att5420-w-nl"}, {"audio": 0, "start": 447931, "crunched": 0, "end": 449335, "filename": "/home/web_user/.terminfo/a/att4415-rv-nl"}, {"audio": 0, "start": 449335, "crunched": 0, "end": 450342, "filename": "/home/web_user/.terminfo/a/adm21"}, {"audio": 0, "start": 450342, "crunched": 0, "end": 450889, "filename": "/home/web_user/.terminfo/a/att5620-1"}, {"audio": 0, "start": 450889, "crunched": 0, "end": 451370, "filename": "/home/web_user/.terminfo/a/a80"}, {"audio": 0, "start": 451370, "crunched": 0, "end": 452030, "filename": "/home/web_user/.terminfo/a/avatar0+"}, {"audio": 0, "start": 452030, "crunched": 0, "end": 453526, "filename": "/home/web_user/.terminfo/a/ansi80x30"}, {"audio": 0, "start": 453526, "crunched": 0, "end": 454301, "filename": "/home/web_user/.terminfo/a/att4424"}, {"audio": 0, "start": 454301, "crunched": 0, "end": 456145, "filename": "/home/web_user/.terminfo/a/att730"}, {"audio": 0, "start": 456145, "crunched": 0, "end": 456597, "filename": "/home/web_user/.terminfo/a/apple-videx2"}, {"audio": 0, "start": 456597, "crunched": 0, "end": 458111, "filename": "/home/web_user/.terminfo/a/att5425"}, {"audio": 0, "start": 458111, "crunched": 0, "end": 458364, "filename": "/home/web_user/.terminfo/a/abm80"}, {"audio": 0, "start": 458364, "crunched": 0, "end": 458626, "filename": "/home/web_user/.terminfo/a/apple80p"}, {"audio": 0, "start": 458626, "crunched": 0, "end": 459532, "filename": "/home/web_user/.terminfo/a/att5418"}, {"audio": 0, "start": 459532, "crunched": 0, "end": 459889, "filename": "/home/web_user/.terminfo/a/aj"}, {"audio": 0, "start": 459889, "crunched": 0, "end": 461279, "filename": "/home/web_user/.terminfo/a/att4415-w"}, {"audio": 0, "start": 461279, "crunched": 0, "end": 462232, "filename": "/home/web_user/.terminfo/a/adm5"}, {"audio": 0, "start": 462232, "crunched": 0, "end": 462705, "filename": "/home/web_user/.terminfo/a/annarbor4080"}, {"audio": 0, "start": 462705, "crunched": 0, "end": 464536, "filename": "/home/web_user/.terminfo/a/ansisysk"}, {"audio": 0, "start": 464536, "crunched": 0, "end": 465717, "filename": "/home/web_user/.terminfo/a/att510a"}, {"audio": 0, "start": 465717, "crunched": 0, "end": 466573, "filename": "/home/web_user/.terminfo/a/atari"}, {"audio": 0, "start": 466573, "crunched": 0, "end": 467818, "filename": "/home/web_user/.terminfo/a/avt-w-rv"}, {"audio": 0, "start": 467818, "crunched": 0, "end": 469618, "filename": "/home/web_user/.terminfo/a/att513"}, {"audio": 0, "start": 469618, "crunched": 0, "end": 471221, "filename": "/home/web_user/.terminfo/a/att610-103k-w"}, {"audio": 0, "start": 471221, "crunched": 0, "end": 472734, "filename": "/home/web_user/.terminfo/a/att615-w"}, {"audio": 0, "start": 472734, "crunched": 0, "end": 473205, "filename": "/home/web_user/.terminfo/a/addsviewpoint"}, {"audio": 0, "start": 473205, "crunched": 0, "end": 473901, "filename": "/home/web_user/.terminfo/a/ampex-219w"}, {"audio": 0, "start": 473901, "crunched": 0, "end": 475379, "filename": "/home/web_user/.terminfo/a/ansis-mono"}, {"audio": 0, "start": 475379, "crunched": 0, "end": 475728, "filename": "/home/web_user/.terminfo/a/ansi+csr"}, {"audio": 0, "start": 475728, "crunched": 0, "end": 476647, "filename": "/home/web_user/.terminfo/a/altos-2"}, {"audio": 0, "start": 476647, "crunched": 0, "end": 477128, "filename": "/home/web_user/.terminfo/a/ampex80"}, {"audio": 0, "start": 477128, "crunched": 0, "end": 478365, "filename": "/home/web_user/.terminfo/a/aaa-60"}, {"audio": 0, "start": 478365, "crunched": 0, "end": 479622, "filename": "/home/web_user/.terminfo/a/aaa-22"}, {"audio": 0, "start": 479622, "crunched": 0, "end": 480024, "filename": "/home/web_user/.terminfo/a/adm2"}, {"audio": 0, "start": 480024, "crunched": 0, "end": 481426, "filename": "/home/web_user/.terminfo/a/att5420-w-rv"}, {"audio": 0, "start": 481426, "crunched": 0, "end": 481857, "filename": "/home/web_user/.terminfo/a/apple2e-p"}, {"audio": 0, "start": 481857, "crunched": 0, "end": 483385, "filename": "/home/web_user/.terminfo/a/att620-w"}, {"audio": 0, "start": 483385, "crunched": 0, "end": 483551, "filename": "/home/web_user/.terminfo/a/ansi+idl1"}, {"audio": 0, "start": 483551, "crunched": 0, "end": 483652, "filename": "/home/web_user/.terminfo/a/ansi+cup"}, {"audio": 0, "start": 483652, "crunched": 0, "end": 484070, "filename": "/home/web_user/.terminfo/a/ansi-mini"}, {"audio": 0, "start": 484070, "crunched": 0, "end": 485466, "filename": "/home/web_user/.terminfo/a/att4415-rv"}, {"audio": 0, "start": 485466, "crunched": 0, "end": 486838, "filename": "/home/web_user/.terminfo/a/aaa-30-s-ctxt"}, {"audio": 0, "start": 486838, "crunched": 0, "end": 488054, "filename": "/home/web_user/.terminfo/a/apollo_color"}, {"audio": 0, "start": 488054, "crunched": 0, "end": 489280, "filename": "/home/web_user/.terminfo/a/avt-w"}, {"audio": 0, "start": 489280, "crunched": 0, "end": 490593, "filename": "/home/web_user/.terminfo/a/aaa-48-rv"}, {"audio": 0, "start": 490593, "crunched": 0, "end": 492393, "filename": "/home/web_user/.terminfo/a/att500"}, {"audio": 0, "start": 492393, "crunched": 0, "end": 493034, "filename": "/home/web_user/.terminfo/a/altoh19"}, {"audio": 0, "start": 493034, "crunched": 0, "end": 494357, "filename": "/home/web_user/.terminfo/a/aaa-30-rv"}, {"audio": 0, "start": 494357, "crunched": 0, "end": 495895, "filename": "/home/web_user/.terminfo/a/aixterm-m"}, {"audio": 0, "start": 495895, "crunched": 0, "end": 497397, "filename": "/home/web_user/.terminfo/a/ansis"}, {"audio": 0, "start": 497397, "crunched": 0, "end": 498350, "filename": "/home/web_user/.terminfo/a/altos-5"}, {"audio": 0, "start": 498350, "crunched": 0, "end": 498700, "filename": "/home/web_user/.terminfo/a/adm1a"}, {"audio": 0, "start": 498700, "crunched": 0, "end": 499170, "filename": "/home/web_user/.terminfo/a/adm31-old"}, {"audio": 0, "start": 499170, "crunched": 0, "end": 499601, "filename": "/home/web_user/.terminfo/a/apollo"}, {"audio": 0, "start": 499601, "crunched": 0, "end": 500045, "filename": "/home/web_user/.terminfo/a/adds980"}, {"audio": 0, "start": 500045, "crunched": 0, "end": 501474, "filename": "/home/web_user/.terminfo/a/aaa-60-dec-rv"}, {"audio": 0, "start": 501474, "crunched": 0, "end": 502485, "filename": "/home/web_user/.terminfo/a/att7300"}, {"audio": 0, "start": 502485, "crunched": 0, "end": 503241, "filename": "/home/web_user/.terminfo/a/ansi-generic"}, {"audio": 0, "start": 503241, "crunched": 0, "end": 504859, "filename": "/home/web_user/.terminfo/a/att620-103k-w"}, {"audio": 0, "start": 504859, "crunched": 0, "end": 506231, "filename": "/home/web_user/.terminfo/a/aaa-s-ctxt"}, {"audio": 0, "start": 506231, "crunched": 0, "end": 506729, "filename": "/home/web_user/.terminfo/a/act5"}, {"audio": 0, "start": 506729, "crunched": 0, "end": 507361, "filename": "/home/web_user/.terminfo/a/att5620-24"}, {"audio": 0, "start": 507361, "crunched": 0, "end": 508351, "filename": "/home/web_user/.terminfo/a/alt4"}, {"audio": 0, "start": 508351, "crunched": 0, "end": 508719, "filename": "/home/web_user/.terminfo/a/ansi+sgr"}, {"audio": 0, "start": 508719, "crunched": 0, "end": 509360, "filename": "/home/web_user/.terminfo/a/alto-h19"}, {"audio": 0, "start": 509360, "crunched": 0, "end": 510764, "filename": "/home/web_user/.terminfo/a/att5420-rv-nl"}, {"audio": 0, "start": 510764, "crunched": 0, "end": 511473, "filename": "/home/web_user/.terminfo/a/ampex-219"}, {"audio": 0, "start": 511473, "crunched": 0, "end": 512608, "filename": "/home/web_user/.terminfo/a/att4410v1-w"}, {"audio": 0, "start": 512608, "crunched": 0, "end": 513081, "filename": "/home/web_user/.terminfo/a/act4"}, {"audio": 0, "start": 513081, "crunched": 0, "end": 514540, "filename": "/home/web_user/.terminfo/a/ansiw"}, {"audio": 0, "start": 514540, "crunched": 0, "end": 515173, "filename": "/home/web_user/.terminfo/a/a210"}, {"audio": 0, "start": 515173, "crunched": 0, "end": 516557, "filename": "/home/web_user/.terminfo/a/att5420"}, {"audio": 0, "start": 516557, "crunched": 0, "end": 517016, "filename": "/home/web_user/.terminfo/a/adm42"}, {"audio": 0, "start": 517016, "crunched": 0, "end": 517648, "filename": "/home/web_user/.terminfo/a/att5620-34"}, {"audio": 0, "start": 517648, "crunched": 0, "end": 518638, "filename": "/home/web_user/.terminfo/a/altos-4"}, {"audio": 0, "start": 518638, "crunched": 0, "end": 520511, "filename": "/home/web_user/.terminfo/a/att730r"}, {"audio": 0, "start": 520511, "crunched": 0, "end": 521152, "filename": "/home/web_user/.terminfo/a/alto-heath"}, {"audio": 0, "start": 521152, "crunched": 0, "end": 521534, "filename": "/home/web_user/.terminfo/a/apple-soroc"}, {"audio": 0, "start": 521534, "crunched": 0, "end": 522944, "filename": "/home/web_user/.terminfo/a/att5420-w-rv-n"}, {"audio": 0, "start": 522944, "crunched": 0, "end": 523641, "filename": "/home/web_user/.terminfo/a/avatar"}, {"audio": 0, "start": 523641, "crunched": 0, "end": 524184, "filename": "/home/web_user/.terminfo/a/ansi77"}, {"audio": 0, "start": 524184, "crunched": 0, "end": 525580, "filename": "/home/web_user/.terminfo/a/att4415-w-nl"}, {"audio": 0, "start": 525580, "crunched": 0, "end": 527122, "filename": "/home/web_user/.terminfo/a/att4425-nl"}, {"audio": 0, "start": 527122, "crunched": 0, "end": 528075, "filename": "/home/web_user/.terminfo/a/alt3"}, {"audio": 0, "start": 528075, "crunched": 0, "end": 529445, "filename": "/home/web_user/.terminfo/a/ansi-mono"}, {"audio": 0, "start": 529445, "crunched": 0, "end": 530398, "filename": "/home/web_user/.terminfo/a/alt5"}, {"audio": 0, "start": 530398, "crunched": 0, "end": 531912, "filename": "/home/web_user/.terminfo/a/att4425"}, {"audio": 0, "start": 531912, "crunched": 0, "end": 532902, "filename": "/home/web_user/.terminfo/a/altos4"}, {"audio": 0, "start": 532902, "crunched": 0, "end": 534141, "filename": "/home/web_user/.terminfo/a/avt-rv-s"}, {"audio": 0, "start": 534141, "crunched": 0, "end": 534340, "filename": "/home/web_user/.terminfo/a/aepro"}, {"audio": 0, "start": 534340, "crunched": 0, "end": 535196, "filename": "/home/web_user/.terminfo/a/at"}, {"audio": 0, "start": 535196, "crunched": 0, "end": 536655, "filename": "/home/web_user/.terminfo/a/ansi80x25-raw"}, {"audio": 0, "start": 536655, "crunched": 0, "end": 537790, "filename": "/home/web_user/.terminfo/a/att5410v1-w"}, {"audio": 0, "start": 537790, "crunched": 0, "end": 538403, "filename": "/home/web_user/.terminfo/a/abm85h-old"}, {"audio": 0, "start": 538403, "crunched": 0, "end": 539692, "filename": "/home/web_user/.terminfo/a/ambas"}, {"audio": 0, "start": 539692, "crunched": 0, "end": 539895, "filename": "/home/web_user/.terminfo/a/apple-vm80"}, {"audio": 0, "start": 539895, "crunched": 0, "end": 540333, "filename": "/home/web_user/.terminfo/a/apple-uterm"}, {"audio": 0, "start": 540333, "crunched": 0, "end": 541668, "filename": "/home/web_user/.terminfo/a/aaa-rv-ctxt"}, {"audio": 0, "start": 541668, "crunched": 0, "end": 542890, "filename": "/home/web_user/.terminfo/a/adm36"}, {"audio": 0, "start": 542890, "crunched": 0, "end": 543327, "filename": "/home/web_user/.terminfo/a/adm1178"}, {"audio": 0, "start": 543327, "crunched": 0, "end": 544545, "filename": "/home/web_user/.terminfo/a/avt"}, {"audio": 0, "start": 544545, "crunched": 0, "end": 545834, "filename": "/home/web_user/.terminfo/a/ambassador"}, {"audio": 0, "start": 545834, "crunched": 0, "end": 546278, "filename": "/home/web_user/.terminfo/a/ampex175-b"}, {"audio": 0, "start": 546278, "crunched": 0, "end": 547991, "filename": "/home/web_user/.terminfo/a/ansi-color-3-emx"}, {"audio": 0, "start": 547991, "crunched": 0, "end": 549623, "filename": "/home/web_user/.terminfo/a/att700"}, {"audio": 0, "start": 549623, "crunched": 0, "end": 551147, "filename": "/home/web_user/.terminfo/a/att620"}, {"audio": 0, "start": 551147, "crunched": 0, "end": 551542, "filename": "/home/web_user/.terminfo/a/apple2e"}, {"audio": 0, "start": 551542, "crunched": 0, "end": 551749, "filename": "/home/web_user/.terminfo/a/apple-80"}, {"audio": 0, "start": 551749, "crunched": 0, "end": 553580, "filename": "/home/web_user/.terminfo/a/ansi.sysk"}, {"audio": 0, "start": 553580, "crunched": 0, "end": 554490, "filename": "/home/web_user/.terminfo/a/att4418-w"}, {"audio": 0, "start": 554490, "crunched": 0, "end": 556032, "filename": "/home/web_user/.terminfo/a/att5425-w"}, {"audio": 0, "start": 556032, "crunched": 0, "end": 557534, "filename": "/home/web_user/.terminfo/a/ansi80x25"}, {"audio": 0, "start": 557534, "crunched": 0, "end": 558036, "filename": "/home/web_user/.terminfo/a/adm22"}, {"audio": 0, "start": 558036, "crunched": 0, "end": 559107, "filename": "/home/web_user/.terminfo/a/aws"}, {"audio": 0, "start": 559107, "crunched": 0, "end": 560430, "filename": "/home/web_user/.terminfo/a/aaa-rv"}, {"audio": 0, "start": 560430, "crunched": 0, "end": 561687, "filename": "/home/web_user/.terminfo/a/aaa-20"}, {"audio": 0, "start": 561687, "crunched": 0, "end": 563161, "filename": "/home/web_user/.terminfo/a/arm100-am"}, {"audio": 0, "start": 563161, "crunched": 0, "end": 565026, "filename": "/home/web_user/.terminfo/a/att5310"}, {"audio": 0, "start": 565026, "crunched": 0, "end": 565450, "filename": "/home/web_user/.terminfo/a/apl"}, {"audio": 0, "start": 565450, "crunched": 0, "end": 565589, "filename": "/home/web_user/.terminfo/a/ansi+sgrso"}, {"audio": 0, "start": 565589, "crunched": 0, "end": 566033, "filename": "/home/web_user/.terminfo/a/a980"}, {"audio": 0, "start": 566033, "crunched": 0, "end": 567749, "filename": "/home/web_user/.terminfo/a/ansi-color-2-emx"}, {"audio": 0, "start": 567749, "crunched": 0, "end": 569614, "filename": "/home/web_user/.terminfo/a/att5320"}, {"audio": 0, "start": 569614, "crunched": 0, "end": 569991, "filename": "/home/web_user/.terminfo/a/ansi-mr"}, {"audio": 0, "start": 569991, "crunched": 0, "end": 570726, "filename": "/home/web_user/.terminfo/a/ansi43m"}, {"audio": 0, "start": 570726, "crunched": 0, "end": 571964, "filename": "/home/web_user/.terminfo/a/aaa+unk"}, {"audio": 0, "start": 571964, "crunched": 0, "end": 573445, "filename": "/home/web_user/.terminfo/a/ansi"}, {"audio": 0, "start": 573445, "crunched": 0, "end": 574309, "filename": "/home/web_user/.terminfo/a/alt7"}, {"audio": 0, "start": 574309, "crunched": 0, "end": 576192, "filename": "/home/web_user/.terminfo/a/att730r-24"}, {"audio": 0, "start": 576192, "crunched": 0, "end": 576665, "filename": "/home/web_user/.terminfo/a/aa4080"}, {"audio": 0, "start": 576665, "crunched": 0, "end": 577347, "filename": "/home/web_user/.terminfo/a/amiga"}, {"audio": 0, "start": 577347, "crunched": 0, "end": 578734, "filename": "/home/web_user/.terminfo/a/att610"}, {"audio": 0, "start": 578734, "crunched": 0, "end": 580236, "filename": "/home/web_user/.terminfo/a/ansil"}, {"audio": 0, "start": 580236, "crunched": 0, "end": 580561, "filename": "/home/web_user/.terminfo/a/addrinfo"}, {"audio": 0, "start": 580561, "crunched": 0, "end": 581874, "filename": "/home/web_user/.terminfo/a/att605-w"}, {"audio": 0, "start": 581874, "crunched": 0, "end": 582376, "filename": "/home/web_user/.terminfo/a/adm31"}, {"audio": 0, "start": 582376, "crunched": 0, "end": 583663, "filename": "/home/web_user/.terminfo/a/aaa-ctxt"}, {"audio": 0, "start": 583663, "crunched": 0, "end": 583866, "filename": "/home/web_user/.terminfo/a/ap-vm80"}, {"audio": 0, "start": 583866, "crunched": 0, "end": 584389, "filename": "/home/web_user/.terminfo/a/aaa+dec"}, {"audio": 0, "start": 584389, "crunched": 0, "end": 584891, "filename": "/home/web_user/.terminfo/a/ampex232"}, {"audio": 0, "start": 584891, "crunched": 0, "end": 585261, "filename": "/home/web_user/.terminfo/a/apple-videx3"}, {"audio": 0, "start": 585261, "crunched": 0, "end": 586651, "filename": "/home/web_user/.terminfo/a/att5420-w"}, {"audio": 0, "start": 586651, "crunched": 0, "end": 587347, "filename": "/home/web_user/.terminfo/a/amp219w"}, {"audio": 0, "start": 587347, "crunched": 0, "end": 588767, "filename": "/home/web_user/.terminfo/a/att6386"}, {"audio": 0, "start": 588767, "crunched": 0, "end": 589896, "filename": "/home/web_user/.terminfo/a/att4410v1"}, {"audio": 0, "start": 589896, "crunched": 0, "end": 590367, "filename": "/home/web_user/.terminfo/a/att4415+nl"}, {"audio": 0, "start": 590367, "crunched": 0, "end": 591863, "filename": "/home/web_user/.terminfo/a/ansi80x43"}, {"audio": 0, "start": 591863, "crunched": 0, "end": 593466, "filename": "/home/web_user/.terminfo/a/att615-103k-w"}, {"audio": 0, "start": 593466, "crunched": 0, "end": 593908, "filename": "/home/web_user/.terminfo/a/ansi-mtabs"}, {"audio": 0, "start": 593908, "crunched": 0, "end": 594563, "filename": "/home/web_user/.terminfo/a/amiga-h"}, {"audio": 0, "start": 594563, "crunched": 0, "end": 594967, "filename": "/home/web_user/.terminfo/a/aj510"}, {"audio": 0, "start": 594967, "crunched": 0, "end": 595273, "filename": "/home/web_user/.terminfo/a/ansi+idc"}, {"audio": 0, "start": 595273, "crunched": 0, "end": 595970, "filename": "/home/web_user/.terminfo/a/avatar1"}, {"audio": 0, "start": 595970, "crunched": 0, "end": 596683, "filename": "/home/web_user/.terminfo/k/kds7372-w"}, {"audio": 0, "start": 596683, "crunched": 0, "end": 597026, "filename": "/home/web_user/.terminfo/k/kermit"}, {"audio": 0, "start": 597026, "crunched": 0, "end": 598736, "filename": "/home/web_user/.terminfo/k/kon2"}, {"audio": 0, "start": 598736, "crunched": 0, "end": 598897, "filename": "/home/web_user/.terminfo/k/ktm"}, {"audio": 0, "start": 598897, "crunched": 0, "end": 599512, "filename": "/home/web_user/.terminfo/k/k45"}, {"audio": 0, "start": 599512, "crunched": 0, "end": 601246, "filename": "/home/web_user/.terminfo/k/kterm-co"}, {"audio": 0, "start": 601246, "crunched": 0, "end": 601831, "filename": "/home/web_user/.terminfo/k/klone+sgr-dumb"}, {"audio": 0, "start": 601831, "crunched": 0, "end": 603996, "filename": "/home/web_user/.terminfo/k/konsole-linux"}, {"audio": 0, "start": 603996, "crunched": 0, "end": 605528, "filename": "/home/web_user/.terminfo/k/kvt"}, {"audio": 0, "start": 605528, "crunched": 0, "end": 606395, "filename": "/home/web_user/.terminfo/k/klone+color"}, {"audio": 0, "start": 606395, "crunched": 0, "end": 608578, "filename": "/home/web_user/.terminfo/k/konsole-xf3x"}, {"audio": 0, "start": 608578, "crunched": 0, "end": 609623, "filename": "/home/web_user/.terminfo/k/klone+sgr8"}, {"audio": 0, "start": 609623, "crunched": 0, "end": 611367, "filename": "/home/web_user/.terminfo/k/kterm"}, {"audio": 0, "start": 611367, "crunched": 0, "end": 613536, "filename": "/home/web_user/.terminfo/k/konsole-vt420pc"}, {"audio": 0, "start": 613536, "crunched": 0, "end": 614251, "filename": "/home/web_user/.terminfo/k/kds6402"}, {"audio": 0, "start": 614251, "crunched": 0, "end": 614712, "filename": "/home/web_user/.terminfo/k/klone+koi8acs"}, {"audio": 0, "start": 614712, "crunched": 0, "end": 616422, "filename": "/home/web_user/.terminfo/k/kon"}, {"audio": 0, "start": 616422, "crunched": 0, "end": 618595, "filename": "/home/web_user/.terminfo/k/konsole-solaris"}, {"audio": 0, "start": 618595, "crunched": 0, "end": 620672, "filename": "/home/web_user/.terminfo/k/konsole-base"}, {"audio": 0, "start": 620672, "crunched": 0, "end": 622845, "filename": "/home/web_user/.terminfo/k/konsole-vt100"}, {"audio": 0, "start": 622845, "crunched": 0, "end": 626032, "filename": "/home/web_user/.terminfo/k/konsole-xf4x"}, {"audio": 0, "start": 626032, "crunched": 0, "end": 629493, "filename": "/home/web_user/.terminfo/k/konsole-16color"}, {"audio": 0, "start": 629493, "crunched": 0, "end": 630370, "filename": "/home/web_user/.terminfo/k/kt7ix"}, {"audio": 0, "start": 630370, "crunched": 0, "end": 633695, "filename": "/home/web_user/.terminfo/k/konsole-256color"}, {"audio": 0, "start": 633695, "crunched": 0, "end": 635429, "filename": "/home/web_user/.terminfo/k/kterm-color"}, {"audio": 0, "start": 635429, "crunched": 0, "end": 638752, "filename": "/home/web_user/.terminfo/k/konsole-direct"}, {"audio": 0, "start": 638752, "crunched": 0, "end": 639467, "filename": "/home/web_user/.terminfo/k/kds7372"}, {"audio": 0, "start": 639467, "crunched": 0, "end": 640494, "filename": "/home/web_user/.terminfo/k/klone+sgr"}, {"audio": 0, "start": 640494, "crunched": 0, "end": 640898, "filename": "/home/web_user/.terminfo/k/kaypro2"}, {"audio": 0, "start": 640898, "crunched": 0, "end": 644045, "filename": "/home/web_user/.terminfo/k/konsole"}, {"audio": 0, "start": 644045, "crunched": 0, "end": 646163, "filename": "/home/web_user/.terminfo/k/konsole+pcfkeys"}, {"audio": 0, "start": 646163, "crunched": 0, "end": 646798, "filename": "/home/web_user/.terminfo/k/kt7"}, {"audio": 0, "start": 646798, "crunched": 0, "end": 647175, "filename": "/home/web_user/.terminfo/k/kermit-am"}, {"audio": 0, "start": 647175, "crunched": 0, "end": 647612, "filename": "/home/web_user/.terminfo/k/klone+acs"}, {"audio": 0, "start": 647612, "crunched": 0, "end": 648016, "filename": "/home/web_user/.terminfo/k/kaypro"}, {"audio": 0, "start": 648016, "crunched": 0, "end": 649217, "filename": "/home/web_user/.terminfo/m/minitel-2"}, {"audio": 0, "start": 649217, "crunched": 0, "end": 650117, "filename": "/home/web_user/.terminfo/m/mgr-sun"}, {"audio": 0, "start": 650117, "crunched": 0, "end": 650610, "filename": "/home/web_user/.terminfo/m/mime"}, {"audio": 0, "start": 650610, "crunched": 0, "end": 652302, "filename": "/home/web_user/.terminfo/m/ms-vt-utf8"}, {"audio": 0, "start": 652302, "crunched": 0, "end": 652795, "filename": "/home/web_user/.terminfo/m/mimeii"}, {"audio": 0, "start": 652795, "crunched": 0, "end": 653287, "filename": "/home/web_user/.terminfo/m/mime2a-s"}, {"audio": 0, "start": 653287, "crunched": 0, "end": 653877, "filename": "/home/web_user/.terminfo/m/minix-old"}, {"audio": 0, "start": 653877, "crunched": 0, "end": 654431, "filename": "/home/web_user/.terminfo/m/msk227am"}, {"audio": 0, "start": 654431, "crunched": 0, "end": 655414, "filename": "/home/web_user/.terminfo/m/mlterm+pcfkeys"}, {"audio": 0, "start": 655414, "crunched": 0, "end": 656004, "filename": "/home/web_user/.terminfo/m/minix-old-am"}, {"audio": 0, "start": 656004, "crunched": 0, "end": 656480, "filename": "/home/web_user/.terminfo/m/mime-fb"}, {"audio": 0, "start": 656480, "crunched": 0, "end": 656985, "filename": "/home/web_user/.terminfo/m/mime2a"}, {"audio": 0, "start": 656985, "crunched": 0, "end": 657458, "filename": "/home/web_user/.terminfo/m/microterm"}, {"audio": 0, "start": 657458, "crunched": 0, "end": 658854, "filename": "/home/web_user/.terminfo/m/mvterm"}, {"audio": 0, "start": 658854, "crunched": 0, "end": 659522, "filename": "/home/web_user/.terminfo/m/mai"}, {"audio": 0, "start": 659522, "crunched": 0, "end": 661199, "filename": "/home/web_user/.terminfo/m/minitel1"}, {"audio": 0, "start": 661199, "crunched": 0, "end": 664471, "filename": "/home/web_user/.terminfo/m/mlterm-direct"}, {"audio": 0, "start": 664471, "crunched": 0, "end": 665002, "filename": "/home/web_user/.terminfo/m/mskermit227"}, {"audio": 0, "start": 665002, "crunched": 0, "end": 665484, "filename": "/home/web_user/.terminfo/m/masscomp2"}, {"audio": 0, "start": 665484, "crunched": 0, "end": 666143, "filename": "/home/web_user/.terminfo/m/mac-w"}, {"audio": 0, "start": 666143, "crunched": 0, "end": 667284, "filename": "/home/web_user/.terminfo/m/modgraph"}, {"audio": 0, "start": 667284, "crunched": 0, "end": 669261, "filename": "/home/web_user/.terminfo/m/minitel1b"}, {"audio": 0, "start": 669261, "crunched": 0, "end": 669890, "filename": "/home/web_user/.terminfo/m/macintosh"}, {"audio": 0, "start": 669890, "crunched": 0, "end": 670365, "filename": "/home/web_user/.terminfo/m/microbee"}, {"audio": 0, "start": 670365, "crunched": 0, "end": 671201, "filename": "/home/web_user/.terminfo/m/morphos"}, {"audio": 0, "start": 671201, "crunched": 0, "end": 671679, "filename": "/home/web_user/.terminfo/m/masscomp"}, {"audio": 0, "start": 671679, "crunched": 0, "end": 672555, "filename": "/home/web_user/.terminfo/m/minix-1.7"}, {"audio": 0, "start": 672555, "crunched": 0, "end": 673053, "filename": "/home/web_user/.terminfo/m/microterm5"}, {"audio": 0, "start": 673053, "crunched": 0, "end": 673446, "filename": "/home/web_user/.terminfo/m/mterm"}, {"audio": 0, "start": 673446, "crunched": 0, "end": 673928, "filename": "/home/web_user/.terminfo/m/masscomp1"}, {"audio": 0, "start": 673928, "crunched": 0, "end": 676433, "filename": "/home/web_user/.terminfo/m/mlterm2"}, {"audio": 0, "start": 676433, "crunched": 0, "end": 677194, "filename": "/home/web_user/.terminfo/m/mterm-ansi"}, {"audio": 0, "start": 677194, "crunched": 0, "end": 677687, "filename": "/home/web_user/.terminfo/m/mimei"}, {"audio": 0, "start": 677687, "crunched": 0, "end": 678047, "filename": "/home/web_user/.terminfo/m/mime314"}, {"audio": 0, "start": 678047, "crunched": 0, "end": 679880, "filename": "/home/web_user/.terminfo/m/minitel12-80"}, {"audio": 0, "start": 679880, "crunched": 0, "end": 680373, "filename": "/home/web_user/.terminfo/m/mime2"}, {"audio": 0, "start": 680373, "crunched": 0, "end": 682290, "filename": "/home/web_user/.terminfo/m/minitel1b-nb"}, {"audio": 0, "start": 682290, "crunched": 0, "end": 683750, "filename": "/home/web_user/.terminfo/m/ms-vt100-color"}, {"audio": 0, "start": 683750, "crunched": 0, "end": 684830, "filename": "/home/web_user/.terminfo/m/memhp"}, {"audio": 0, "start": 684830, "crunched": 0, "end": 688160, "filename": "/home/web_user/.terminfo/m/mlterm-256color"}, {"audio": 0, "start": 688160, "crunched": 0, "end": 689301, "filename": "/home/web_user/.terminfo/m/mod24"}, {"audio": 0, "start": 689301, "crunched": 0, "end": 689904, "filename": "/home/web_user/.terminfo/m/mskermit22714"}, {"audio": 0, "start": 689904, "crunched": 0, "end": 693048, "filename": "/home/web_user/.terminfo/m/mrxvt"}, {"audio": 0, "start": 693048, "crunched": 0, "end": 694602, "filename": "/home/web_user/.terminfo/m/minix"}, {"audio": 0, "start": 694602, "crunched": 0, "end": 694682, "filename": "/home/web_user/.terminfo/m/megatek"}, {"audio": 0, "start": 694682, "crunched": 0, "end": 695818, "filename": "/home/web_user/.terminfo/m/mod"}, {"audio": 0, "start": 695818, "crunched": 0, "end": 696874, "filename": "/home/web_user/.terminfo/m/mach-gnu"}, {"audio": 0, "start": 696874, "crunched": 0, "end": 697379, "filename": "/home/web_user/.terminfo/m/mime2a-v"}, {"audio": 0, "start": 697379, "crunched": 0, "end": 697872, "filename": "/home/web_user/.terminfo/m/mime1"}, {"audio": 0, "start": 697872, "crunched": 0, "end": 699008, "filename": "/home/web_user/.terminfo/m/modgraph48"}, {"audio": 0, "start": 699008, "crunched": 0, "end": 699401, "filename": "/home/web_user/.terminfo/m/mouse-sun"}, {"audio": 0, "start": 699401, "crunched": 0, "end": 699991, "filename": "/home/web_user/.terminfo/m/minix-1.5"}, {"audio": 0, "start": 699991, "crunched": 0, "end": 701086, "filename": "/home/web_user/.terminfo/m/mach-color"}, {"audio": 0, "start": 701086, "crunched": 0, "end": 701561, "filename": "/home/web_user/.terminfo/m/microb"}, {"audio": 0, "start": 701561, "crunched": 0, "end": 703253, "filename": "/home/web_user/.terminfo/m/ms-vt100+"}, {"audio": 0, "start": 703253, "crunched": 0, "end": 706363, "filename": "/home/web_user/.terminfo/m/mlterm3"}, {"audio": 0, "start": 706363, "crunched": 0, "end": 707681, "filename": "/home/web_user/.terminfo/m/mach-gnu-color"}, {"audio": 0, "start": 707681, "crunched": 0, "end": 708882, "filename": "/home/web_user/.terminfo/m/m2-nam"}, {"audio": 0, "start": 708882, "crunched": 0, "end": 709499, "filename": "/home/web_user/.terminfo/m/mach"}, {"audio": 0, "start": 709499, "crunched": 0, "end": 710333, "filename": "/home/web_user/.terminfo/m/mgr-linux"}, {"audio": 0, "start": 710333, "crunched": 0, "end": 710755, "filename": "/home/web_user/.terminfo/m/mime340"}, {"audio": 0, "start": 710755, "crunched": 0, "end": 711414, "filename": "/home/web_user/.terminfo/m/macterminal-w"}, {"audio": 0, "start": 711414, "crunched": 0, "end": 713344, "filename": "/home/web_user/.terminfo/m/minitel2-80"}, {"audio": 0, "start": 713344, "crunched": 0, "end": 714482, "filename": "/home/web_user/.terminfo/m/mgterm"}, {"audio": 0, "start": 714482, "crunched": 0, "end": 715111, "filename": "/home/web_user/.terminfo/m/mac"}, {"audio": 0, "start": 715111, "crunched": 0, "end": 718501, "filename": "/home/web_user/.terminfo/m/mrxvt-256color"}, {"audio": 0, "start": 718501, "crunched": 0, "end": 720515, "filename": "/home/web_user/.terminfo/m/mgt"}, {"audio": 0, "start": 720515, "crunched": 0, "end": 721716, "filename": "/home/web_user/.terminfo/m/minitel-2-nam"}, {"audio": 0, "start": 721716, "crunched": 0, "end": 722319, "filename": "/home/web_user/.terminfo/m/mgr"}, {"audio": 0, "start": 722319, "crunched": 0, "end": 723206, "filename": "/home/web_user/.terminfo/m/mt4520-rv"}, {"audio": 0, "start": 723206, "crunched": 0, "end": 724407, "filename": "/home/web_user/.terminfo/m/minitel"}, {"audio": 0, "start": 724407, "crunched": 0, "end": 725249, "filename": "/home/web_user/.terminfo/m/mt70"}, {"audio": 0, "start": 725249, "crunched": 0, "end": 726456, "filename": "/home/web_user/.terminfo/m/ms-vt100"}, {"audio": 0, "start": 726456, "crunched": 0, "end": 729566, "filename": "/home/web_user/.terminfo/m/mlterm"}, {"audio": 0, "start": 729566, "crunched": 0, "end": 730218, "filename": "/home/web_user/.terminfo/m/mach-bold"}, {"audio": 0, "start": 730218, "crunched": 0, "end": 731207, "filename": "/home/web_user/.terminfo/m/mime-3ax"}, {"audio": 0, "start": 731207, "crunched": 0, "end": 731805, "filename": "/home/web_user/.terminfo/m/modgraph2"}, {"audio": 0, "start": 731805, "crunched": 0, "end": 733035, "filename": "/home/web_user/.terminfo/m/minix-3.0"}, {"audio": 0, "start": 733035, "crunched": 0, "end": 733457, "filename": "/home/web_user/.terminfo/m/mm340"}, {"audio": 0, "start": 733457, "crunched": 0, "end": 734299, "filename": "/home/web_user/.terminfo/m/mt-70"}, {"audio": 0, "start": 734299, "crunched": 0, "end": 734902, "filename": "/home/web_user/.terminfo/m/msk22714"}, {"audio": 0, "start": 734902, "crunched": 0, "end": 735847, "filename": "/home/web_user/.terminfo/m/mime3a"}, {"audio": 0, "start": 735847, "crunched": 0, "end": 736355, "filename": "/home/web_user/.terminfo/m/mono-emx"}, {"audio": 0, "start": 736355, "crunched": 0, "end": 736715, "filename": "/home/web_user/.terminfo/m/mm314"}, {"audio": 0, "start": 736715, "crunched": 0, "end": 737191, "filename": "/home/web_user/.terminfo/m/mdl110"}, {"audio": 0, "start": 737191, "crunched": 0, "end": 737745, "filename": "/home/web_user/.terminfo/m/mskermit227am"}, {"audio": 0, "start": 737745, "crunched": 0, "end": 738276, "filename": "/home/web_user/.terminfo/m/msk227"}, {"audio": 0, "start": 738276, "crunched": 0, "end": 740205, "filename": "/home/web_user/.terminfo/m/minitel1b-80"}, {"audio": 0, "start": 740205, "crunched": 0, "end": 740681, "filename": "/home/web_user/.terminfo/m/mime-hb"}, {"audio": 0, "start": 740681, "crunched": 0, "end": 741670, "filename": "/home/web_user/.terminfo/m/mime3ax"}, {"audio": 0, "start": 741670, "crunched": 0, "end": 743295, "filename": "/home/web_user/.terminfo/m/minitel1-nb"}, {"audio": 0, "start": 743295, "crunched": 0, "end": 744712, "filename": "/home/web_user/.terminfo/N/NCRVT100WPP"}, {"audio": 0, "start": 744712, "crunched": 0, "end": 746540, "filename": "/home/web_user/.terminfo/N/NCR260VT300WPP"}, {"audio": 0, "start": 746540, "crunched": 0, "end": 747835, "filename": "/home/web_user/.terminfo/L/LFT-PC850"}, {"audio": 0, "start": 747835, "crunched": 0, "end": 749703, "filename": "/home/web_user/.terminfo/7/730MTG-24"}, {"audio": 0, "start": 749703, "crunched": 0, "end": 751576, "filename": "/home/web_user/.terminfo/7/730MTGr"}, {"audio": 0, "start": 751576, "crunched": 0, "end": 753459, "filename": "/home/web_user/.terminfo/7/730MTGr-24"}, {"audio": 0, "start": 753459, "crunched": 0, "end": 755327, "filename": "/home/web_user/.terminfo/7/730MTG-41"}, {"audio": 0, "start": 755327, "crunched": 0, "end": 757210, "filename": "/home/web_user/.terminfo/7/730MTG-41r"}, {"audio": 0, "start": 757210, "crunched": 0, "end": 758450, "filename": "/home/web_user/.terminfo/p/pcvt25"}, {"audio": 0, "start": 758450, "crunched": 0, "end": 759116, "filename": "/home/web_user/.terminfo/p/prism12-m"}, {"audio": 0, "start": 759116, "crunched": 0, "end": 759625, "filename": "/home/web_user/.terminfo/p/psterm-fast"}, {"audio": 0, "start": 759625, "crunched": 0, "end": 760368, "filename": "/home/web_user/.terminfo/p/prism4"}, {"audio": 0, "start": 760368, "crunched": 0, "end": 760930, "filename": "/home/web_user/.terminfo/p/pccon+sgr+acs"}, {"audio": 0, "start": 760930, "crunched": 0, "end": 761451, "filename": "/home/web_user/.terminfo/p/psterm-basic"}, {"audio": 0, "start": 761451, "crunched": 0, "end": 762655, "filename": "/home/web_user/.terminfo/p/pcansi-25"}, {"audio": 0, "start": 762655, "crunched": 0, "end": 763270, "filename": "/home/web_user/.terminfo/p/pt200"}, {"audio": 0, "start": 763270, "crunched": 0, "end": 763726, "filename": "/home/web_user/.terminfo/p/pc-coherent"}, {"audio": 0, "start": 763726, "crunched": 0, "end": 764308, "filename": "/home/web_user/.terminfo/p/p8"}, {"audio": 0, "start": 764308, "crunched": 0, "end": 764767, "filename": "/home/web_user/.terminfo/p/pe6312"}, {"audio": 0, "start": 764767, "crunched": 0, "end": 765903, "filename": "/home/web_user/.terminfo/p/p9-w"}, {"audio": 0, "start": 765903, "crunched": 0, "end": 767107, "filename": "/home/web_user/.terminfo/p/pcansi25"}, {"audio": 0, "start": 767107, "crunched": 0, "end": 767850, "filename": "/home/web_user/.terminfo/p/p5"}, {"audio": 0, "start": 767850, "crunched": 0, "end": 769104, "filename": "/home/web_user/.terminfo/p/pcvt35w"}, {"audio": 0, "start": 769104, "crunched": 0, "end": 769756, "filename": "/home/web_user/.terminfo/p/p9-8"}, {"audio": 0, "start": 769756, "crunched": 0, "end": 770770, "filename": "/home/web_user/.terminfo/p/pcplot"}, {"audio": 0, "start": 770770, "crunched": 0, "end": 770974, "filename": "/home/web_user/.terminfo/p/pcix"}, {"audio": 0, "start": 770974, "crunched": 0, "end": 772214, "filename": "/home/web_user/.terminfo/p/pcvt40"}, {"audio": 0, "start": 772214, "crunched": 0, "end": 772842, "filename": "/home/web_user/.terminfo/p/putty+fnkeys+vt400"}, {"audio": 0, "start": 772842, "crunched": 0, "end": 774785, "filename": "/home/web_user/.terminfo/p/putty-m2"}, {"audio": 0, "start": 774785, "crunched": 0, "end": 775206, "filename": "/home/web_user/.terminfo/p/pe550"}, {"audio": 0, "start": 775206, "crunched": 0, "end": 776531, "filename": "/home/web_user/.terminfo/p/pc3-bold"}, {"audio": 0, "start": 776531, "crunched": 0, "end": 776987, "filename": "/home/web_user/.terminfo/p/pcz19"}, {"audio": 0, "start": 776987, "crunched": 0, "end": 777653, "filename": "/home/web_user/.terminfo/p/prism14-m"}, {"audio": 0, "start": 777653, "crunched": 0, "end": 778319, "filename": "/home/web_user/.terminfo/p/p12-m"}, {"audio": 0, "start": 778319, "crunched": 0, "end": 778913, "filename": "/home/web_user/.terminfo/p/pt250w"}, {"audio": 0, "start": 778913, "crunched": 0, "end": 779527, "filename": "/home/web_user/.terminfo/p/prism8-w"}, {"audio": 0, "start": 779527, "crunched": 0, "end": 780231, "filename": "/home/web_user/.terminfo/p/pccon+keys"}, {"audio": 0, "start": 780231, "crunched": 0, "end": 780968, "filename": "/home/web_user/.terminfo/p/pcansi-33-m"}, {"audio": 0, "start": 780968, "crunched": 0, "end": 782222, "filename": "/home/web_user/.terminfo/p/pcvt25w"}, {"audio": 0, "start": 782222, "crunched": 0, "end": 782853, "filename": "/home/web_user/.terminfo/p/pt200w"}, {"audio": 0, "start": 782853, "crunched": 0, "end": 783469, "filename": "/home/web_user/.terminfo/p/putty+fnkeys"}, {"audio": 0, "start": 783469, "crunched": 0, "end": 784092, "filename": "/home/web_user/.terminfo/p/putty+fnkeys+linux"}, {"audio": 0, "start": 784092, "crunched": 0, "end": 784744, "filename": "/home/web_user/.terminfo/p/prism9-8"}, {"audio": 0, "start": 784744, "crunched": 0, "end": 785485, "filename": "/home/web_user/.terminfo/p/pcansi-mono"}, {"audio": 0, "start": 785485, "crunched": 0, "end": 786041, "filename": "/home/web_user/.terminfo/p/pc6300plus"}, {"audio": 0, "start": 786041, "crunched": 0, "end": 788577, "filename": "/home/web_user/.terminfo/p/putty-sco"}, {"audio": 0, "start": 788577, "crunched": 0, "end": 789949, "filename": "/home/web_user/.terminfo/p/pccon0"}, {"audio": 0, "start": 789949, "crunched": 0, "end": 790643, "filename": "/home/web_user/.terminfo/p/prism12-m-w"}, {"audio": 0, "start": 790643, "crunched": 0, "end": 791955, "filename": "/home/web_user/.terminfo/p/pc-minix"}, {"audio": 0, "start": 791955, "crunched": 0, "end": 792317, "filename": "/home/web_user/.terminfo/p/pckermit12"}, {"audio": 0, "start": 792317, "crunched": 0, "end": 793453, "filename": "/home/web_user/.terminfo/p/prism9-w"}, {"audio": 0, "start": 793453, "crunched": 0, "end": 793943, "filename": "/home/web_user/.terminfo/p/pccon+sgr+acs0"}, {"audio": 0, "start": 793943, "crunched": 0, "end": 794637, "filename": "/home/web_user/.terminfo/p/prism9-8-w"}, {"audio": 0, "start": 794637, "crunched": 0, "end": 796462, "filename": "/home/web_user/.terminfo/p/putty-m1b"}, {"audio": 0, "start": 796462, "crunched": 0, "end": 797607, "filename": "/home/web_user/.terminfo/p/prism9"}, {"audio": 0, "start": 797607, "crunched": 0, "end": 798752, "filename": "/home/web_user/.terminfo/p/p9"}, {"audio": 0, "start": 798752, "crunched": 0, "end": 799304, "filename": "/home/web_user/.terminfo/p/prism2"}, {"audio": 0, "start": 799304, "crunched": 0, "end": 800058, "filename": "/home/web_user/.terminfo/p/prism8gl"}, {"audio": 0, "start": 800058, "crunched": 0, "end": 801344, "filename": "/home/web_user/.terminfo/p/pc3"}, {"audio": 0, "start": 801344, "crunched": 0, "end": 802493, "filename": "/home/web_user/.terminfo/p/p12"}, {"audio": 0, "start": 802493, "crunched": 0, "end": 803691, "filename": "/home/web_user/.terminfo/p/pcansi"}, {"audio": 0, "start": 803691, "crunched": 0, "end": 804931, "filename": "/home/web_user/.terminfo/p/pcvt28"}, {"audio": 0, "start": 804931, "crunched": 0, "end": 806171, "filename": "/home/web_user/.terminfo/p/pcvt50"}, {"audio": 0, "start": 806171, "crunched": 0, "end": 806882, "filename": "/home/web_user/.terminfo/p/pcmw"}, {"audio": 0, "start": 806882, "crunched": 0, "end": 807218, "filename": "/home/web_user/.terminfo/p/pt210"}, {"audio": 0, "start": 807218, "crunched": 0, "end": 807822, "filename": "/home/web_user/.terminfo/p/putty+fnkeys+vt100"}, {"audio": 0, "start": 807822, "crunched": 0, "end": 808695, "filename": "/home/web_user/.terminfo/p/pccon+colors"}, {"audio": 0, "start": 808695, "crunched": 0, "end": 810578, "filename": "/home/web_user/.terminfo/p/putty-m1"}, {"audio": 0, "start": 810578, "crunched": 0, "end": 810940, "filename": "/home/web_user/.terminfo/p/pckermit"}, {"audio": 0, "start": 810940, "crunched": 0, "end": 811734, "filename": "/home/web_user/.terminfo/p/putty+fnkeys+sco"}, {"audio": 0, "start": 811734, "crunched": 0, "end": 812938, "filename": "/home/web_user/.terminfo/p/pcansi-33"}, {"audio": 0, "start": 812938, "crunched": 0, "end": 813520, "filename": "/home/web_user/.terminfo/p/prism8"}, {"audio": 0, "start": 813520, "crunched": 0, "end": 814004, "filename": "/home/web_user/.terminfo/p/pe7000m"}, {"audio": 0, "start": 814004, "crunched": 0, "end": 815571, "filename": "/home/web_user/.terminfo/p/pcvt25-color"}, {"audio": 0, "start": 815571, "crunched": 0, "end": 817095, "filename": "/home/web_user/.terminfo/p/pc3r-m"}, {"audio": 0, "start": 817095, "crunched": 0, "end": 817721, "filename": "/home/web_user/.terminfo/p/putty+fnkeys+esc"}, {"audio": 0, "start": 817721, "crunched": 0, "end": 818274, "filename": "/home/web_user/.terminfo/p/prism7"}, {"audio": 0, "start": 818274, "crunched": 0, "end": 819011, "filename": "/home/web_user/.terminfo/p/pcansi25m"}, {"audio": 0, "start": 819011, "crunched": 0, "end": 819526, "filename": "/home/web_user/.terminfo/p/psterm-90x28"}, {"audio": 0, "start": 819526, "crunched": 0, "end": 821996, "filename": "/home/web_user/.terminfo/p/putty-noapp"}, {"audio": 0, "start": 821996, "crunched": 0, "end": 823113, "filename": "/home/web_user/.terminfo/p/pt505"}, {"audio": 0, "start": 823113, "crunched": 0, "end": 823779, "filename": "/home/web_user/.terminfo/p/p14-m"}, {"audio": 0, "start": 823779, "crunched": 0, "end": 824394, "filename": "/home/web_user/.terminfo/p/pt100"}, {"audio": 0, "start": 824394, "crunched": 0, "end": 824762, "filename": "/home/web_user/.terminfo/p/pmconsole"}, {"audio": 0, "start": 824762, "crunched": 0, "end": 825902, "filename": "/home/web_user/.terminfo/p/p12-w"}, {"audio": 0, "start": 825902, "crunched": 0, "end": 826388, "filename": "/home/web_user/.terminfo/p/pcconsole"}, {"audio": 0, "start": 826388, "crunched": 0, "end": 827592, "filename": "/home/web_user/.terminfo/p/pcansi33"}, {"audio": 0, "start": 827592, "crunched": 0, "end": 828004, "filename": "/home/web_user/.terminfo/p/pc-venix"}, {"audio": 0, "start": 828004, "crunched": 0, "end": 828449, "filename": "/home/web_user/.terminfo/p/pe1100"}, {"audio": 0, "start": 828449, "crunched": 0, "end": 829143, "filename": "/home/web_user/.terminfo/p/p9-8-w"}, {"audio": 0, "start": 829143, "crunched": 0, "end": 829597, "filename": "/home/web_user/.terminfo/p/pilot"}, {"audio": 0, "start": 829597, "crunched": 0, "end": 830338, "filename": "/home/web_user/.terminfo/p/pcansi-m"}, {"audio": 0, "start": 830338, "crunched": 0, "end": 831578, "filename": "/home/web_user/.terminfo/p/pcvt35"}, {"audio": 0, "start": 831578, "crunched": 0, "end": 832209, "filename": "/home/web_user/.terminfo/p/pt100w"}, {"audio": 0, "start": 832209, "crunched": 0, "end": 832577, "filename": "/home/web_user/.terminfo/p/pmcons"}, {"audio": 0, "start": 832577, "crunched": 0, "end": 833800, "filename": "/home/web_user/.terminfo/p/pcvtXX"}, {"audio": 0, "start": 833800, "crunched": 0, "end": 834414, "filename": "/home/web_user/.terminfo/p/p8-w"}, {"audio": 0, "start": 834414, "crunched": 0, "end": 836854, "filename": "/home/web_user/.terminfo/p/putty-vt100"}, {"audio": 0, "start": 836854, "crunched": 0, "end": 838003, "filename": "/home/web_user/.terminfo/p/p14"}, {"audio": 0, "start": 838003, "crunched": 0, "end": 839513, "filename": "/home/web_user/.terminfo/p/pc3r"}, {"audio": 0, "start": 839513, "crunched": 0, "end": 839867, "filename": "/home/web_user/.terminfo/p/printer"}, {"audio": 0, "start": 839867, "crunched": 0, "end": 841121, "filename": "/home/web_user/.terminfo/p/pcvt40w"}, {"audio": 0, "start": 841121, "crunched": 0, "end": 841875, "filename": "/home/web_user/.terminfo/p/p8gl"}, {"audio": 0, "start": 841875, "crunched": 0, "end": 842390, "filename": "/home/web_user/.terminfo/p/psterm-96x48"}, {"audio": 0, "start": 842390, "crunched": 0, "end": 843084, "filename": "/home/web_user/.terminfo/p/p14-m-w"}, {"audio": 0, "start": 843084, "crunched": 0, "end": 843821, "filename": "/home/web_user/.terminfo/p/pcansi33m"}, {"audio": 0, "start": 843821, "crunched": 0, "end": 844323, "filename": "/home/web_user/.terminfo/p/pe7000c"}, {"audio": 0, "start": 844323, "crunched": 0, "end": 844760, "filename": "/home/web_user/.terminfo/p/pty"}, {"audio": 0, "start": 844760, "crunched": 0, "end": 845497, "filename": "/home/web_user/.terminfo/p/pcansi-25-m"}, {"audio": 0, "start": 845497, "crunched": 0, "end": 846716, "filename": "/home/web_user/.terminfo/p/pccon-m"}, {"audio": 0, "start": 846716, "crunched": 0, "end": 847175, "filename": "/home/web_user/.terminfo/p/pe1251"}, {"audio": 0, "start": 847175, "crunched": 0, "end": 848315, "filename": "/home/web_user/.terminfo/p/p14-w"}, {"audio": 0, "start": 848315, "crunched": 0, "end": 849516, "filename": "/home/web_user/.terminfo/p/pccon0-m"}, {"audio": 0, "start": 849516, "crunched": 0, "end": 850756, "filename": "/home/web_user/.terminfo/p/pcvt43"}, {"audio": 0, "start": 850756, "crunched": 0, "end": 851232, "filename": "/home/web_user/.terminfo/p/psx_ansi"}, {"audio": 0, "start": 851232, "crunched": 0, "end": 852101, "filename": "/home/web_user/.terminfo/p/pccon+base"}, {"audio": 0, "start": 852101, "crunched": 0, "end": 852683, "filename": "/home/web_user/.terminfo/p/pt250"}, {"audio": 0, "start": 852683, "crunched": 0, "end": 853173, "filename": "/home/web_user/.terminfo/p/pckermit120"}, {"audio": 0, "start": 853173, "crunched": 0, "end": 854377, "filename": "/home/web_user/.terminfo/p/pcansi-43"}, {"audio": 0, "start": 854377, "crunched": 0, "end": 856837, "filename": "/home/web_user/.terminfo/p/putty"}, {"audio": 0, "start": 856837, "crunched": 0, "end": 857459, "filename": "/home/web_user/.terminfo/p/putty+fnkeys+xterm"}, {"audio": 0, "start": 857459, "crunched": 0, "end": 857974, "filename": "/home/web_user/.terminfo/p/psterm-80x24"}, {"audio": 0, "start": 857974, "crunched": 0, "end": 858460, "filename": "/home/web_user/.terminfo/p/pccons"}, {"audio": 0, "start": 858460, "crunched": 0, "end": 859013, "filename": "/home/web_user/.terminfo/p/p7"}, {"audio": 0, "start": 859013, "crunched": 0, "end": 860267, "filename": "/home/web_user/.terminfo/p/pcvt50w"}, {"audio": 0, "start": 860267, "crunched": 0, "end": 860961, "filename": "/home/web_user/.terminfo/p/prism14-m-w"}, {"audio": 0, "start": 860961, "crunched": 0, "end": 861482, "filename": "/home/web_user/.terminfo/p/psterm"}, {"audio": 0, "start": 861482, "crunched": 0, "end": 862446, "filename": "/home/web_user/.terminfo/p/ps300"}, {"audio": 0, "start": 862446, "crunched": 0, "end": 863700, "filename": "/home/web_user/.terminfo/p/pcvt28w"}, {"audio": 0, "start": 863700, "crunched": 0, "end": 864904, "filename": "/home/web_user/.terminfo/p/pcansi43"}, {"audio": 0, "start": 864904, "crunched": 0, "end": 865363, "filename": "/home/web_user/.terminfo/p/pe6300"}, {"audio": 0, "start": 865363, "crunched": 0, "end": 865906, "filename": "/home/web_user/.terminfo/p/pro350"}, {"audio": 0, "start": 865906, "crunched": 0, "end": 866641, "filename": "/home/web_user/.terminfo/p/pcansi-43-m"}, {"audio": 0, "start": 866641, "crunched": 0, "end": 867187, "filename": "/home/web_user/.terminfo/p/pe1200"}, {"audio": 0, "start": 867187, "crunched": 0, "end": 867881, "filename": "/home/web_user/.terminfo/p/p12-m-w"}, {"audio": 0, "start": 867881, "crunched": 0, "end": 868624, "filename": "/home/web_user/.terminfo/p/p4"}, {"audio": 0, "start": 868624, "crunched": 0, "end": 869235, "filename": "/home/web_user/.terminfo/p/p19"}, {"audio": 0, "start": 869235, "crunched": 0, "end": 870346, "filename": "/home/web_user/.terminfo/p/pt505-22"}, {"audio": 0, "start": 870346, "crunched": 0, "end": 871495, "filename": "/home/web_user/.terminfo/p/prism12"}, {"audio": 0, "start": 871495, "crunched": 0, "end": 872576, "filename": "/home/web_user/.terminfo/p/pt505-24"}, {"audio": 0, "start": 872576, "crunched": 0, "end": 873716, "filename": "/home/web_user/.terminfo/p/prism14-w"}, {"audio": 0, "start": 873716, "crunched": 0, "end": 874856, "filename": "/home/web_user/.terminfo/p/prism12-w"}, {"audio": 0, "start": 874856, "crunched": 0, "end": 877508, "filename": "/home/web_user/.terminfo/p/putty-256color"}, {"audio": 0, "start": 877508, "crunched": 0, "end": 878900, "filename": "/home/web_user/.terminfo/p/pccon"}, {"audio": 0, "start": 878900, "crunched": 0, "end": 879643, "filename": "/home/web_user/.terminfo/p/prism5"}, {"audio": 0, "start": 879643, "crunched": 0, "end": 880897, "filename": "/home/web_user/.terminfo/p/pcvt43w"}, {"audio": 0, "start": 880897, "crunched": 0, "end": 881908, "filename": "/home/web_user/.terminfo/p/pc7300"}, {"audio": 0, "start": 881908, "crunched": 0, "end": 883057, "filename": "/home/web_user/.terminfo/p/prism14"}, {"audio": 0, "start": 883057, "crunched": 0, "end": 883478, "filename": "/home/web_user/.terminfo/p/pe6100"}, {"audio": 0, "start": 883478, "crunched": 0, "end": 883665, "filename": "/home/web_user/.terminfo/M/MtxOrb"}, {"audio": 0, "start": 883665, "crunched": 0, "end": 883858, "filename": "/home/web_user/.terminfo/M/MtxOrb204"}, {"audio": 0, "start": 883858, "crunched": 0, "end": 884051, "filename": "/home/web_user/.terminfo/M/MtxOrb162"}, {"audio": 0, "start": 884051, "crunched": 0, "end": 884407, "filename": "/home/web_user/.terminfo/x/x1720"}, {"audio": 0, "start": 884407, "crunched": 0, "end": 885805, "filename": "/home/web_user/.terminfo/x/xterm+pce2"}, {"audio": 0, "start": 885805, "crunched": 0, "end": 889416, "filename": "/home/web_user/.terminfo/x/xterm-new"}, {"audio": 0, "start": 889416, "crunched": 0, "end": 889506, "filename": "/home/web_user/.terminfo/x/xnuppc+160x64"}, {"audio": 0, "start": 889506, "crunched": 0, "end": 890705, "filename": "/home/web_user/.terminfo/x/xnuppc-100x37"}, {"audio": 0, "start": 890705, "crunched": 0, "end": 892245, "filename": "/home/web_user/.terminfo/x/xterm+sm+1005"}, {"audio": 0, "start": 892245, "crunched": 0, "end": 892649, "filename": "/home/web_user/.terminfo/x/xterm+pc+edit"}, {"audio": 0, "start": 892649, "crunched": 0, "end": 893004, "filename": "/home/web_user/.terminfo/x/xerox820"}, {"audio": 0, "start": 893004, "crunched": 0, "end": 893974, "filename": "/home/web_user/.terminfo/x/xnuppc-100x37-m"}, {"audio": 0, "start": 893974, "crunched": 0, "end": 896248, "filename": "/home/web_user/.terminfo/x/xterm-xfree86"}, {"audio": 0, "start": 896248, "crunched": 0, "end": 896336, "filename": "/home/web_user/.terminfo/x/xnuppc+128x48"}, {"audio": 0, "start": 896336, "crunched": 0, "end": 897306, "filename": "/home/web_user/.terminfo/x/xnuppc-128x40-m"}, {"audio": 0, "start": 897306, "crunched": 0, "end": 899695, "filename": "/home/web_user/.terminfo/x/xterm-vt220"}, {"audio": 0, "start": 899695, "crunched": 0, "end": 901220, "filename": "/home/web_user/.terminfo/x/xterm-24"}, {"audio": 0, "start": 901220, "crunched": 0, "end": 901634, "filename": "/home/web_user/.terminfo/x/xl83"}, {"audio": 0, "start": 901634, "crunched": 0, "end": 902604, "filename": "/home/web_user/.terminfo/x/xnuppc-128x48-m"}, {"audio": 0, "start": 902604, "crunched": 0, "end": 902748, "filename": "/home/web_user/.terminfo/x/xterm+alt1049"}, {"audio": 0, "start": 902748, "crunched": 0, "end": 903696, "filename": "/home/web_user/.terminfo/x/xnuppc+basic"}, {"audio": 0, "start": 903696, "crunched": 0, "end": 904543, "filename": "/home/web_user/.terminfo/x/xnuppc+c"}, {"audio": 0, "start": 904543, "crunched": 0, "end": 905982, "filename": "/home/web_user/.terminfo/x/xtermm"}, {"audio": 0, "start": 905982, "crunched": 0, "end": 906393, "filename": "/home/web_user/.terminfo/x/x1700-lm"}, {"audio": 0, "start": 906393, "crunched": 0, "end": 909966, "filename": "/home/web_user/.terminfo/x/xterm-noapp"}, {"audio": 0, "start": 909966, "crunched": 0, "end": 910869, "filename": "/home/web_user/.terminfo/x/xterm+x11hilite"}, {"audio": 0, "start": 910869, "crunched": 0, "end": 910959, "filename": "/home/web_user/.terminfo/x/xnuppc+200x75"}, {"audio": 0, "start": 910959, "crunched": 0, "end": 911089, "filename": "/home/web_user/.terminfo/x/xterm+noalt"}, {"audio": 0, "start": 911089, "crunched": 0, "end": 913335, "filename": "/home/web_user/.terminfo/x/xterm-xf86-v40"}, {"audio": 0, "start": 913335, "crunched": 0, "end": 916954, "filename": "/home/web_user/.terminfo/x/xterm-direct2"}, {"audio": 0, "start": 916954, "crunched": 0, "end": 917768, "filename": "/home/web_user/.terminfo/x/xterm+sl"}, {"audio": 0, "start": 917768, "crunched": 0, "end": 918770, "filename": "/home/web_user/.terminfo/x/xnuppc+f2"}, {"audio": 0, "start": 918770, "crunched": 0, "end": 920071, "filename": "/home/web_user/.terminfo/x/xterm-r5"}, {"audio": 0, "start": 920071, "crunched": 0, "end": 923667, "filename": "/home/web_user/.terminfo/x/xterm-1003"}, {"audio": 0, "start": 923667, "crunched": 0, "end": 925100, "filename": "/home/web_user/.terminfo/x/xwsh"}, {"audio": 0, "start": 925100, "crunched": 0, "end": 926116, "filename": "/home/web_user/.terminfo/x/xnuppc-m-f2"}, {"audio": 0, "start": 926116, "crunched": 0, "end": 927058, "filename": "/home/web_user/.terminfo/x/xterm+256setaf"}, {"audio": 0, "start": 927058, "crunched": 0, "end": 927480, "filename": "/home/web_user/.terminfo/x/xterm+app"}, {"audio": 0, "start": 927480, "crunched": 0, "end": 928474, "filename": "/home/web_user/.terminfo/x/xnuppc-m-b"}, {"audio": 0, "start": 928474, "crunched": 0, "end": 928903, "filename": "/home/web_user/.terminfo/x/xerox"}, {"audio": 0, "start": 928903, "crunched": 0, "end": 932516, "filename": "/home/web_user/.terminfo/x/xterm-1005"}, {"audio": 0, "start": 932516, "crunched": 0, "end": 934059, "filename": "/home/web_user/.terminfo/x/xterm+x11mouse"}, {"audio": 0, "start": 934059, "crunched": 0, "end": 934147, "filename": "/home/web_user/.terminfo/x/xnuppc+144x48"}, {"audio": 0, "start": 934147, "crunched": 0, "end": 937776, "filename": "/home/web_user/.terminfo/x/xterm-direct"}, {"audio": 0, "start": 937776, "crunched": 0, "end": 939806, "filename": "/home/web_user/.terminfo/x/xterm-xf86-v33"}, {"audio": 0, "start": 939806, "crunched": 0, "end": 941846, "filename": "/home/web_user/.terminfo/x/xterm-xf86-v333"}, {"audio": 0, "start": 941846, "crunched": 0, "end": 945463, "filename": "/home/web_user/.terminfo/x/xterm"}, {"audio": 0, "start": 945463, "crunched": 0, "end": 949064, "filename": "/home/web_user/.terminfo/x/xterm1"}, {"audio": 0, "start": 949064, "crunched": 0, "end": 952661, "filename": "/home/web_user/.terminfo/x/xterm-1006"}, {"audio": 0, "start": 952661, "crunched": 0, "end": 953631, "filename": "/home/web_user/.terminfo/x/xnuppc-144x48-m"}, {"audio": 0, "start": 953631, "crunched": 0, "end": 953987, "filename": "/home/web_user/.terminfo/x/xerox1720"}, {"audio": 0, "start": 953987, "crunched": 0, "end": 956027, "filename": "/home/web_user/.terminfo/x/xterm-xf86-v32"}, {"audio": 0, "start": 956027, "crunched": 0, "end": 956115, "filename": "/home/web_user/.terminfo/x/xnuppc+128x40"}, {"audio": 0, "start": 956115, "crunched": 0, "end": 957085, "filename": "/home/web_user/.terminfo/x/xnuppc-112x37-m"}, {"audio": 0, "start": 957085, "crunched": 0, "end": 958294, "filename": "/home/web_user/.terminfo/x/xnuppc-f"}, {"audio": 0, "start": 958294, "crunched": 0, "end": 960821, "filename": "/home/web_user/.terminfo/x/xterms-sun"}, {"audio": 0, "start": 960821, "crunched": 0, "end": 962273, "filename": "/home/web_user/.terminfo/x/xdku"}, {"audio": 0, "start": 962273, "crunched": 0, "end": 964784, "filename": "/home/web_user/.terminfo/x/xterm-sun"}, {"audio": 0, "start": 964784, "crunched": 0, "end": 966390, "filename": "/home/web_user/.terminfo/x/xtermc"}, {"audio": 0, "start": 966390, "crunched": 0, "end": 967423, "filename": "/home/web_user/.terminfo/x/xtalk"}, {"audio": 0, "start": 967423, "crunched": 0, "end": 968974, "filename": "/home/web_user/.terminfo/x/xterm-color"}, {"audio": 0, "start": 968974, "crunched": 0, "end": 969329, "filename": "/home/web_user/.terminfo/x/x820"}, {"audio": 0, "start": 969329, "crunched": 0, "end": 970524, "filename": "/home/web_user/.terminfo/x/xnuppc-80x25"}, {"audio": 0, "start": 970524, "crunched": 0, "end": 974381, "filename": "/home/web_user/.terminfo/x/xterm-16color"}, {"audio": 0, "start": 974381, "crunched": 0, "end": 977979, "filename": "/home/web_user/.terminfo/x/xterm-1002"}, {"audio": 0, "start": 977979, "crunched": 0, "end": 980273, "filename": "/home/web_user/.terminfo/x/xterm-xf86-v44"}, {"audio": 0, "start": 980273, "crunched": 0, "end": 983893, "filename": "/home/web_user/.terminfo/x/xterm-x11hilite"}, {"audio": 0, "start": 983893, "crunched": 0, "end": 987520, "filename": "/home/web_user/.terminfo/x/xterm-nic"}, {"audio": 0, "start": 987520, "crunched": 0, "end": 989112, "filename": "/home/web_user/.terminfo/x/xterm-bold"}, {"audio": 0, "start": 989112, "crunched": 0, "end": 992716, "filename": "/home/web_user/.terminfo/x/xterm-x11mouse"}, {"audio": 0, "start": 992716, "crunched": 0, "end": 993915, "filename": "/home/web_user/.terminfo/x/xnuppc-160x64"}, {"audio": 0, "start": 993915, "crunched": 0, "end": 994739, "filename": "/home/web_user/.terminfo/x/xterm+pcc1"}, {"audio": 0, "start": 994739, "crunched": 0, "end": 996730, "filename": "/home/web_user/.terminfo/x/xterm-8bit"}, {"audio": 0, "start": 996730, "crunched": 0, "end": 997698, "filename": "/home/web_user/.terminfo/x/xnuppc-90x30-m"}, {"audio": 0, "start": 997698, "crunched": 0, "end": 999391, "filename": "/home/web_user/.terminfo/x/xterm+direct"}, {"audio": 0, "start": 999391, "crunched": 0, "end": 1000361, "filename": "/home/web_user/.terminfo/x/xnuppc-200x64-m"}, {"audio": 0, "start": 1000361, "crunched": 0, "end": 1001813, "filename": "/home/web_user/.terminfo/x/x68k-ite"}, {"audio": 0, "start": 1001813, "crunched": 0, "end": 1003012, "filename": "/home/web_user/.terminfo/x/xnuppc-144x48"}, {"audio": 0, "start": 1003012, "crunched": 0, "end": 1006693, "filename": "/home/web_user/.terminfo/x/xterm-256color"}, {"audio": 0, "start": 1006693, "crunched": 0, "end": 1010372, "filename": "/home/web_user/.terminfo/x/xterm-88color"}, {"audio": 0, "start": 1010372, "crunched": 0, "end": 1010792, "filename": "/home/web_user/.terminfo/x/xterm+noapp"}, {"audio": 0, "start": 1010792, "crunched": 0, "end": 1012280, "filename": "/home/web_user/.terminfo/x/xterm+sm+1003"}, {"audio": 0, "start": 1012280, "crunched": 0, "end": 1012705, "filename": "/home/web_user/.terminfo/x/xerox-lm"}, {"audio": 0, "start": 1012705, "crunched": 0, "end": 1013763, "filename": "/home/web_user/.terminfo/x/xterm+88color"}, {"audio": 0, "start": 1013763, "crunched": 0, "end": 1014940, "filename": "/home/web_user/.terminfo/x/xnuppc"}, {"audio": 0, "start": 1014940, "crunched": 0, "end": 1016139, "filename": "/home/web_user/.terminfo/x/xnuppc-200x75"}, {"audio": 0, "start": 1016139, "crunched": 0, "end": 1017393, "filename": "/home/web_user/.terminfo/x/xterm+pcc0"}, {"audio": 0, "start": 1017393, "crunched": 0, "end": 1017857, "filename": "/home/web_user/.terminfo/x/xterm+vt+edit"}, {"audio": 0, "start": 1017857, "crunched": 0, "end": 1018951, "filename": "/home/web_user/.terminfo/x/xterm+r6f2"}, {"audio": 0, "start": 1018951, "crunched": 0, "end": 1019521, "filename": "/home/web_user/.terminfo/x/xterm+tmux"}, {"audio": 0, "start": 1019521, "crunched": 0, "end": 1021257, "filename": "/home/web_user/.terminfo/x/xterm-pcolor"}, {"audio": 0, "start": 1021257, "crunched": 0, "end": 1022747, "filename": "/home/web_user/.terminfo/x/xterm+sm+1002"}, {"audio": 0, "start": 1022747, "crunched": 0, "end": 1023755, "filename": "/home/web_user/.terminfo/x/xnuppc-m-f"}, {"audio": 0, "start": 1023755, "crunched": 0, "end": 1024954, "filename": "/home/web_user/.terminfo/x/xnuppc-112x37"}, {"audio": 0, "start": 1024954, "crunched": 0, "end": 1025044, "filename": "/home/web_user/.terminfo/x/xnuppc+256x96"}, {"audio": 0, "start": 1025044, "crunched": 0, "end": 1025400, "filename": "/home/web_user/.terminfo/x/x1750"}, {"audio": 0, "start": 1025400, "crunched": 0, "end": 1029027, "filename": "/home/web_user/.terminfo/x/xterm-utf8"}, {"audio": 0, "start": 1029027, "crunched": 0, "end": 1031232, "filename": "/home/web_user/.terminfo/x/xterm-basic"}, {"audio": 0, "start": 1031232, "crunched": 0, "end": 1033492, "filename": "/home/web_user/.terminfo/x/xterm-xf86-v43"}, {"audio": 0, "start": 1033492, "crunched": 0, "end": 1033578, "filename": "/home/web_user/.terminfo/x/xnuppc+90x30"}, {"audio": 0, "start": 1033578, "crunched": 0, "end": 1033664, "filename": "/home/web_user/.terminfo/x/xnuppc+80x25"}, {"audio": 0, "start": 1033664, "crunched": 0, "end": 1033752, "filename": "/home/web_user/.terminfo/x/xnuppc+100x37"}, {"audio": 0, "start": 1033752, "crunched": 0, "end": 1033842, "filename": "/home/web_user/.terminfo/x/xnuppc+200x64"}, {"audio": 0, "start": 1033842, "crunched": 0, "end": 1035036, "filename": "/home/web_user/.terminfo/x/xenix"}, {"audio": 0, "start": 1035036, "crunched": 0, "end": 1036010, "filename": "/home/web_user/.terminfo/x/xnuppc+b"}, {"audio": 0, "start": 1036010, "crunched": 0, "end": 1037070, "filename": "/home/web_user/.terminfo/x/xterm+256color"}, {"audio": 0, "start": 1037070, "crunched": 0, "end": 1038595, "filename": "/home/web_user/.terminfo/x/xterms"}, {"audio": 0, "start": 1038595, "crunched": 0, "end": 1040161, "filename": "/home/web_user/.terminfo/x/xiterm"}, {"audio": 0, "start": 1040161, "crunched": 0, "end": 1041131, "filename": "/home/web_user/.terminfo/x/xnuppc-200x75-m"}, {"audio": 0, "start": 1041131, "crunched": 0, "end": 1042033, "filename": "/home/web_user/.terminfo/x/xterm+pcc3"}, {"audio": 0, "start": 1042033, "crunched": 0, "end": 1043250, "filename": "/home/web_user/.terminfo/x/xnuppc-f2"}, {"audio": 0, "start": 1043250, "crunched": 0, "end": 1044299, "filename": "/home/web_user/.terminfo/x/xterm+pcf2"}, {"audio": 0, "start": 1044299, "crunched": 0, "end": 1045605, "filename": "/home/web_user/.terminfo/x/xterm+pcc2"}, {"audio": 0, "start": 1045605, "crunched": 0, "end": 1047625, "filename": "/home/web_user/.terminfo/x/xterm-xi"}, {"audio": 0, "start": 1047625, "crunched": 0, "end": 1048109, "filename": "/home/web_user/.terminfo/x/xterm-vt52"}, {"audio": 0, "start": 1048109, "crunched": 0, "end": 1049561, "filename": "/home/web_user/.terminfo/x/x68k"}, {"audio": 0, "start": 1049561, "crunched": 0, "end": 1050557, "filename": "/home/web_user/.terminfo/x/xnuppc+f"}, {"audio": 0, "start": 1050557, "crunched": 0, "end": 1054152, "filename": "/home/web_user/.terminfo/x/xterm-x10mouse"}, {"audio": 0, "start": 1054152, "crunched": 0, "end": 1055163, "filename": "/home/web_user/.terminfo/x/xterm+pcf0"}, {"audio": 0, "start": 1055163, "crunched": 0, "end": 1057590, "filename": "/home/web_user/.terminfo/x/xterm-sco"}, {"audio": 0, "start": 1057590, "crunched": 0, "end": 1058026, "filename": "/home/web_user/.terminfo/x/xterm+sl-twm"}, {"audio": 0, "start": 1058026, "crunched": 0, "end": 1059550, "filename": "/home/web_user/.terminfo/x/xterm+sm+1006"}, {"audio": 0, "start": 1059550, "crunched": 0, "end": 1060745, "filename": "/home/web_user/.terminfo/x/xnuppc-80x30"}, {"audio": 0, "start": 1060745, "crunched": 0, "end": 1061715, "filename": "/home/web_user/.terminfo/x/xnuppc-256x96-m"}, {"audio": 0, "start": 1061715, "crunched": 0, "end": 1062133, "filename": "/home/web_user/.terminfo/x/xterm+edit"}, {"audio": 0, "start": 1062133, "crunched": 0, "end": 1062562, "filename": "/home/web_user/.terminfo/x/x1700"}, {"audio": 0, "start": 1062562, "crunched": 0, "end": 1062744, "filename": "/home/web_user/.terminfo/x/xterm+alt+title"}, {"audio": 0, "start": 1062744, "crunched": 0, "end": 1063943, "filename": "/home/web_user/.terminfo/x/xnuppc-256x96"}, {"audio": 0, "start": 1063943, "crunched": 0, "end": 1065142, "filename": "/home/web_user/.terminfo/x/xnuppc-128x40"}, {"audio": 0, "start": 1065142, "crunched": 0, "end": 1066110, "filename": "/home/web_user/.terminfo/x/xnuppc-80x30-m"}, {"audio": 0, "start": 1066110, "crunched": 0, "end": 1069238, "filename": "/home/web_user/.terminfo/x/xfce"}, {"audio": 0, "start": 1069238, "crunched": 0, "end": 1070437, "filename": "/home/web_user/.terminfo/x/xnuppc-128x48"}, {"audio": 0, "start": 1070437, "crunched": 0, "end": 1071405, "filename": "/home/web_user/.terminfo/x/xnuppc-80x25-m"}, {"audio": 0, "start": 1071405, "crunched": 0, "end": 1071555, "filename": "/home/web_user/.terminfo/x/xterm+titlestack"}, {"audio": 0, "start": 1071555, "crunched": 0, "end": 1073778, "filename": "/home/web_user/.terminfo/x/xterm+pcfkeys"}, {"audio": 0, "start": 1073778, "crunched": 0, "end": 1076029, "filename": "/home/web_user/.terminfo/x/xterm-hp"}, {"audio": 0, "start": 1076029, "crunched": 0, "end": 1077557, "filename": "/home/web_user/.terminfo/x/xterm+x10mouse"}, {"audio": 0, "start": 1077557, "crunched": 0, "end": 1078754, "filename": "/home/web_user/.terminfo/x/xnuppc-b"}, {"audio": 0, "start": 1078754, "crunched": 0, "end": 1079702, "filename": "/home/web_user/.terminfo/x/xnuppc-m"}, {"audio": 0, "start": 1079702, "crunched": 0, "end": 1081401, "filename": "/home/web_user/.terminfo/x/xterm+indirect"}, {"audio": 0, "start": 1081401, "crunched": 0, "end": 1082596, "filename": "/home/web_user/.terminfo/x/xnuppc-90x30"}, {"audio": 0, "start": 1082596, "crunched": 0, "end": 1084089, "filename": "/home/web_user/.terminfo/x/xterm-old"}, {"audio": 0, "start": 1084089, "crunched": 0, "end": 1084175, "filename": "/home/web_user/.terminfo/x/xnuppc+80x30"}, {"audio": 0, "start": 1084175, "crunched": 0, "end": 1084263, "filename": "/home/web_user/.terminfo/x/xnuppc+112x37"}, {"audio": 0, "start": 1084263, "crunched": 0, "end": 1084920, "filename": "/home/web_user/.terminfo/x/x10term"}, {"audio": 0, "start": 1084920, "crunched": 0, "end": 1086411, "filename": "/home/web_user/.terminfo/x/xterm-r6"}, {"audio": 0, "start": 1086411, "crunched": 0, "end": 1086575, "filename": "/home/web_user/.terminfo/x/xterm+kbs"}, {"audio": 0, "start": 1086575, "crunched": 0, "end": 1087545, "filename": "/home/web_user/.terminfo/x/xnuppc-160x64-m"}, {"audio": 0, "start": 1087545, "crunched": 0, "end": 1089238, "filename": "/home/web_user/.terminfo/x/xterm+direct2"}, {"audio": 0, "start": 1089238, "crunched": 0, "end": 1090437, "filename": "/home/web_user/.terminfo/x/xnuppc-200x64"}, {"audio": 0, "start": 1090437, "crunched": 0, "end": 1091212, "filename": "/home/web_user/.terminfo/9/955-hb"}, {"audio": 0, "start": 1091212, "crunched": 0, "end": 1091985, "filename": "/home/web_user/.terminfo/9/955-w"}, {"audio": 0, "start": 1091985, "crunched": 0, "end": 1092835, "filename": "/home/web_user/.terminfo/9/9term"}, {"audio": 0, "start": 1092835, "crunched": 0, "end": 1093510, "filename": "/home/web_user/.terminfo/4/4027ex"}, {"audio": 0, "start": 1093510, "crunched": 0, "end": 1094185, "filename": "/home/web_user/.terminfo/4/4025ex"}, {"audio": 0, "start": 1094185, "crunched": 0, "end": 1095337, "filename": "/home/web_user/.terminfo/4/4410-w"}, {"audio": 0, "start": 1095337, "crunched": 0, "end": 1098397, "filename": "/home/web_user/.terminfo/g/gnome-rh90"}, {"audio": 0, "start": 1098397, "crunched": 0, "end": 1099539, "filename": "/home/web_user/.terminfo/g/gs6300"}, {"audio": 0, "start": 1099539, "crunched": 0, "end": 1100798, "filename": "/home/web_user/.terminfo/g/guru-76"}, {"audio": 0, "start": 1100798, "crunched": 0, "end": 1101559, "filename": "/home/web_user/.terminfo/g/go225"}, {"audio": 0, "start": 1101559, "crunched": 0, "end": 1102174, "filename": "/home/web_user/.terminfo/g/gigi"}, {"audio": 0, "start": 1102174, "crunched": 0, "end": 1102718, "filename": "/home/web_user/.terminfo/g/gator"}, {"audio": 0, "start": 1102718, "crunched": 0, "end": 1102898, "filename": "/home/web_user/.terminfo/g/guru+rv"}, {"audio": 0, "start": 1102898, "crunched": 0, "end": 1106010, "filename": "/home/web_user/.terminfo/g/gnome-2007"}, {"audio": 0, "start": 1106010, "crunched": 0, "end": 1107284, "filename": "/home/web_user/.terminfo/g/guru+unk"}, {"audio": 0, "start": 1107284, "crunched": 0, "end": 1107740, "filename": "/home/web_user/.terminfo/g/gt100"}, {"audio": 0, "start": 1107740, "crunched": 0, "end": 1109264, "filename": "/home/web_user/.terminfo/g/gnome-rh62"}, {"audio": 0, "start": 1109264, "crunched": 0, "end": 1112479, "filename": "/home/web_user/.terminfo/g/gnome"}, {"audio": 0, "start": 1112479, "crunched": 0, "end": 1113817, "filename": "/home/web_user/.terminfo/g/guru-76-s"}, {"audio": 0, "start": 1113817, "crunched": 0, "end": 1115160, "filename": "/home/web_user/.terminfo/g/guru-s"}, {"audio": 0, "start": 1115160, "crunched": 0, "end": 1116438, "filename": "/home/web_user/.terminfo/g/guru-rv"}, {"audio": 0, "start": 1116438, "crunched": 0, "end": 1117775, "filename": "/home/web_user/.terminfo/g/guru-44-s"}, {"audio": 0, "start": 1117775, "crunched": 0, "end": 1119053, "filename": "/home/web_user/.terminfo/g/guru-33-rv"}, {"audio": 0, "start": 1119053, "crunched": 0, "end": 1120327, "filename": "/home/web_user/.terminfo/g/guru"}, {"audio": 0, "start": 1120327, "crunched": 0, "end": 1120729, "filename": "/home/web_user/.terminfo/g/guru+s"}, {"audio": 0, "start": 1120729, "crunched": 0, "end": 1124316, "filename": "/home/web_user/.terminfo/g/gnome-256color"}, {"audio": 0, "start": 1124316, "crunched": 0, "end": 1125568, "filename": "/home/web_user/.terminfo/g/guru-24"}, {"audio": 0, "start": 1125568, "crunched": 0, "end": 1126145, "filename": "/home/web_user/.terminfo/g/graphos"}, {"audio": 0, "start": 1126145, "crunched": 0, "end": 1126253, "filename": "/home/web_user/.terminfo/g/gt42"}, {"audio": 0, "start": 1126253, "crunched": 0, "end": 1127598, "filename": "/home/web_user/.terminfo/g/guru-76-w-s"}, {"audio": 0, "start": 1127598, "crunched": 0, "end": 1128679, "filename": "/home/web_user/.terminfo/g/gs5430-24"}, {"audio": 0, "start": 1128679, "crunched": 0, "end": 1128787, "filename": "/home/web_user/.terminfo/g/gt40"}, {"audio": 0, "start": 1128787, "crunched": 0, "end": 1130067, "filename": "/home/web_user/.terminfo/g/guru-76-wm"}, {"audio": 0, "start": 1130067, "crunched": 0, "end": 1130474, "filename": "/home/web_user/.terminfo/g/glasstty"}, {"audio": 0, "start": 1130474, "crunched": 0, "end": 1131727, "filename": "/home/web_user/.terminfo/g/guru-44"}, {"audio": 0, "start": 1131727, "crunched": 0, "end": 1133009, "filename": "/home/web_user/.terminfo/g/guru-76-lp"}, {"audio": 0, "start": 1133009, "crunched": 0, "end": 1134291, "filename": "/home/web_user/.terminfo/g/guru-lp"}, {"audio": 0, "start": 1134291, "crunched": 0, "end": 1135565, "filename": "/home/web_user/.terminfo/g/guru-33"}, {"audio": 0, "start": 1135565, "crunched": 0, "end": 1135917, "filename": "/home/web_user/.terminfo/g/gsi"}, {"audio": 0, "start": 1135917, "crunched": 0, "end": 1136475, "filename": "/home/web_user/.terminfo/g/gator-t"}, {"audio": 0, "start": 1136475, "crunched": 0, "end": 1137586, "filename": "/home/web_user/.terminfo/g/gs5430-22"}, {"audio": 0, "start": 1137586, "crunched": 0, "end": 1138867, "filename": "/home/web_user/.terminfo/g/guru-nctxt"}, {"audio": 0, "start": 1138867, "crunched": 0, "end": 1139628, "filename": "/home/web_user/.terminfo/g/go-225"}, {"audio": 0, "start": 1139628, "crunched": 0, "end": 1140307, "filename": "/home/web_user/.terminfo/g/go140"}, {"audio": 0, "start": 1140307, "crunched": 0, "end": 1143457, "filename": "/home/web_user/.terminfo/g/gnome-2008"}, {"audio": 0, "start": 1143457, "crunched": 0, "end": 1144574, "filename": "/home/web_user/.terminfo/g/gs5430"}, {"audio": 0, "start": 1144574, "crunched": 0, "end": 1145084, "filename": "/home/web_user/.terminfo/g/gator-52t"}, {"audio": 0, "start": 1145084, "crunched": 0, "end": 1146725, "filename": "/home/web_user/.terminfo/g/gnome-rh80"}, {"audio": 0, "start": 1146725, "crunched": 0, "end": 1148331, "filename": "/home/web_user/.terminfo/g/gnome-rh72"}, {"audio": 0, "start": 1148331, "crunched": 0, "end": 1148829, "filename": "/home/web_user/.terminfo/g/gator-52"}, {"audio": 0, "start": 1148829, "crunched": 0, "end": 1150172, "filename": "/home/web_user/.terminfo/g/guru-33-s"}, {"audio": 0, "start": 1150172, "crunched": 0, "end": 1153397, "filename": "/home/web_user/.terminfo/g/gnome-2012"}, {"audio": 0, "start": 1153397, "crunched": 0, "end": 1154096, "filename": "/home/web_user/.terminfo/g/go140w"}, {"audio": 0, "start": 1154096, "crunched": 0, "end": 1157140, "filename": "/home/web_user/.terminfo/g/gnome-fc5"}, {"audio": 0, "start": 1157140, "crunched": 0, "end": 1157735, "filename": "/home/web_user/.terminfo/g/graphos-30"}, {"audio": 0, "start": 1157735, "crunched": 0, "end": 1158191, "filename": "/home/web_user/.terminfo/g/gt100a"}, {"audio": 0, "start": 1158191, "crunched": 0, "end": 1160367, "filename": "/home/web_user/.terminfo/g/gnome+pcfkeys"}, {"audio": 0, "start": 1160367, "crunched": 0, "end": 1161625, "filename": "/home/web_user/.terminfo/g/guru-76-w"}, {"audio": 0, "start": 1161625, "crunched": 0, "end": 1162877, "filename": "/home/web_user/.terminfo/c/cons43-m"}, {"audio": 0, "start": 1162877, "crunched": 0, "end": 1164481, "filename": "/home/web_user/.terminfo/c/color_xterm"}, {"audio": 0, "start": 1164481, "crunched": 0, "end": 1165004, "filename": "/home/web_user/.terminfo/c/chromatics"}, {"audio": 0, "start": 1165004, "crunched": 0, "end": 1165444, "filename": "/home/web_user/.terminfo/c/cs10"}, {"audio": 0, "start": 1165444, "crunched": 0, "end": 1165782, "filename": "/home/web_user/.terminfo/c/cgc2"}, {"audio": 0, "start": 1165782, "crunched": 0, "end": 1166608, "filename": "/home/web_user/.terminfo/c/c100-rv"}, {"audio": 0, "start": 1166608, "crunched": 0, "end": 1168116, "filename": "/home/web_user/.terminfo/c/cons50-koi8r"}, {"audio": 0, "start": 1168116, "crunched": 0, "end": 1168478, "filename": "/home/web_user/.terminfo/c/ca22851"}, {"audio": 0, "start": 1168478, "crunched": 0, "end": 1168954, "filename": "/home/web_user/.terminfo/c/cyb110"}, {"audio": 0, "start": 1168954, "crunched": 0, "end": 1169786, "filename": "/home/web_user/.terminfo/c/concept"}, {"audio": 0, "start": 1169786, "crunched": 0, "end": 1171294, "filename": "/home/web_user/.terminfo/c/cons60r"}, {"audio": 0, "start": 1171294, "crunched": 0, "end": 1172512, "filename": "/home/web_user/.terminfo/c/concept-avt"}, {"audio": 0, "start": 1172512, "crunched": 0, "end": 1173482, "filename": "/home/web_user/.terminfo/c/concept108-w8p"}, {"audio": 0, "start": 1173482, "crunched": 0, "end": 1174432, "filename": "/home/web_user/.terminfo/c/c108"}, {"audio": 0, "start": 1174432, "crunched": 0, "end": 1175696, "filename": "/home/web_user/.terminfo/c/cons50-m"}, {"audio": 0, "start": 1175696, "crunched": 0, "end": 1176666, "filename": "/home/web_user/.terminfo/c/c108-w"}, {"audio": 0, "start": 1176666, "crunched": 0, "end": 1178303, "filename": "/home/web_user/.terminfo/c/crt"}, {"audio": 0, "start": 1178303, "crunched": 0, "end": 1178830, "filename": "/home/web_user/.terminfo/c/cci"}, {"audio": 0, "start": 1178830, "crunched": 0, "end": 1179656, "filename": "/home/web_user/.terminfo/c/concept100-rv"}, {"audio": 0, "start": 1179656, "crunched": 0, "end": 1180606, "filename": "/home/web_user/.terminfo/c/c108-8p"}, {"audio": 0, "start": 1180606, "crunched": 0, "end": 1182119, "filename": "/home/web_user/.terminfo/c/ctrm"}, {"audio": 0, "start": 1182119, "crunched": 0, "end": 1183595, "filename": "/home/web_user/.terminfo/c/cons25l1-m"}, {"audio": 0, "start": 1183595, "crunched": 0, "end": 1185117, "filename": "/home/web_user/.terminfo/c/cons50l1"}, {"audio": 0, "start": 1185117, "crunched": 0, "end": 1185573, "filename": "/home/web_user/.terminfo/c/coherent"}, {"audio": 0, "start": 1185573, "crunched": 0, "end": 1186004, "filename": "/home/web_user/.terminfo/c/citoh"}, {"audio": 0, "start": 1186004, "crunched": 0, "end": 1186944, "filename": "/home/web_user/.terminfo/c/c108-rv"}, {"audio": 0, "start": 1186944, "crunched": 0, "end": 1187368, "filename": "/home/web_user/.terminfo/c/cit-80"}, {"audio": 0, "start": 1187368, "crunched": 0, "end": 1188308, "filename": "/home/web_user/.terminfo/c/c108-rv-8p"}, {"audio": 0, "start": 1188308, "crunched": 0, "end": 1189606, "filename": "/home/web_user/.terminfo/c/cons50-koi8r-m"}, {"audio": 0, "start": 1189606, "crunched": 0, "end": 1190556, "filename": "/home/web_user/.terminfo/c/c108-rv-4p"}, {"audio": 0, "start": 1190556, "crunched": 0, "end": 1191116, "filename": "/home/web_user/.terminfo/c/c300"}, {"audio": 0, "start": 1191116, "crunched": 0, "end": 1191780, "filename": "/home/web_user/.terminfo/c/cit101e"}, {"audio": 0, "start": 1191780, "crunched": 0, "end": 1192590, "filename": "/home/web_user/.terminfo/c/c100-1p"}, {"audio": 0, "start": 1192590, "crunched": 0, "end": 1194109, "filename": "/home/web_user/.terminfo/c/cons25-debian"}, {"audio": 0, "start": 1194109, "crunched": 0, "end": 1195379, "filename": "/home/web_user/.terminfo/c/cons60l1-m"}, {"audio": 0, "start": 1195379, "crunched": 0, "end": 1196631, "filename": "/home/web_user/.terminfo/c/cons60-m"}, {"audio": 0, "start": 1196631, "crunched": 0, "end": 1198109, "filename": "/home/web_user/.terminfo/c/cons25-m"}, {"audio": 0, "start": 1198109, "crunched": 0, "end": 1198509, "filename": "/home/web_user/.terminfo/c/ct82"}, {"audio": 0, "start": 1198509, "crunched": 0, "end": 1198803, "filename": "/home/web_user/.terminfo/c/cdc721"}, {"audio": 0, "start": 1198803, "crunched": 0, "end": 1199736, "filename": "/home/web_user/.terminfo/c/concept108-4p"}, {"audio": 0, "start": 1199736, "crunched": 0, "end": 1201254, "filename": "/home/web_user/.terminfo/c/cons60-iso"}, {"audio": 0, "start": 1201254, "crunched": 0, "end": 1201918, "filename": "/home/web_user/.terminfo/c/cit101e-n"}, {"audio": 0, "start": 1201918, "crunched": 0, "end": 1202349, "filename": "/home/web_user/.terminfo/c/ci8510"}, {"audio": 0, "start": 1202349, "crunched": 0, "end": 1203236, "filename": "/home/web_user/.terminfo/c/cit500"}, {"audio": 0, "start": 1203236, "crunched": 0, "end": 1203660, "filename": "/home/web_user/.terminfo/c/cit80"}, {"audio": 0, "start": 1203660, "crunched": 0, "end": 1204098, "filename": "/home/web_user/.terminfo/c/citoh-elite"}, {"audio": 0, "start": 1204098, "crunched": 0, "end": 1205606, "filename": "/home/web_user/.terminfo/c/cons60-koi8r"}, {"audio": 0, "start": 1205606, "crunched": 0, "end": 1206050, "filename": "/home/web_user/.terminfo/c/citoh-8lpi"}, {"audio": 0, "start": 1206050, "crunched": 0, "end": 1206601, "filename": "/home/web_user/.terminfo/c/c321"}, {"audio": 0, "start": 1206601, "crunched": 0, "end": 1207029, "filename": "/home/web_user/.terminfo/c/citoh-pica"}, {"audio": 0, "start": 1207029, "crunched": 0, "end": 1207399, "filename": "/home/web_user/.terminfo/c/cops10"}, {"audio": 0, "start": 1207399, "crunched": 0, "end": 1207776, "filename": "/home/web_user/.terminfo/c/coco3"}, {"audio": 0, "start": 1207776, "crunched": 0, "end": 1209272, "filename": "/home/web_user/.terminfo/c/cons43"}, {"audio": 0, "start": 1209272, "crunched": 0, "end": 1210242, "filename": "/home/web_user/.terminfo/c/concept108-w-8"}, {"audio": 0, "start": 1210242, "crunched": 0, "end": 1211512, "filename": "/home/web_user/.terminfo/c/cons50-iso-m"}, {"audio": 0, "start": 1211512, "crunched": 0, "end": 1212338, "filename": "/home/web_user/.terminfo/c/c100-rv-4p"}, {"audio": 0, "start": 1212338, "crunched": 0, "end": 1212800, "filename": "/home/web_user/.terminfo/c/citoh-ps"}, {"audio": 0, "start": 1212800, "crunched": 0, "end": 1213390, "filename": "/home/web_user/.terminfo/c/cit101"}, {"audio": 0, "start": 1213390, "crunched": 0, "end": 1214222, "filename": "/home/web_user/.terminfo/c/concept100"}, {"audio": 0, "start": 1214222, "crunched": 0, "end": 1215172, "filename": "/home/web_user/.terminfo/c/concept108-8p"}, {"audio": 0, "start": 1215172, "crunched": 0, "end": 1216696, "filename": "/home/web_user/.terminfo/c/cons25r-m"}, {"audio": 0, "start": 1216696, "crunched": 0, "end": 1217219, "filename": "/home/web_user/.terminfo/c/cg7900"}, {"audio": 0, "start": 1217219, "crunched": 0, "end": 1218741, "filename": "/home/web_user/.terminfo/c/cons50-iso8859"}, {"audio": 0, "start": 1218741, "crunched": 0, "end": 1219079, "filename": "/home/web_user/.terminfo/c/cad68-2"}, {"audio": 0, "start": 1219079, "crunched": 0, "end": 1220575, "filename": "/home/web_user/.terminfo/c/cons30"}, {"audio": 0, "start": 1220575, "crunched": 0, "end": 1221827, "filename": "/home/web_user/.terminfo/c/cons30-m"}, {"audio": 0, "start": 1221827, "crunched": 0, "end": 1223345, "filename": "/home/web_user/.terminfo/c/cons60l1"}, {"audio": 0, "start": 1223345, "crunched": 0, "end": 1224970, "filename": "/home/web_user/.terminfo/c/cygwinB19"}, {"audio": 0, "start": 1224970, "crunched": 0, "end": 1225650, "filename": "/home/web_user/.terminfo/c/cit101e-n132"}, {"audio": 0, "start": 1225650, "crunched": 0, "end": 1226064, "filename": "/home/web_user/.terminfo/c/cyb83"}, {"audio": 0, "start": 1226064, "crunched": 0, "end": 1226458, "filename": "/home/web_user/.terminfo/c/cdc456"}, {"audio": 0, "start": 1226458, "crunched": 0, "end": 1227968, "filename": "/home/web_user/.terminfo/c/cons25l1"}, {"audio": 0, "start": 1227968, "crunched": 0, "end": 1229266, "filename": "/home/web_user/.terminfo/c/cons60-koi8r-m"}, {"audio": 0, "start": 1229266, "crunched": 0, "end": 1230784, "filename": "/home/web_user/.terminfo/c/cygwin"}, {"audio": 0, "start": 1230784, "crunched": 0, "end": 1232134, "filename": "/home/web_user/.terminfo/c/cit101e-rv"}, {"audio": 0, "start": 1232134, "crunched": 0, "end": 1232304, "filename": "/home/web_user/.terminfo/c/cad68-3"}, {"audio": 0, "start": 1232304, "crunched": 0, "end": 1232831, "filename": "/home/web_user/.terminfo/c/cci1"}, {"audio": 0, "start": 1232831, "crunched": 0, "end": 1233001, "filename": "/home/web_user/.terminfo/c/cgc3"}, {"audio": 0, "start": 1233001, "crunched": 0, "end": 1233833, "filename": "/home/web_user/.terminfo/c/c104"}, {"audio": 0, "start": 1233833, "crunched": 0, "end": 1235103, "filename": "/home/web_user/.terminfo/c/cons60-iso-m"}, {"audio": 0, "start": 1235103, "crunched": 0, "end": 1236626, "filename": "/home/web_user/.terminfo/c/cygwinDBG"}, {"audio": 0, "start": 1236626, "crunched": 0, "end": 1237177, "filename": "/home/web_user/.terminfo/c/contel301"}, {"audio": 0, "start": 1237177, "crunched": 0, "end": 1237617, "filename": "/home/web_user/.terminfo/c/colorscan"}, {"audio": 0, "start": 1237617, "crunched": 0, "end": 1238079, "filename": "/home/web_user/.terminfo/c/citoh-prop"}, {"audio": 0, "start": 1238079, "crunched": 0, "end": 1238474, "filename": "/home/web_user/.terminfo/c/cdc752"}, {"audio": 0, "start": 1238474, "crunched": 0, "end": 1239407, "filename": "/home/web_user/.terminfo/c/c108-4p"}, {"audio": 0, "start": 1239407, "crunched": 0, "end": 1240931, "filename": "/home/web_user/.terminfo/c/cons25-koi8r-m"}, {"audio": 0, "start": 1240931, "crunched": 0, "end": 1242427, "filename": "/home/web_user/.terminfo/c/cons60"}, {"audio": 0, "start": 1242427, "crunched": 0, "end": 1242978, "filename": "/home/web_user/.terminfo/c/contel321"}, {"audio": 0, "start": 1242978, "crunched": 0, "end": 1243348, "filename": "/home/web_user/.terminfo/c/cops"}, {"audio": 0, "start": 1243348, "crunched": 0, "end": 1244952, "filename": "/home/web_user/.terminfo/c/cx"}, {"audio": 0, "start": 1244952, "crunched": 0, "end": 1245902, "filename": "/home/web_user/.terminfo/c/concept108rv4p"}, {"audio": 0, "start": 1245902, "crunched": 0, "end": 1247200, "filename": "/home/web_user/.terminfo/c/cons50r-m"}, {"audio": 0, "start": 1247200, "crunched": 0, "end": 1247855, "filename": "/home/web_user/.terminfo/c/cdc721-esc"}, {"audio": 0, "start": 1247855, "crunched": 0, "end": 1248805, "filename": "/home/web_user/.terminfo/c/concept108"}, {"audio": 0, "start": 1248805, "crunched": 0, "end": 1249267, "filename": "/home/web_user/.terminfo/c/citoh-comp"}, {"audio": 0, "start": 1249267, "crunched": 0, "end": 1249711, "filename": "/home/web_user/.terminfo/c/citoh-6lpi"}, {"audio": 0, "start": 1249711, "crunched": 0, "end": 1251221, "filename": "/home/web_user/.terminfo/c/cons25-koi8-r"}, {"audio": 0, "start": 1251221, "crunched": 0, "end": 1252729, "filename": "/home/web_user/.terminfo/c/cons50r"}, {"audio": 0, "start": 1252729, "crunched": 0, "end": 1253099, "filename": "/home/web_user/.terminfo/c/cops-10"}, {"audio": 0, "start": 1253099, "crunched": 0, "end": 1253669, "filename": "/home/web_user/.terminfo/c/cdc756"}, {"audio": 0, "start": 1253669, "crunched": 0, "end": 1255171, "filename": "/home/web_user/.terminfo/c/cons25"}, {"audio": 0, "start": 1255171, "crunched": 0, "end": 1256673, "filename": "/home/web_user/.terminfo/c/cons50"}, {"audio": 0, "start": 1256673, "crunched": 0, "end": 1257090, "filename": "/home/web_user/.terminfo/c/ct8500"}, {"audio": 0, "start": 1257090, "crunched": 0, "end": 1257650, "filename": "/home/web_user/.terminfo/c/contel320"}, {"audio": 0, "start": 1257650, "crunched": 0, "end": 1259160, "filename": "/home/web_user/.terminfo/c/cons25-iso8859"}, {"audio": 0, "start": 1259160, "crunched": 0, "end": 1260130, "filename": "/home/web_user/.terminfo/c/c108-w-8p"}, {"audio": 0, "start": 1260130, "crunched": 0, "end": 1260720, "filename": "/home/web_user/.terminfo/c/citc"}, {"audio": 0, "start": 1260720, "crunched": 0, "end": 1262018, "filename": "/home/web_user/.terminfo/c/cons60r-m"}, {"audio": 0, "start": 1262018, "crunched": 0, "end": 1263288, "filename": "/home/web_user/.terminfo/c/cons50l1-m"}, {"audio": 0, "start": 1263288, "crunched": 0, "end": 1263839, "filename": "/home/web_user/.terminfo/c/c301"}, {"audio": 0, "start": 1263839, "crunched": 0, "end": 1264151, "filename": "/home/web_user/.terminfo/c/cdc721ll"}, {"audio": 0, "start": 1264151, "crunched": 0, "end": 1264711, "filename": "/home/web_user/.terminfo/c/contel300"}, {"audio": 0, "start": 1264711, "crunched": 0, "end": 1265383, "filename": "/home/web_user/.terminfo/c/cit101e-132"}, {"audio": 0, "start": 1265383, "crunched": 0, "end": 1265814, "filename": "/home/web_user/.terminfo/c/cbunix"}, {"audio": 0, "start": 1265814, "crunched": 0, "end": 1267451, "filename": "/home/web_user/.terminfo/c/crt-vt220"}, {"audio": 0, "start": 1267451, "crunched": 0, "end": 1268910, "filename": "/home/web_user/.terminfo/c/cons25w"}, {"audio": 0, "start": 1268910, "crunched": 0, "end": 1269464, "filename": "/home/web_user/.terminfo/c/cbblit"}, {"audio": 0, "start": 1269464, "crunched": 0, "end": 1270496, "filename": "/home/web_user/.terminfo/c/commodore"}, {"audio": 0, "start": 1270496, "crunched": 0, "end": 1271328, "filename": "/home/web_user/.terminfo/c/c100"}, {"audio": 0, "start": 1271328, "crunched": 0, "end": 1272838, "filename": "/home/web_user/.terminfo/c/cons25r"}, {"audio": 0, "start": 1272838, "crunched": 0, "end": 1273288, "filename": "/home/web_user/.terminfo/c/cs10-w"}, {"audio": 0, "start": 1273288, "crunched": 0, "end": 1274120, "filename": "/home/web_user/.terminfo/c/c100-4p"}, {"audio": 0, "start": 1274120, "crunched": 0, "end": 1275724, "filename": "/home/web_user/.terminfo/c/cx100"}, {"audio": 0, "start": 1275724, "crunched": 0, "end": 1277200, "filename": "/home/web_user/.terminfo/c/cons25-iso-m"}, {"audio": 0, "start": 1277200, "crunched": 0, "end": 1277611, "filename": "/home/web_user/.terminfo/1/1730-lm"}, {"audio": 0, "start": 1277611, "crunched": 0, "end": 1278048, "filename": "/home/web_user/.terminfo/1/1178"}, {"audio": 0, "start": 1278048, "crunched": 0, "end": 1278674, "filename": "/home/web_user/.terminfo/5/5620"}, {"audio": 0, "start": 1278674, "crunched": 0, "end": 1279826, "filename": "/home/web_user/.terminfo/5/5410-w"}, {"audio": 0, "start": 1279826, "crunched": 0, "end": 1280946, "filename": "/home/web_user/.terminfo/5/5630DMD-24"}, {"audio": 0, "start": 1280946, "crunched": 0, "end": 1282066, "filename": "/home/web_user/.terminfo/5/5630-24"}, {"audio": 0, "start": 1282066, "crunched": 0, "end": 1282465, "filename": "/home/web_user/.terminfo/5/5051"}, {"audio": 0, "start": 1282465, "crunched": 0, "end": 1283734, "filename": "/home/web_user/.terminfo/w/wy150-25"}, {"audio": 0, "start": 1283734, "crunched": 0, "end": 1284750, "filename": "/home/web_user/.terminfo/w/wy60-316X"}, {"audio": 0, "start": 1284750, "crunched": 0, "end": 1286430, "filename": "/home/web_user/.terminfo/w/wyse520-48w"}, {"audio": 0, "start": 1286430, "crunched": 0, "end": 1288106, "filename": "/home/web_user/.terminfo/w/wyse520-48"}, {"audio": 0, "start": 1288106, "crunched": 0, "end": 1288910, "filename": "/home/web_user/.terminfo/w/wy60-PC"}, {"audio": 0, "start": 1288910, "crunched": 0, "end": 1290606, "filename": "/home/web_user/.terminfo/w/wyse520-w"}, {"audio": 0, "start": 1290606, "crunched": 0, "end": 1292033, "filename": "/home/web_user/.terminfo/w/wyse99gt-wvb"}, {"audio": 0, "start": 1292033, "crunched": 0, "end": 1293332, "filename": "/home/web_user/.terminfo/w/wyse120-wvb"}, {"audio": 0, "start": 1293332, "crunched": 0, "end": 1295008, "filename": "/home/web_user/.terminfo/w/wyse520-36"}, {"audio": 0, "start": 1295008, "crunched": 0, "end": 1296277, "filename": "/home/web_user/.terminfo/w/wyse120-25"}, {"audio": 0, "start": 1296277, "crunched": 0, "end": 1297643, "filename": "/home/web_user/.terminfo/w/wy60-25-w"}, {"audio": 0, "start": 1297643, "crunched": 0, "end": 1299036, "filename": "/home/web_user/.terminfo/w/wy160-w-vb"}, {"audio": 0, "start": 1299036, "crunched": 0, "end": 1300756, "filename": "/home/web_user/.terminfo/w/wyse520-48wpc"}, {"audio": 0, "start": 1300756, "crunched": 0, "end": 1302778, "filename": "/home/web_user/.terminfo/w/wy370-vb"}, {"audio": 0, "start": 1302778, "crunched": 0, "end": 1304128, "filename": "/home/web_user/.terminfo/w/wyse160"}, {"audio": 0, "start": 1304128, "crunched": 0, "end": 1305337, "filename": "/home/web_user/.terminfo/w/wy325-42w"}, {"audio": 0, "start": 1305337, "crunched": 0, "end": 1307099, "filename": "/home/web_user/.terminfo/w/wy520-epc-vb"}, {"audio": 0, "start": 1307099, "crunched": 0, "end": 1308616, "filename": "/home/web_user/.terminfo/w/wy99-ansi"}, {"audio": 0, "start": 1308616, "crunched": 0, "end": 1310286, "filename": "/home/web_user/.terminfo/w/wyse520-24"}, {"audio": 0, "start": 1310286, "crunched": 0, "end": 1311493, "filename": "/home/web_user/.terminfo/w/wyse325-42"}, {"audio": 0, "start": 1311493, "crunched": 0, "end": 1312970, "filename": "/home/web_user/.terminfo/w/wy350-w"}, {"audio": 0, "start": 1312970, "crunched": 0, "end": 1313986, "filename": "/home/web_user/.terminfo/w/wyse60-316X"}, {"audio": 0, "start": 1313986, "crunched": 0, "end": 1314617, "filename": "/home/web_user/.terminfo/w/wrenw"}, {"audio": 0, "start": 1314617, "crunched": 0, "end": 1315842, "filename": "/home/web_user/.terminfo/w/wyse325-25"}, {"audio": 0, "start": 1315842, "crunched": 0, "end": 1317231, "filename": "/home/web_user/.terminfo/w/wyse99gt"}, {"audio": 0, "start": 1317231, "crunched": 0, "end": 1318440, "filename": "/home/web_user/.terminfo/w/wyse325-42w"}, {"audio": 0, "start": 1318440, "crunched": 0, "end": 1319806, "filename": "/home/web_user/.terminfo/w/wyse60-25-w"}, {"audio": 0, "start": 1319806, "crunched": 0, "end": 1320718, "filename": "/home/web_user/.terminfo/w/wyse30-vb"}, {"audio": 0, "start": 1320718, "crunched": 0, "end": 1322145, "filename": "/home/web_user/.terminfo/w/wy99gt-wvb"}, {"audio": 0, "start": 1322145, "crunched": 0, "end": 1323859, "filename": "/home/web_user/.terminfo/w/wyse185-wvb"}, {"audio": 0, "start": 1323859, "crunched": 0, "end": 1325854, "filename": "/home/web_user/.terminfo/w/wy370-EPC"}, {"audio": 0, "start": 1325854, "crunched": 0, "end": 1327121, "filename": "/home/web_user/.terminfo/w/wyse120-w"}, {"audio": 0, "start": 1327121, "crunched": 0, "end": 1328851, "filename": "/home/web_user/.terminfo/w/wy520-wvb"}, {"audio": 0, "start": 1328851, "crunched": 0, "end": 1330080, "filename": "/home/web_user/.terminfo/w/wyse325-w"}, {"audio": 0, "start": 1330080, "crunched": 0, "end": 1331473, "filename": "/home/web_user/.terminfo/w/wy160-wvb"}, {"audio": 0, "start": 1331473, "crunched": 0, "end": 1332702, "filename": "/home/web_user/.terminfo/w/wy325-w"}, {"audio": 0, "start": 1332702, "crunched": 0, "end": 1333953, "filename": "/home/web_user/.terminfo/w/wy60-AT"}, {"audio": 0, "start": 1333953, "crunched": 0, "end": 1335346, "filename": "/home/web_user/.terminfo/w/wy99gt-25"}, {"audio": 0, "start": 1335346, "crunched": 0, "end": 1336739, "filename": "/home/web_user/.terminfo/w/wyse160-wvb"}, {"audio": 0, "start": 1336739, "crunched": 0, "end": 1338106, "filename": "/home/web_user/.terminfo/w/wy160-w"}, {"audio": 0, "start": 1338106, "crunched": 0, "end": 1340150, "filename": "/home/web_user/.terminfo/w/wy370"}, {"audio": 0, "start": 1340150, "crunched": 0, "end": 1341830, "filename": "/home/web_user/.terminfo/w/wyse75-wvb"}, {"audio": 0, "start": 1341830, "crunched": 0, "end": 1342812, "filename": "/home/web_user/.terminfo/w/wyse50"}, {"audio": 0, "start": 1342812, "crunched": 0, "end": 1344182, "filename": "/home/web_user/.terminfo/w/wyse60-w"}, {"audio": 0, "start": 1344182, "crunched": 0, "end": 1345543, "filename": "/home/web_user/.terminfo/w/wy160-25-w"}, {"audio": 0, "start": 1345543, "crunched": 0, "end": 1347239, "filename": "/home/web_user/.terminfo/w/wy520-36w"}, {"audio": 0, "start": 1347239, "crunched": 0, "end": 1348594, "filename": "/home/web_user/.terminfo/w/wyse60"}, {"audio": 0, "start": 1348594, "crunched": 0, "end": 1349576, "filename": "/home/web_user/.terminfo/w/wy50"}, {"audio": 0, "start": 1349576, "crunched": 0, "end": 1350857, "filename": "/home/web_user/.terminfo/w/wy120-vb"}, {"audio": 0, "start": 1350857, "crunched": 0, "end": 1352225, "filename": "/home/web_user/.terminfo/w/wy160-vb"}, {"audio": 0, "start": 1352225, "crunched": 0, "end": 1353608, "filename": "/home/web_user/.terminfo/w/wy60-42"}, {"audio": 0, "start": 1353608, "crunched": 0, "end": 1354964, "filename": "/home/web_user/.terminfo/w/wy160-25"}, {"audio": 0, "start": 1354964, "crunched": 0, "end": 1356633, "filename": "/home/web_user/.terminfo/w/wsvt25m"}, {"audio": 0, "start": 1356633, "crunched": 0, "end": 1357842, "filename": "/home/web_user/.terminfo/w/wy325-43w"}, {"audio": 0, "start": 1357842, "crunched": 0, "end": 1358840, "filename": "/home/web_user/.terminfo/w/wy50-vb"}, {"audio": 0, "start": 1358840, "crunched": 0, "end": 1360496, "filename": "/home/web_user/.terminfo/w/wy85-vb"}, {"audio": 0, "start": 1360496, "crunched": 0, "end": 1362212, "filename": "/home/web_user/.terminfo/w/wy520-48pc"}, {"audio": 0, "start": 1362212, "crunched": 0, "end": 1363411, "filename": "/home/web_user/.terminfo/w/wy325-25w"}, {"audio": 0, "start": 1363411, "crunched": 0, "end": 1364902, "filename": "/home/web_user/.terminfo/w/wy350-wvb"}, {"audio": 0, "start": 1364902, "crunched": 0, "end": 1366252, "filename": "/home/web_user/.terminfo/w/wy160"}, {"audio": 0, "start": 1366252, "crunched": 0, "end": 1368291, "filename": "/home/web_user/.terminfo/w/wy370-wvb"}, {"audio": 0, "start": 1368291, "crunched": 0, "end": 1369963, "filename": "/home/web_user/.terminfo/w/wyse85-wvb"}, {"audio": 0, "start": 1369963, "crunched": 0, "end": 1370767, "filename": "/home/web_user/.terminfo/w/wyse60-PC"}, {"audio": 0, "start": 1370767, "crunched": 0, "end": 1372401, "filename": "/home/web_user/.terminfo/w/wy85"}, {"audio": 0, "start": 1372401, "crunched": 0, "end": 1373668, "filename": "/home/web_user/.terminfo/w/wyse150-25-w"}, {"audio": 0, "start": 1373668, "crunched": 0, "end": 1375063, "filename": "/home/web_user/.terminfo/w/wy99gt-25-w"}, {"audio": 0, "start": 1375063, "crunched": 0, "end": 1377107, "filename": "/home/web_user/.terminfo/w/wy370-101k"}, {"audio": 0, "start": 1377107, "crunched": 0, "end": 1378766, "filename": "/home/web_user/.terminfo/w/wsvt25"}, {"audio": 0, "start": 1378766, "crunched": 0, "end": 1380009, "filename": "/home/web_user/.terminfo/w/wy325-w-vb"}, {"audio": 0, "start": 1380009, "crunched": 0, "end": 1381220, "filename": "/home/web_user/.terminfo/w/wyse325"}, {"audio": 0, "start": 1381220, "crunched": 0, "end": 1382583, "filename": "/home/web_user/.terminfo/w/wyse60-43"}, {"audio": 0, "start": 1382583, "crunched": 0, "end": 1384217, "filename": "/home/web_user/.terminfo/w/wyse85"}, {"audio": 0, "start": 1384217, "crunched": 0, "end": 1385861, "filename": "/home/web_user/.terminfo/w/wyse75"}, {"audio": 0, "start": 1385861, "crunched": 0, "end": 1387068, "filename": "/home/web_user/.terminfo/w/wy325-42"}, {"audio": 0, "start": 1387068, "crunched": 0, "end": 1389292, "filename": "/home/web_user/.terminfo/w/wy370-105k"}, {"audio": 0, "start": 1389292, "crunched": 0, "end": 1390549, "filename": "/home/web_user/.terminfo/w/wy150"}, {"audio": 0, "start": 1390549, "crunched": 0, "end": 1392049, "filename": "/home/web_user/.terminfo/w/wy85-8bit"}, {"audio": 0, "start": 1392049, "crunched": 0, "end": 1393549, "filename": "/home/web_user/.terminfo/w/wyse85-8bit"}, {"audio": 0, "start": 1393549, "crunched": 0, "end": 1395040, "filename": "/home/web_user/.terminfo/w/wyse350-wvb"}, {"audio": 0, "start": 1395040, "crunched": 0, "end": 1396273, "filename": "/home/web_user/.terminfo/w/wyse325-vb"}, {"audio": 0, "start": 1396273, "crunched": 0, "end": 1397993, "filename": "/home/web_user/.terminfo/w/wyse520-36wpc"}, {"audio": 0, "start": 1397993, "crunched": 0, "end": 1399711, "filename": "/home/web_user/.terminfo/w/wyse520-vb"}, {"audio": 0, "start": 1399711, "crunched": 0, "end": 1400922, "filename": "/home/web_user/.terminfo/w/wy325"}, {"audio": 0, "start": 1400922, "crunched": 0, "end": 1402391, "filename": "/home/web_user/.terminfo/w/wyse350"}, {"audio": 0, "start": 1402391, "crunched": 0, "end": 1404107, "filename": "/home/web_user/.terminfo/w/wyse520-48pc"}, {"audio": 0, "start": 1404107, "crunched": 0, "end": 1405332, "filename": "/home/web_user/.terminfo/w/wy325-80"}, {"audio": 0, "start": 1405332, "crunched": 0, "end": 1407046, "filename": "/home/web_user/.terminfo/w/wyse520-pc-24"}, {"audio": 0, "start": 1407046, "crunched": 0, "end": 1408402, "filename": "/home/web_user/.terminfo/w/wyse160-25"}, {"audio": 0, "start": 1408402, "crunched": 0, "end": 1410098, "filename": "/home/web_user/.terminfo/w/wyse520-36w"}, {"audio": 0, "start": 1410098, "crunched": 0, "end": 1411375, "filename": "/home/web_user/.terminfo/w/wy-99fgta"}, {"audio": 0, "start": 1411375, "crunched": 0, "end": 1413077, "filename": "/home/web_user/.terminfo/w/wy185-vb"}, {"audio": 0, "start": 1413077, "crunched": 0, "end": 1414024, "filename": "/home/web_user/.terminfo/w/wy370-tek"}, {"audio": 0, "start": 1414024, "crunched": 0, "end": 1415690, "filename": "/home/web_user/.terminfo/w/wy75-w"}, {"audio": 0, "start": 1415690, "crunched": 0, "end": 1416957, "filename": "/home/web_user/.terminfo/w/wy150-25-w"}, {"audio": 0, "start": 1416957, "crunched": 0, "end": 1418164, "filename": "/home/web_user/.terminfo/w/wy325-43"}, {"audio": 0, "start": 1418164, "crunched": 0, "end": 1419560, "filename": "/home/web_user/.terminfo/w/wy60-w-vb"}, {"audio": 0, "start": 1419560, "crunched": 0, "end": 1420817, "filename": "/home/web_user/.terminfo/w/wy120"}, {"audio": 0, "start": 1420817, "crunched": 0, "end": 1422175, "filename": "/home/web_user/.terminfo/w/wyse160-43-w"}, {"audio": 0, "start": 1422175, "crunched": 0, "end": 1422646, "filename": "/home/web_user/.terminfo/w/wy100"}, {"audio": 0, "start": 1422646, "crunched": 0, "end": 1424042, "filename": "/home/web_user/.terminfo/w/wy60-wvb"}, {"audio": 0, "start": 1424042, "crunched": 0, "end": 1425319, "filename": "/home/web_user/.terminfo/w/wy99fa"}, {"audio": 0, "start": 1425319, "crunched": 0, "end": 1426586, "filename": "/home/web_user/.terminfo/w/wyse120-25-w"}, {"audio": 0, "start": 1426586, "crunched": 0, "end": 1427857, "filename": "/home/web_user/.terminfo/w/wy99fgt"}, {"audio": 0, "start": 1427857, "crunched": 0, "end": 1429531, "filename": "/home/web_user/.terminfo/w/wy520"}, {"audio": 0, "start": 1429531, "crunched": 0, "end": 1430930, "filename": "/home/web_user/.terminfo/w/wy99gt-w"}, {"audio": 0, "start": 1430930, "crunched": 0, "end": 1432602, "filename": "/home/web_user/.terminfo/w/wy85-wvb"}, {"audio": 0, "start": 1432602, "crunched": 0, "end": 1434340, "filename": "/home/web_user/.terminfo/w/wy75ap"}, {"audio": 0, "start": 1434340, "crunched": 0, "end": 1435307, "filename": "/home/web_user/.terminfo/w/wy99gt-tek"}, {"audio": 0, "start": 1435307, "crunched": 0, "end": 1436311, "filename": "/home/web_user/.terminfo/w/wyse50-wvb"}, {"audio": 0, "start": 1436311, "crunched": 0, "end": 1438073, "filename": "/home/web_user/.terminfo/w/wyse520-pc-vb"}, {"audio": 0, "start": 1438073, "crunched": 0, "end": 1439330, "filename": "/home/web_user/.terminfo/w/wyse120"}, {"audio": 0, "start": 1439330, "crunched": 0, "end": 1440701, "filename": "/home/web_user/.terminfo/w/wyse60-vb"}, {"audio": 0, "start": 1440701, "crunched": 0, "end": 1441982, "filename": "/home/web_user/.terminfo/w/wyse120-vb"}, {"audio": 0, "start": 1441982, "crunched": 0, "end": 1443251, "filename": "/home/web_user/.terminfo/w/wy120-25"}, {"audio": 0, "start": 1443251, "crunched": 0, "end": 1444550, "filename": "/home/web_user/.terminfo/w/wy120-wvb"}, {"audio": 0, "start": 1444550, "crunched": 0, "end": 1445908, "filename": "/home/web_user/.terminfo/w/wy160-43-w"}, {"audio": 0, "start": 1445908, "crunched": 0, "end": 1447281, "filename": "/home/web_user/.terminfo/w/wy160-42"}, {"audio": 0, "start": 1447281, "crunched": 0, "end": 1449019, "filename": "/home/web_user/.terminfo/w/wyse75ap"}, {"audio": 0, "start": 1449019, "crunched": 0, "end": 1450392, "filename": "/home/web_user/.terminfo/w/wyse160-42"}, {"audio": 0, "start": 1450392, "crunched": 0, "end": 1452068, "filename": "/home/web_user/.terminfo/w/wy520-36"}, {"audio": 0, "start": 1452068, "crunched": 0, "end": 1453446, "filename": "/home/web_user/.terminfo/w/wyse160-42-w"}, {"audio": 0, "start": 1453446, "crunched": 0, "end": 1455160, "filename": "/home/web_user/.terminfo/w/wy520-epc-24"}, {"audio": 0, "start": 1455160, "crunched": 0, "end": 1456852, "filename": "/home/web_user/.terminfo/w/wy185"}, {"audio": 0, "start": 1456852, "crunched": 0, "end": 1458093, "filename": "/home/web_user/.terminfo/w/wy325-42w-vb"}, {"audio": 0, "start": 1458093, "crunched": 0, "end": 1459460, "filename": "/home/web_user/.terminfo/w/wyse160-w"}, {"audio": 0, "start": 1459460, "crunched": 0, "end": 1461140, "filename": "/home/web_user/.terminfo/w/wy520-48w"}, {"audio": 0, "start": 1461140, "crunched": 0, "end": 1462832, "filename": "/home/web_user/.terminfo/w/wyse185"}, {"audio": 0, "start": 1462832, "crunched": 0, "end": 1464488, "filename": "/home/web_user/.terminfo/w/wyse85-vb"}, {"audio": 0, "start": 1464488, "crunched": 0, "end": 1465739, "filename": "/home/web_user/.terminfo/w/wyse60-AT"}, {"audio": 0, "start": 1465739, "crunched": 0, "end": 1467006, "filename": "/home/web_user/.terminfo/w/wy120-w"}, {"audio": 0, "start": 1467006, "crunched": 0, "end": 1468475, "filename": "/home/web_user/.terminfo/w/wy350"}, {"audio": 0, "start": 1468475, "crunched": 0, "end": 1470500, "filename": "/home/web_user/.terminfo/w/wy370-rv"}, {"audio": 0, "start": 1470500, "crunched": 0, "end": 1471893, "filename": "/home/web_user/.terminfo/w/wyse99gt-25"}, {"audio": 0, "start": 1471893, "crunched": 0, "end": 1473613, "filename": "/home/web_user/.terminfo/w/wy520-48wpc"}, {"audio": 0, "start": 1473613, "crunched": 0, "end": 1475018, "filename": "/home/web_user/.terminfo/w/wy99gt-vb"}, {"audio": 0, "start": 1475018, "crunched": 0, "end": 1475526, "filename": "/home/web_user/.terminfo/w/wyse-vp"}, {"audio": 0, "start": 1475526, "crunched": 0, "end": 1476900, "filename": "/home/web_user/.terminfo/w/wyse60-43-w"}, {"audio": 0, "start": 1476900, "crunched": 0, "end": 1478133, "filename": "/home/web_user/.terminfo/w/wy325-vb"}, {"audio": 0, "start": 1478133, "crunched": 0, "end": 1479849, "filename": "/home/web_user/.terminfo/w/wyse520-36pc"}, {"audio": 0, "start": 1479849, "crunched": 0, "end": 1481244, "filename": "/home/web_user/.terminfo/w/wyse99gt-25-w"}, {"audio": 0, "start": 1481244, "crunched": 0, "end": 1482599, "filename": "/home/web_user/.terminfo/w/wy60"}, {"audio": 0, "start": 1482599, "crunched": 0, "end": 1484273, "filename": "/home/web_user/.terminfo/w/wyse520"}, {"audio": 0, "start": 1484273, "crunched": 0, "end": 1486298, "filename": "/home/web_user/.terminfo/w/wy370-w"}, {"audio": 0, "start": 1486298, "crunched": 0, "end": 1487986, "filename": "/home/web_user/.terminfo/w/wyse75-mc"}, {"audio": 0, "start": 1487986, "crunched": 0, "end": 1488951, "filename": "/home/web_user/.terminfo/w/wy160-tek"}, {"audio": 0, "start": 1488951, "crunched": 0, "end": 1490176, "filename": "/home/web_user/.terminfo/w/wy325-25"}, {"audio": 0, "start": 1490176, "crunched": 0, "end": 1491457, "filename": "/home/web_user/.terminfo/w/wyse150-vb"}, {"audio": 0, "start": 1491457, "crunched": 0, "end": 1492498, "filename": "/home/web_user/.terminfo/w/wyse30-mc"}, {"audio": 0, "start": 1492498, "crunched": 0, "end": 1493894, "filename": "/home/web_user/.terminfo/w/wyse60-wvb"}, {"audio": 0, "start": 1493894, "crunched": 0, "end": 1494360, "filename": "/home/web_user/.terminfo/w/wy100q"}, {"audio": 0, "start": 1494360, "crunched": 0, "end": 1495787, "filename": "/home/web_user/.terminfo/w/wy99gt-w-vb"}, {"audio": 0, "start": 1495787, "crunched": 0, "end": 1497431, "filename": "/home/web_user/.terminfo/w/wy75"}, {"audio": 0, "start": 1497431, "crunched": 0, "end": 1499097, "filename": "/home/web_user/.terminfo/w/wyse75-vb"}, {"audio": 0, "start": 1499097, "crunched": 0, "end": 1500009, "filename": "/home/web_user/.terminfo/w/wy30-vb"}, {"audio": 0, "start": 1500009, "crunched": 0, "end": 1501729, "filename": "/home/web_user/.terminfo/w/wyse520-epc"}, {"audio": 0, "start": 1501729, "crunched": 0, "end": 1503092, "filename": "/home/web_user/.terminfo/w/wy60-43"}, {"audio": 0, "start": 1503092, "crunched": 0, "end": 1504579, "filename": "/home/web_user/.terminfo/w/wy350-vb"}, {"audio": 0, "start": 1504579, "crunched": 0, "end": 1506295, "filename": "/home/web_user/.terminfo/w/wy520-36pc"}, {"audio": 0, "start": 1506295, "crunched": 0, "end": 1508011, "filename": "/home/web_user/.terminfo/w/wy185-w"}, {"audio": 0, "start": 1508011, "crunched": 0, "end": 1509731, "filename": "/home/web_user/.terminfo/w/wy520-36wpc"}, {"audio": 0, "start": 1509731, "crunched": 0, "end": 1510719, "filename": "/home/web_user/.terminfo/w/wy50-w"}, {"audio": 0, "start": 1510719, "crunched": 0, "end": 1511828, "filename": "/home/web_user/.terminfo/w/wy50-mc"}, {"audio": 0, "start": 1511828, "crunched": 0, "end": 1512724, "filename": "/home/web_user/.terminfo/w/wy30"}, {"audio": 0, "start": 1512724, "crunched": 0, "end": 1514394, "filename": "/home/web_user/.terminfo/w/wy520-24"}, {"audio": 0, "start": 1514394, "crunched": 0, "end": 1515929, "filename": "/home/web_user/.terminfo/w/wy99a-ansi"}, {"audio": 0, "start": 1515929, "crunched": 0, "end": 1517611, "filename": "/home/web_user/.terminfo/w/wy185-24"}, {"audio": 0, "start": 1517611, "crunched": 0, "end": 1519269, "filename": "/home/web_user/.terminfo/w/wy85-w"}, {"audio": 0, "start": 1519269, "crunched": 0, "end": 1520652, "filename": "/home/web_user/.terminfo/w/wyse60-42"}, {"audio": 0, "start": 1520652, "crunched": 0, "end": 1522328, "filename": "/home/web_user/.terminfo/w/wy520-48"}, {"audio": 0, "start": 1522328, "crunched": 0, "end": 1524066, "filename": "/home/web_user/.terminfo/w/wyse-75ap"}, {"audio": 0, "start": 1524066, "crunched": 0, "end": 1525460, "filename": "/home/web_user/.terminfo/w/wy60-42-w"}, {"audio": 0, "start": 1525460, "crunched": 0, "end": 1527343, "filename": "/home/web_user/.terminfo/w/wy370-nk"}, {"audio": 0, "start": 1527343, "crunched": 0, "end": 1528600, "filename": "/home/web_user/.terminfo/w/wyse150"}, {"audio": 0, "start": 1528600, "crunched": 0, "end": 1529881, "filename": "/home/web_user/.terminfo/w/wy150-vb"}, {"audio": 0, "start": 1529881, "crunched": 0, "end": 1531270, "filename": "/home/web_user/.terminfo/w/wy99gt"}, {"audio": 0, "start": 1531270, "crunched": 0, "end": 1532511, "filename": "/home/web_user/.terminfo/w/wy325-43w-vb"}, {"audio": 0, "start": 1532511, "crunched": 0, "end": 1533905, "filename": "/home/web_user/.terminfo/w/wyse60-42-w"}, {"audio": 0, "start": 1533905, "crunched": 0, "end": 1534893, "filename": "/home/web_user/.terminfo/w/wyse50-w"}, {"audio": 0, "start": 1534893, "crunched": 0, "end": 1535789, "filename": "/home/web_user/.terminfo/w/wyse30"}, {"audio": 0, "start": 1535789, "crunched": 0, "end": 1537088, "filename": "/home/web_user/.terminfo/w/wy150-w-vb"}, {"audio": 0, "start": 1537088, "crunched": 0, "end": 1538329, "filename": "/home/web_user/.terminfo/w/wy325-42wvb"}, {"audio": 0, "start": 1538329, "crunched": 0, "end": 1540067, "filename": "/home/web_user/.terminfo/w/wy-75ap"}, {"audio": 0, "start": 1540067, "crunched": 0, "end": 1541108, "filename": "/home/web_user/.terminfo/w/wy30-mc"}, {"audio": 0, "start": 1541108, "crunched": 0, "end": 1542351, "filename": "/home/web_user/.terminfo/w/wyse325-wvb"}, {"audio": 0, "start": 1542351, "crunched": 0, "end": 1543750, "filename": "/home/web_user/.terminfo/w/wyse99gt-w"}, {"audio": 0, "start": 1543750, "crunched": 0, "end": 1544959, "filename": "/home/web_user/.terminfo/w/wyse325-43w"}, {"audio": 0, "start": 1544959, "crunched": 0, "end": 1546258, "filename": "/home/web_user/.terminfo/w/wyse150-w-vb"}, {"audio": 0, "start": 1546258, "crunched": 0, "end": 1547501, "filename": "/home/web_user/.terminfo/w/wy325-wvb"}, {"audio": 0, "start": 1547501, "crunched": 0, "end": 1548742, "filename": "/home/web_user/.terminfo/w/wy325-43wvb"}, {"audio": 0, "start": 1548742, "crunched": 0, "end": 1550112, "filename": "/home/web_user/.terminfo/w/wy60-w"}, {"audio": 0, "start": 1550112, "crunched": 0, "end": 1551411, "filename": "/home/web_user/.terminfo/w/wy120-w-vb"}, {"audio": 0, "start": 1551411, "crunched": 0, "end": 1552785, "filename": "/home/web_user/.terminfo/w/wy60-43-w"}, {"audio": 0, "start": 1552785, "crunched": 0, "end": 1554451, "filename": "/home/web_user/.terminfo/w/wyse75-w"}, {"audio": 0, "start": 1554451, "crunched": 0, "end": 1556167, "filename": "/home/web_user/.terminfo/w/wyse185-w"}, {"audio": 0, "start": 1556167, "crunched": 0, "end": 1557526, "filename": "/home/web_user/.terminfo/w/wyse60-25"}, {"audio": 0, "start": 1557526, "crunched": 0, "end": 1558803, "filename": "/home/web_user/.terminfo/w/wy99fgta"}, {"audio": 0, "start": 1558803, "crunched": 0, "end": 1559801, "filename": "/home/web_user/.terminfo/w/wyse50-vb"}, {"audio": 0, "start": 1559801, "crunched": 0, "end": 1561026, "filename": "/home/web_user/.terminfo/w/wyse-325"}, {"audio": 0, "start": 1561026, "crunched": 0, "end": 1562431, "filename": "/home/web_user/.terminfo/w/wyse99gt-vb"}, {"audio": 0, "start": 1562431, "crunched": 0, "end": 1564475, "filename": "/home/web_user/.terminfo/w/wyse370"}, {"audio": 0, "start": 1564475, "crunched": 0, "end": 1565846, "filename": "/home/web_user/.terminfo/w/wy60-vb"}, {"audio": 0, "start": 1565846, "crunched": 0, "end": 1567566, "filename": "/home/web_user/.terminfo/w/wy520-epc"}, {"audio": 0, "start": 1567566, "crunched": 0, "end": 1568944, "filename": "/home/web_user/.terminfo/w/wy160-42-w"}, {"audio": 0, "start": 1568944, "crunched": 0, "end": 1570662, "filename": "/home/web_user/.terminfo/w/wy520-vb"}, {"audio": 0, "start": 1570662, "crunched": 0, "end": 1572328, "filename": "/home/web_user/.terminfo/w/wy75-vb"}, {"audio": 0, "start": 1572328, "crunched": 0, "end": 1573597, "filename": "/home/web_user/.terminfo/w/wyse150-25"}, {"audio": 0, "start": 1573597, "crunched": 0, "end": 1574868, "filename": "/home/web_user/.terminfo/w/wy99f"}, {"audio": 0, "start": 1574868, "crunched": 0, "end": 1576556, "filename": "/home/web_user/.terminfo/w/wy75-mc"}, {"audio": 0, "start": 1576556, "crunched": 0, "end": 1578043, "filename": "/home/web_user/.terminfo/w/wyse350-vb"}, {"audio": 0, "start": 1578043, "crunched": 0, "end": 1579152, "filename": "/home/web_user/.terminfo/w/wyse50-mc"}, {"audio": 0, "start": 1579152, "crunched": 0, "end": 1580419, "filename": "/home/web_user/.terminfo/w/wy150-w"}, {"audio": 0, "start": 1580419, "crunched": 0, "end": 1581686, "filename": "/home/web_user/.terminfo/w/wyse150-w"}, {"audio": 0, "start": 1581686, "crunched": 0, "end": 1582953, "filename": "/home/web_user/.terminfo/w/wy120-25-w"}, {"audio": 0, "start": 1582953, "crunched": 0, "end": 1584224, "filename": "/home/web_user/.terminfo/w/wy-99fgt"}, {"audio": 0, "start": 1584224, "crunched": 0, "end": 1585423, "filename": "/home/web_user/.terminfo/w/wyse325-25w"}, {"audio": 0, "start": 1585423, "crunched": 0, "end": 1587105, "filename": "/home/web_user/.terminfo/w/wyse185-24"}, {"audio": 0, "start": 1587105, "crunched": 0, "end": 1588334, "filename": "/home/web_user/.terminfo/w/wy325w-24"}, {"audio": 0, "start": 1588334, "crunched": 0, "end": 1589687, "filename": "/home/web_user/.terminfo/w/wyse160-43"}, {"audio": 0, "start": 1589687, "crunched": 0, "end": 1591046, "filename": "/home/web_user/.terminfo/w/wy60-25"}, {"audio": 0, "start": 1591046, "crunched": 0, "end": 1592760, "filename": "/home/web_user/.terminfo/w/wy185-wvb"}, {"audio": 0, "start": 1592760, "crunched": 0, "end": 1594502, "filename": "/home/web_user/.terminfo/w/wy520-epc-w"}, {"audio": 0, "start": 1594502, "crunched": 0, "end": 1596160, "filename": "/home/web_user/.terminfo/w/wyse85-w"}, {"audio": 0, "start": 1596160, "crunched": 0, "end": 1597902, "filename": "/home/web_user/.terminfo/w/wyse520-epc-w"}, {"audio": 0, "start": 1597902, "crunched": 0, "end": 1599109, "filename": "/home/web_user/.terminfo/w/wyse325-43"}, {"audio": 0, "start": 1599109, "crunched": 0, "end": 1600462, "filename": "/home/web_user/.terminfo/w/wy160-43"}, {"audio": 0, "start": 1600462, "crunched": 0, "end": 1602236, "filename": "/home/web_user/.terminfo/w/wy520-epc-wvb"}, {"audio": 0, "start": 1602236, "crunched": 0, "end": 1603604, "filename": "/home/web_user/.terminfo/w/wyse160-vb"}, {"audio": 0, "start": 1603604, "crunched": 0, "end": 1605284, "filename": "/home/web_user/.terminfo/w/wy75-wvb"}, {"audio": 0, "start": 1605284, "crunched": 0, "end": 1607058, "filename": "/home/web_user/.terminfo/w/wyse520-p-wvb"}, {"audio": 0, "start": 1607058, "crunched": 0, "end": 1608233, "filename": "/home/web_user/.terminfo/w/wsiris"}, {"audio": 0, "start": 1608233, "crunched": 0, "end": 1609963, "filename": "/home/web_user/.terminfo/w/wyse520-wvb"}, {"audio": 0, "start": 1609963, "crunched": 0, "end": 1610578, "filename": "/home/web_user/.terminfo/w/wren"}, {"audio": 0, "start": 1610578, "crunched": 0, "end": 1612055, "filename": "/home/web_user/.terminfo/w/wyse350-w"}, {"audio": 0, "start": 1612055, "crunched": 0, "end": 1613751, "filename": "/home/web_user/.terminfo/w/wy520-w"}, {"audio": 0, "start": 1613751, "crunched": 0, "end": 1614755, "filename": "/home/web_user/.terminfo/w/wy50-wvb"}, {"audio": 0, "start": 1614755, "crunched": 0, "end": 1616457, "filename": "/home/web_user/.terminfo/w/wyse185-vb"}, {"audio": 0, "start": 1616457, "crunched": 0, "end": 1617818, "filename": "/home/web_user/.terminfo/w/wyse160-25-w"}, {"audio": 0, "start": 1617818, "crunched": 0, "end": 1619238, "filename": "/home/web_user/.terminfo/3/386at"}, {"audio": 0, "start": 1619238, "crunched": 0, "end": 1620249, "filename": "/home/web_user/.terminfo/3/3b1"}, {"audio": 0, "start": 1620249, "crunched": 0, "end": 1621394, "filename": "/home/web_user/.terminfo/P/P9"}, {"audio": 0, "start": 1621394, "crunched": 0, "end": 1622534, "filename": "/home/web_user/.terminfo/P/P14-W"}, {"audio": 0, "start": 1622534, "crunched": 0, "end": 1623674, "filename": "/home/web_user/.terminfo/P/P12-W"}, {"audio": 0, "start": 1623674, "crunched": 0, "end": 1624288, "filename": "/home/web_user/.terminfo/P/P8-W"}, {"audio": 0, "start": 1624288, "crunched": 0, "end": 1624841, "filename": "/home/web_user/.terminfo/P/P7"}, {"audio": 0, "start": 1624841, "crunched": 0, "end": 1625584, "filename": "/home/web_user/.terminfo/P/P5"}, {"audio": 0, "start": 1625584, "crunched": 0, "end": 1626278, "filename": "/home/web_user/.terminfo/P/P9-8-W"}, {"audio": 0, "start": 1626278, "crunched": 0, "end": 1627427, "filename": "/home/web_user/.terminfo/P/P12"}, {"audio": 0, "start": 1627427, "crunched": 0, "end": 1628170, "filename": "/home/web_user/.terminfo/P/P4"}, {"audio": 0, "start": 1628170, "crunched": 0, "end": 1629319, "filename": "/home/web_user/.terminfo/P/P14"}, {"audio": 0, "start": 1629319, "crunched": 0, "end": 1629985, "filename": "/home/web_user/.terminfo/P/P14-M"}, {"audio": 0, "start": 1629985, "crunched": 0, "end": 1631121, "filename": "/home/web_user/.terminfo/P/P9-W"}, {"audio": 0, "start": 1631121, "crunched": 0, "end": 1631787, "filename": "/home/web_user/.terminfo/P/P12-M"}, {"audio": 0, "start": 1631787, "crunched": 0, "end": 1632481, "filename": "/home/web_user/.terminfo/P/P14-M-W"}, {"audio": 0, "start": 1632481, "crunched": 0, "end": 1633175, "filename": "/home/web_user/.terminfo/P/P12-M-W"}, {"audio": 0, "start": 1633175, "crunched": 0, "end": 1633827, "filename": "/home/web_user/.terminfo/P/P9-8"}, {"audio": 0, "start": 1633827, "crunched": 0, "end": 1634409, "filename": "/home/web_user/.terminfo/P/P8"}, {"audio": 0, "start": 1634409, "crunched": 0, "end": 1635904, "filename": "/home/web_user/.terminfo/j/jaixterm-m"}, {"audio": 0, "start": 1635904, "crunched": 0, "end": 1636394, "filename": "/home/web_user/.terminfo/j/jerq"}, {"audio": 0, "start": 1636394, "crunched": 0, "end": 1638104, "filename": "/home/web_user/.terminfo/j/jfbterm"}, {"audio": 0, "start": 1638104, "crunched": 0, "end": 1639915, "filename": "/home/web_user/.terminfo/j/jaixterm"}, {"audio": 0, "start": 1639915, "crunched": 0, "end": 1640314, "filename": "/home/web_user/.terminfo/i/ibm5051"}, {"audio": 0, "start": 1640314, "crunched": 0, "end": 1641276, "filename": "/home/web_user/.terminfo/i/ibm+color"}, {"audio": 0, "start": 1641276, "crunched": 0, "end": 1643084, "filename": "/home/web_user/.terminfo/i/ibm6154"}, {"audio": 0, "start": 1643084, "crunched": 0, "end": 1645168, "filename": "/home/web_user/.terminfo/i/iterm"}, {"audio": 0, "start": 1645168, "crunched": 0, "end": 1646397, "filename": "/home/web_user/.terminfo/i/ibm6153-90"}, {"audio": 0, "start": 1646397, "crunched": 0, "end": 1647012, "filename": "/home/web_user/.terminfo/i/ibmmpel-c"}, {"audio": 0, "start": 1647012, "crunched": 0, "end": 1648917, "filename": "/home/web_user/.terminfo/i/ibm8512"}, {"audio": 0, "start": 1648917, "crunched": 0, "end": 1649373, "filename": "/home/web_user/.terminfo/i/i100"}, {"audio": 0, "start": 1649373, "crunched": 0, "end": 1651203, "filename": "/home/web_user/.terminfo/i/ibm8604"}, {"audio": 0, "start": 1651203, "crunched": 0, "end": 1653033, "filename": "/home/web_user/.terminfo/i/ibm8503"}, {"audio": 0, "start": 1653033, "crunched": 0, "end": 1653455, "filename": "/home/web_user/.terminfo/i/ibm3101"}, {"audio": 0, "start": 1653455, "crunched": 0, "end": 1654170, "filename": "/home/web_user/.terminfo/i/icl6402"}, {"audio": 0, "start": 1654170, "crunched": 0, "end": 1654721, "filename": "/home/web_user/.terminfo/i/ibmvga"}, {"audio": 0, "start": 1654721, "crunched": 0, "end": 1654806, "filename": "/home/web_user/.terminfo/i/ibm327x"}, {"audio": 0, "start": 1654806, "crunched": 0, "end": 1655381, "filename": "/home/web_user/.terminfo/i/ibmvga-c"}, {"audio": 0, "start": 1655381, "crunched": 0, "end": 1656096, "filename": "/home/web_user/.terminfo/i/icl6404"}, {"audio": 0, "start": 1656096, "crunched": 0, "end": 1656659, "filename": "/home/web_user/.terminfo/i/ibmmono"}, {"audio": 0, "start": 1656659, "crunched": 0, "end": 1657853, "filename": "/home/web_user/.terminfo/i/ibmpcx"}, {"audio": 0, "start": 1657853, "crunched": 0, "end": 1659374, "filename": "/home/web_user/.terminfo/i/interix-nti"}, {"audio": 0, "start": 1659374, "crunched": 0, "end": 1659860, "filename": "/home/web_user/.terminfo/i/iq140"}, {"audio": 0, "start": 1659860, "crunched": 0, "end": 1661185, "filename": "/home/web_user/.terminfo/i/ibmpc3"}, {"audio": 0, "start": 1661185, "crunched": 0, "end": 1662991, "filename": "/home/web_user/.terminfo/i/ibm5081"}, {"audio": 0, "start": 1662991, "crunched": 0, "end": 1663595, "filename": "/home/web_user/.terminfo/i/ibm6154-c"}, {"audio": 0, "start": 1663595, "crunched": 0, "end": 1665985, "filename": "/home/web_user/.terminfo/i/iterm2"}, {"audio": 0, "start": 1665985, "crunched": 0, "end": 1666944, "filename": "/home/web_user/.terminfo/i/iq120"}, {"audio": 0, "start": 1666944, "crunched": 0, "end": 1667406, "filename": "/home/web_user/.terminfo/i/ips"}, {"audio": 0, "start": 1667406, "crunched": 0, "end": 1668422, "filename": "/home/web_user/.terminfo/i/ibm3163"}, {"audio": 0, "start": 1668422, "crunched": 0, "end": 1668848, "filename": "/home/web_user/.terminfo/i/i400"}, {"audio": 0, "start": 1668848, "crunched": 0, "end": 1669470, "filename": "/home/web_user/.terminfo/i/ims950-rv"}, {"audio": 0, "start": 1669470, "crunched": 0, "end": 1670049, "filename": "/home/web_user/.terminfo/i/ibmapa8c"}, {"audio": 0, "start": 1670049, "crunched": 0, "end": 1671559, "filename": "/home/web_user/.terminfo/i/ibmpc3r"}, {"audio": 0, "start": 1671559, "crunched": 0, "end": 1672174, "filename": "/home/web_user/.terminfo/i/ibm5081-c"}, {"audio": 0, "start": 1672174, "crunched": 0, "end": 1674004, "filename": "/home/web_user/.terminfo/i/ibm8507"}, {"audio": 0, "start": 1674004, "crunched": 0, "end": 1674808, "filename": "/home/web_user/.terminfo/i/ibmpc"}, {"audio": 0, "start": 1674808, "crunched": 0, "end": 1675824, "filename": "/home/web_user/.terminfo/i/ibm3161"}, {"audio": 0, "start": 1675824, "crunched": 0, "end": 1676411, "filename": "/home/web_user/.terminfo/i/ibmapa16"}, {"audio": 0, "start": 1676411, "crunched": 0, "end": 1677903, "filename": "/home/web_user/.terminfo/i/ibm6153"}, {"audio": 0, "start": 1677903, "crunched": 0, "end": 1679031, "filename": "/home/web_user/.terminfo/i/iris-ansi"}, {"audio": 0, "start": 1679031, "crunched": 0, "end": 1680555, "filename": "/home/web_user/.terminfo/i/ibmpc3r-mono"}, {"audio": 0, "start": 1680555, "crunched": 0, "end": 1681683, "filename": "/home/web_user/.terminfo/i/iris-ansi-net"}, {"audio": 0, "start": 1681683, "crunched": 0, "end": 1682093, "filename": "/home/web_user/.terminfo/i/intertec"}, {"audio": 0, "start": 1682093, "crunched": 0, "end": 1682672, "filename": "/home/web_user/.terminfo/i/ibmapa8"}, {"audio": 0, "start": 1682672, "crunched": 0, "end": 1684456, "filename": "/home/web_user/.terminfo/i/ibm5154"}, {"audio": 0, "start": 1684456, "crunched": 0, "end": 1685707, "filename": "/home/web_user/.terminfo/i/ibm5151"}, {"audio": 0, "start": 1685707, "crunched": 0, "end": 1687791, "filename": "/home/web_user/.terminfo/i/iTerm.app"}, {"audio": 0, "start": 1687791, "crunched": 0, "end": 1688374, "filename": "/home/web_user/.terminfo/i/ims-ansi"}, {"audio": 0, "start": 1688374, "crunched": 0, "end": 1688978, "filename": "/home/web_user/.terminfo/i/ibmapa8c-c"}, {"audio": 0, "start": 1688978, "crunched": 0, "end": 1690065, "filename": "/home/web_user/.terminfo/i/iris-ansi-ap"}, {"audio": 0, "start": 1690065, "crunched": 0, "end": 1691602, "filename": "/home/web_user/.terminfo/i/interix"}, {"audio": 0, "start": 1691602, "crunched": 0, "end": 1692315, "filename": "/home/web_user/.terminfo/i/icl6404-w"}, {"audio": 0, "start": 1692315, "crunched": 0, "end": 1693601, "filename": "/home/web_user/.terminfo/i/ibm3151"}, {"audio": 0, "start": 1693601, "crunched": 0, "end": 1694075, "filename": "/home/web_user/.terminfo/i/intertube2"}, {"audio": 0, "start": 1694075, "crunched": 0, "end": 1694451, "filename": "/home/web_user/.terminfo/i/ibm-system1"}, {"audio": 0, "start": 1694451, "crunched": 0, "end": 1695471, "filename": "/home/web_user/.terminfo/i/ibcs2"}, {"audio": 0, "start": 1695471, "crunched": 0, "end": 1696080, "filename": "/home/web_user/.terminfo/i/ibm5154-c"}, {"audio": 0, "start": 1696080, "crunched": 0, "end": 1697309, "filename": "/home/web_user/.terminfo/i/ibm6153-40"}, {"audio": 0, "start": 1697309, "crunched": 0, "end": 1697872, "filename": "/home/web_user/.terminfo/i/intext"}, {"audio": 0, "start": 1697872, "crunched": 0, "end": 1699158, "filename": "/home/web_user/.terminfo/i/ibm3161-C"}, {"audio": 0, "start": 1699158, "crunched": 0, "end": 1700591, "filename": "/home/web_user/.terminfo/i/iris-color"}, {"audio": 0, "start": 1700591, "crunched": 0, "end": 1701936, "filename": "/home/web_user/.terminfo/i/i3164"}, {"audio": 0, "start": 1701936, "crunched": 0, "end": 1703161, "filename": "/home/web_user/.terminfo/i/ibm6155"}, {"audio": 0, "start": 1703161, "crunched": 0, "end": 1703552, "filename": "/home/web_user/.terminfo/i/ipsi"}, {"audio": 0, "start": 1703552, "crunched": 0, "end": 1705457, "filename": "/home/web_user/.terminfo/i/ibm8513"}, {"audio": 0, "start": 1705457, "crunched": 0, "end": 1706086, "filename": "/home/web_user/.terminfo/i/ims950"}, {"audio": 0, "start": 1706086, "crunched": 0, "end": 1708476, "filename": "/home/web_user/.terminfo/i/iTerm2.app"}, {"audio": 0, "start": 1708476, "crunched": 0, "end": 1709574, "filename": "/home/web_user/.terminfo/i/ibm+16color"}, {"audio": 0, "start": 1709574, "crunched": 0, "end": 1710218, "filename": "/home/web_user/.terminfo/i/intextii"}, {"audio": 0, "start": 1710218, "crunched": 0, "end": 1710862, "filename": "/home/web_user/.terminfo/i/intext2"}, {"audio": 0, "start": 1710862, "crunched": 0, "end": 1712691, "filename": "/home/web_user/.terminfo/i/ibm8514"}, {"audio": 0, "start": 1712691, "crunched": 0, "end": 1714036, "filename": "/home/web_user/.terminfo/i/ibm3164"}, {"audio": 0, "start": 1714036, "crunched": 0, "end": 1716480, "filename": "/home/web_user/.terminfo/i/iterm2-direct"}, {"audio": 0, "start": 1716480, "crunched": 0, "end": 1717747, "filename": "/home/web_user/.terminfo/i/ibm3162"}, {"audio": 0, "start": 1717747, "crunched": 0, "end": 1718922, "filename": "/home/web_user/.terminfo/i/iris40"}, {"audio": 0, "start": 1718922, "crunched": 0, "end": 1719531, "filename": "/home/web_user/.terminfo/i/ibmega-c"}, {"audio": 0, "start": 1719531, "crunched": 0, "end": 1719979, "filename": "/home/web_user/.terminfo/i/ibmaed"}, {"audio": 0, "start": 1719979, "crunched": 0, "end": 1720403, "filename": "/home/web_user/.terminfo/i/ibm-apl"}, {"audio": 0, "start": 1720403, "crunched": 0, "end": 1720712, "filename": "/home/web_user/.terminfo/i/infoton"}, {"audio": 0, "start": 1720712, "crunched": 0, "end": 1721115, "filename": "/home/web_user/.terminfo/i/ifmr"}, {"audio": 0, "start": 1721115, "crunched": 0, "end": 1721537, "filename": "/home/web_user/.terminfo/i/i3101"}, {"audio": 0, "start": 1721537, "crunched": 0, "end": 1721947, "filename": "/home/web_user/.terminfo/i/intertube"}, {"audio": 0, "start": 1721947, "crunched": 0, "end": 1722505, "filename": "/home/web_user/.terminfo/i/ims950-b"}, {"audio": 0, "start": 1722505, "crunched": 0, "end": 1723699, "filename": "/home/web_user/.terminfo/i/ibmx"}, {"audio": 0, "start": 1723699, "crunched": 0, "end": 1724296, "filename": "/home/web_user/.terminfo/i/ibm8514-c"}, {"audio": 0, "start": 1724296, "crunched": 0, "end": 1724857, "filename": "/home/web_user/.terminfo/i/ibmega"}, {"audio": 0, "start": 1724857, "crunched": 0, "end": 1725256, "filename": "/home/web_user/.terminfo/i/ibm-pc"}, {"audio": 0, "start": 1725256, "crunched": 0, "end": 1725687, "filename": "/home/web_user/.terminfo/8/8510"}, {"audio": 0, "start": 1725687, "crunched": 0, "end": 1726222, "filename": "/home/web_user/.terminfo/z/ztx-1-a"}, {"audio": 0, "start": 1726222, "crunched": 0, "end": 1726668, "filename": "/home/web_user/.terminfo/z/z30"}, {"audio": 0, "start": 1726668, "crunched": 0, "end": 1727792, "filename": "/home/web_user/.terminfo/z/z39-a"}, {"audio": 0, "start": 1727792, "crunched": 0, "end": 1728327, "filename": "/home/web_user/.terminfo/z/zt-1"}, {"audio": 0, "start": 1728327, "crunched": 0, "end": 1729034, "filename": "/home/web_user/.terminfo/z/z110"}, {"audio": 0, "start": 1729034, "crunched": 0, "end": 1730253, "filename": "/home/web_user/.terminfo/z/z29b"}, {"audio": 0, "start": 1730253, "crunched": 0, "end": 1731728, "filename": "/home/web_user/.terminfo/z/z29a-kc-bc"}, {"audio": 0, "start": 1731728, "crunched": 0, "end": 1732852, "filename": "/home/web_user/.terminfo/z/z39a"}, {"audio": 0, "start": 1732852, "crunched": 0, "end": 1733976, "filename": "/home/web_user/.terminfo/z/zenith39-a"}, {"audio": 0, "start": 1733976, "crunched": 0, "end": 1734683, "filename": "/home/web_user/.terminfo/z/z100"}, {"audio": 0, "start": 1734683, "crunched": 0, "end": 1736171, "filename": "/home/web_user/.terminfo/z/z29a-kc-uc"}, {"audio": 0, "start": 1736171, "crunched": 0, "end": 1737662, "filename": "/home/web_user/.terminfo/z/z29a-nkc-bc"}, {"audio": 0, "start": 1737662, "crunched": 0, "end": 1737998, "filename": "/home/web_user/.terminfo/z/z50"}, {"audio": 0, "start": 1737998, "crunched": 0, "end": 1738687, "filename": "/home/web_user/.terminfo/z/z-100bw"}, {"audio": 0, "start": 1738687, "crunched": 0, "end": 1739376, "filename": "/home/web_user/.terminfo/z/z100bw"}, {"audio": 0, "start": 1739376, "crunched": 0, "end": 1740003, "filename": "/home/web_user/.terminfo/z/z19"}, {"audio": 0, "start": 1740003, "crunched": 0, "end": 1740692, "filename": "/home/web_user/.terminfo/z/z110bw"}, {"audio": 0, "start": 1740692, "crunched": 0, "end": 1741399, "filename": "/home/web_user/.terminfo/z/z-100"}, {"audio": 0, "start": 1741399, "crunched": 0, "end": 1742618, "filename": "/home/web_user/.terminfo/z/z29"}, {"audio": 0, "start": 1742618, "crunched": 0, "end": 1744265, "filename": "/home/web_user/.terminfo/z/z340-nam"}, {"audio": 0, "start": 1744265, "crunched": 0, "end": 1744800, "filename": "/home/web_user/.terminfo/z/ztx11"}, {"audio": 0, "start": 1744800, "crunched": 0, "end": 1745427, "filename": "/home/web_user/.terminfo/z/zenith"}, {"audio": 0, "start": 1745427, "crunched": 0, "end": 1746551, "filename": "/home/web_user/.terminfo/z/zenith39-ansi"}, {"audio": 0, "start": 1746551, "crunched": 0, "end": 1748026, "filename": "/home/web_user/.terminfo/z/z29a"}, {"audio": 0, "start": 1748026, "crunched": 0, "end": 1749521, "filename": "/home/web_user/.terminfo/z/z29a-nkc-uc"}, {"audio": 0, "start": 1749521, "crunched": 0, "end": 1749857, "filename": "/home/web_user/.terminfo/z/zen50"}, {"audio": 0, "start": 1749857, "crunched": 0, "end": 1751476, "filename": "/home/web_user/.terminfo/z/z340"}, {"audio": 0, "start": 1751476, "crunched": 0, "end": 1752003, "filename": "/home/web_user/.terminfo/z/zen8001"}, {"audio": 0, "start": 1752003, "crunched": 0, "end": 1752530, "filename": "/home/web_user/.terminfo/z/z8001"}, {"audio": 0, "start": 1752530, "crunched": 0, "end": 1753065, "filename": "/home/web_user/.terminfo/z/ztx"}, {"audio": 0, "start": 1753065, "crunched": 0, "end": 1754284, "filename": "/home/web_user/.terminfo/z/zenith29"}, {"audio": 0, "start": 1754284, "crunched": 0, "end": 1754730, "filename": "/home/web_user/.terminfo/z/zen30"}, {"audio": 0, "start": 1754730, "crunched": 0, "end": 1755314, "filename": "/home/web_user/.terminfo/q/qvt101"}, {"audio": 0, "start": 1755314, "crunched": 0, "end": 1755899, "filename": "/home/web_user/.terminfo/q/qvt119p"}, {"audio": 0, "start": 1755899, "crunched": 0, "end": 1757288, "filename": "/home/web_user/.terminfo/q/qnxtmono"}, {"audio": 0, "start": 1757288, "crunched": 0, "end": 1757652, "filename": "/home/web_user/.terminfo/q/qume"}, {"audio": 0, "start": 1757652, "crunched": 0, "end": 1758237, "filename": "/home/web_user/.terminfo/q/qvt119"}, {"audio": 0, "start": 1758237, "crunched": 0, "end": 1759711, "filename": "/home/web_user/.terminfo/q/qnxm"}, {"audio": 0, "start": 1759711, "crunched": 0, "end": 1761680, "filename": "/home/web_user/.terminfo/q/qansi"}, {"audio": 0, "start": 1761680, "crunched": 0, "end": 1763804, "filename": "/home/web_user/.terminfo/q/qansi-w"}, {"audio": 0, "start": 1763804, "crunched": 0, "end": 1764399, "filename": "/home/web_user/.terminfo/q/qvt119+-25-w"}, {"audio": 0, "start": 1764399, "crunched": 0, "end": 1765764, "filename": "/home/web_user/.terminfo/q/qnx4"}, {"audio": 0, "start": 1765764, "crunched": 0, "end": 1766345, "filename": "/home/web_user/.terminfo/q/qvt119p-25"}, {"audio": 0, "start": 1766345, "crunched": 0, "end": 1767809, "filename": "/home/web_user/.terminfo/q/qnxw"}, {"audio": 0, "start": 1767809, "crunched": 0, "end": 1768407, "filename": "/home/web_user/.terminfo/q/qvt119p-w"}, {"audio": 0, "start": 1768407, "crunched": 0, "end": 1769776, "filename": "/home/web_user/.terminfo/q/qnxt4"}, {"audio": 0, "start": 1769776, "crunched": 0, "end": 1770631, "filename": "/home/web_user/.terminfo/q/qvt203+"}, {"audio": 0, "start": 1770631, "crunched": 0, "end": 1772606, "filename": "/home/web_user/.terminfo/q/qansi-t"}, {"audio": 0, "start": 1772606, "crunched": 0, "end": 1773461, "filename": "/home/web_user/.terminfo/q/qvt203-25-w"}, {"audio": 0, "start": 1773461, "crunched": 0, "end": 1774349, "filename": "/home/web_user/.terminfo/q/qvt203-w"}, {"audio": 0, "start": 1774349, "crunched": 0, "end": 1774934, "filename": "/home/web_user/.terminfo/q/qvt119+"}, {"audio": 0, "start": 1774934, "crunched": 0, "end": 1775515, "filename": "/home/web_user/.terminfo/q/qvt119+-25"}, {"audio": 0, "start": 1775515, "crunched": 0, "end": 1776268, "filename": "/home/web_user/.terminfo/q/qvt103"}, {"audio": 0, "start": 1776268, "crunched": 0, "end": 1777633, "filename": "/home/web_user/.terminfo/q/qnx"}, {"audio": 0, "start": 1777633, "crunched": 0, "end": 1779572, "filename": "/home/web_user/.terminfo/q/qansi-g"}, {"audio": 0, "start": 1779572, "crunched": 0, "end": 1780941, "filename": "/home/web_user/.terminfo/q/qnxt"}, {"audio": 0, "start": 1780941, "crunched": 0, "end": 1782221, "filename": "/home/web_user/.terminfo/q/qnxt2"}, {"audio": 0, "start": 1782221, "crunched": 0, "end": 1784343, "filename": "/home/web_user/.terminfo/q/qansi-m"}, {"audio": 0, "start": 1784343, "crunched": 0, "end": 1784938, "filename": "/home/web_user/.terminfo/q/qvt119p-25-w"}, {"audio": 0, "start": 1784938, "crunched": 0, "end": 1785793, "filename": "/home/web_user/.terminfo/q/qvt203"}, {"audio": 0, "start": 1785793, "crunched": 0, "end": 1786681, "filename": "/home/web_user/.terminfo/q/qvt203-w-am"}, {"audio": 0, "start": 1786681, "crunched": 0, "end": 1787279, "filename": "/home/web_user/.terminfo/q/qvt119-w"}, {"audio": 0, "start": 1787279, "crunched": 0, "end": 1787431, "filename": "/home/web_user/.terminfo/q/qdcons"}, {"audio": 0, "start": 1787431, "crunched": 0, "end": 1788189, "filename": "/home/web_user/.terminfo/q/qvt103-w"}, {"audio": 0, "start": 1788189, "crunched": 0, "end": 1788784, "filename": "/home/web_user/.terminfo/q/qvt119-25-w"}, {"audio": 0, "start": 1788784, "crunched": 0, "end": 1789370, "filename": "/home/web_user/.terminfo/q/qvt101p"}, {"audio": 0, "start": 1789370, "crunched": 0, "end": 1789968, "filename": "/home/web_user/.terminfo/q/qvt119+-w"}, {"audio": 0, "start": 1789968, "crunched": 0, "end": 1790552, "filename": "/home/web_user/.terminfo/q/qvt108"}, {"audio": 0, "start": 1790552, "crunched": 0, "end": 1790916, "filename": "/home/web_user/.terminfo/q/qume5"}, {"audio": 0, "start": 1790916, "crunched": 0, "end": 1791068, "filename": "/home/web_user/.terminfo/q/qdss"}, {"audio": 0, "start": 1791068, "crunched": 0, "end": 1791951, "filename": "/home/web_user/.terminfo/q/qvt203-25"}, {"audio": 0, "start": 1791951, "crunched": 0, "end": 1792537, "filename": "/home/web_user/.terminfo/q/qvt101+"}, {"audio": 0, "start": 1792537, "crunched": 0, "end": 1793100, "filename": "/home/web_user/.terminfo/q/qvt102"}, {"audio": 0, "start": 1793100, "crunched": 0, "end": 1793496, "filename": "/home/web_user/.terminfo/l/luna68k"}, {"audio": 0, "start": 1793496, "crunched": 0, "end": 1793871, "filename": "/home/web_user/.terminfo/l/ln03"}, {"audio": 0, "start": 1793871, "crunched": 0, "end": 1795771, "filename": "/home/web_user/.terminfo/l/linux-16color"}, {"audio": 0, "start": 1795771, "crunched": 0, "end": 1796164, "filename": "/home/web_user/.terminfo/l/ln03-w"}, {"audio": 0, "start": 1796164, "crunched": 0, "end": 1796628, "filename": "/home/web_user/.terminfo/l/layer"}, {"audio": 0, "start": 1796628, "crunched": 0, "end": 1797360, "filename": "/home/web_user/.terminfo/l/lisaterm"}, {"audio": 0, "start": 1797360, "crunched": 0, "end": 1799182, "filename": "/home/web_user/.terminfo/l/linux"}, {"audio": 0, "start": 1799182, "crunched": 0, "end": 1799536, "filename": "/home/web_user/.terminfo/l/lpr"}, {"audio": 0, "start": 1799536, "crunched": 0, "end": 1801398, "filename": "/home/web_user/.terminfo/l/linux-lat"}, {"audio": 0, "start": 1801398, "crunched": 0, "end": 1802118, "filename": "/home/web_user/.terminfo/l/lisaterm-w"}, {"audio": 0, "start": 1802118, "crunched": 0, "end": 1802591, "filename": "/home/web_user/.terminfo/l/la120"}, {"audio": 0, "start": 1802591, "crunched": 0, "end": 1804343, "filename": "/home/web_user/.terminfo/l/linux-vt"}, {"audio": 0, "start": 1804343, "crunched": 0, "end": 1806143, "filename": "/home/web_user/.terminfo/l/linux-c-nc"}, {"audio": 0, "start": 1806143, "crunched": 0, "end": 1808054, "filename": "/home/web_user/.terminfo/l/linux-m2"}, {"audio": 0, "start": 1808054, "crunched": 0, "end": 1809879, "filename": "/home/web_user/.terminfo/l/linux2.6"}, {"audio": 0, "start": 1809879, "crunched": 0, "end": 1811707, "filename": "/home/web_user/.terminfo/l/linux3.0"}, {"audio": 0, "start": 1811707, "crunched": 0, "end": 1813514, "filename": "/home/web_user/.terminfo/l/linux-m1"}, {"audio": 0, "start": 1813514, "crunched": 0, "end": 1815370, "filename": "/home/web_user/.terminfo/l/linux-koi8r"}, {"audio": 0, "start": 1815370, "crunched": 0, "end": 1815933, "filename": "/home/web_user/.terminfo/l/liswb"}, {"audio": 0, "start": 1815933, "crunched": 0, "end": 1817755, "filename": "/home/web_user/.terminfo/l/linux2.2"}, {"audio": 0, "start": 1817755, "crunched": 0, "end": 1818151, "filename": "/home/web_user/.terminfo/l/luna"}, {"audio": 0, "start": 1818151, "crunched": 0, "end": 1819999, "filename": "/home/web_user/.terminfo/l/linux-koi8"}, {"audio": 0, "start": 1819999, "crunched": 0, "end": 1822153, "filename": "/home/web_user/.terminfo/l/linux-c"}, {"audio": 0, "start": 1822153, "crunched": 0, "end": 1823851, "filename": "/home/web_user/.terminfo/l/linux-basic"}, {"audio": 0, "start": 1823851, "crunched": 0, "end": 1825632, "filename": "/home/web_user/.terminfo/l/linux-m1b"}, {"audio": 0, "start": 1825632, "crunched": 0, "end": 1827484, "filename": "/home/web_user/.terminfo/l/linux-nic"}, {"audio": 0, "start": 1827484, "crunched": 0, "end": 1828779, "filename": "/home/web_user/.terminfo/l/lft"}, {"audio": 0, "start": 1828779, "crunched": 0, "end": 1830074, "filename": "/home/web_user/.terminfo/l/lft-pc850"}, {"audio": 0, "start": 1830074, "crunched": 0, "end": 1831886, "filename": "/home/web_user/.terminfo/l/linux-m"}, {"audio": 0, "start": 1831886, "crunched": 0, "end": 1833715, "filename": "/home/web_user/.terminfo/l/linux2.6.26"}, {"audio": 0, "start": 1833715, "crunched": 0, "end": 1834270, "filename": "/home/web_user/.terminfo/l/lisa"}, {"audio": 0, "start": 1834270, "crunched": 0, "end": 1835799, "filename": "/home/web_user/.terminfo/Q/Q306-8-pc"}, {"audio": 0, "start": 1835799, "crunched": 0, "end": 1837094, "filename": "/home/web_user/.terminfo/Q/Q310-vip-w"}, {"audio": 0, "start": 1837094, "crunched": 0, "end": 1838387, "filename": "/home/web_user/.terminfo/Q/Q310-vip-Hw"}, {"audio": 0, "start": 1838387, "crunched": 0, "end": 1839682, "filename": "/home/web_user/.terminfo/Q/Q310-vip-w-am"}, {"audio": 0, "start": 1839682, "crunched": 0, "end": 1840981, "filename": "/home/web_user/.terminfo/Q/Q310-vip-H"}, {"audio": 0, "start": 1840981, "crunched": 0, "end": 1842280, "filename": "/home/web_user/.terminfo/Q/Q310-vip-H-am"}, {"audio": 0, "start": 1842280, "crunched": 0, "end": 1844724, "filename": "/home/web_user/.terminfo/E/Eterm-88color"}, {"audio": 0, "start": 1844724, "crunched": 0, "end": 1846998, "filename": "/home/web_user/.terminfo/E/Eterm-color"}, {"audio": 0, "start": 1846998, "crunched": 0, "end": 1849272, "filename": "/home/web_user/.terminfo/E/Eterm"}, {"audio": 0, "start": 1849272, "crunched": 0, "end": 1851724, "filename": "/home/web_user/.terminfo/E/Eterm-256color"}, {"audio": 0, "start": 1851724, "crunched": 0, "end": 1854165, "filename": "/home/web_user/.terminfo/A/Apple_Terminal"}, {"audio": 0, "start": 1854165, "crunched": 0, "end": 1854981, "filename": "/home/web_user/.terminfo/6/6053-dg"}, {"audio": 0, "start": 1854981, "crunched": 0, "end": 1855797, "filename": "/home/web_user/.terminfo/6/6053"}, {"audio": 0, "start": 1855797, "crunched": 0, "end": 1856208, "filename": "/home/web_user/.terminfo/6/630-lm"}, {"audio": 0, "start": 1856208, "crunched": 0, "end": 1857328, "filename": "/home/web_user/.terminfo/6/630MTG-24"}, {"audio": 0, "start": 1857328, "crunched": 0, "end": 1858144, "filename": "/home/web_user/.terminfo/6/605x-dg"}, {"audio": 0, "start": 1858144, "crunched": 0, "end": 1858960, "filename": "/home/web_user/.terminfo/6/605x"}, {"audio": 0, "start": 1858960, "crunched": 0, "end": 1860341, "filename": "/home/web_user/.terminfo/X/X-hpterm"}, {"audio": 0, "start": 1860341, "crunched": 0, "end": 1862312, "filename": "/home/web_user/.terminfo/v/vt520ansi"}, {"audio": 0, "start": 1862312, "crunched": 0, "end": 1862969, "filename": "/home/web_user/.terminfo/v/vs100-x10"}, {"audio": 0, "start": 1862969, "crunched": 0, "end": 1863433, "filename": "/home/web_user/.terminfo/v/vitty"}, {"audio": 0, "start": 1863433, "crunched": 0, "end": 1864460, "filename": "/home/web_user/.terminfo/v/vt320-k3"}, {"audio": 0, "start": 1864460, "crunched": 0, "end": 1865324, "filename": "/home/web_user/.terminfo/v/viewdata-o"}, {"audio": 0, "start": 1865324, "crunched": 0, "end": 1865741, "filename": "/home/web_user/.terminfo/v/vi50adm"}, {"audio": 0, "start": 1865741, "crunched": 0, "end": 1867137, "filename": "/home/web_user/.terminfo/v/vv100"}, {"audio": 0, "start": 1867137, "crunched": 0, "end": 1867691, "filename": "/home/web_user/.terminfo/v/vt220+keypad"}, {"audio": 0, "start": 1867691, "crunched": 0, "end": 1869196, "filename": "/home/web_user/.terminfo/v/v200-nam"}, {"audio": 0, "start": 1869196, "crunched": 0, "end": 1870315, "filename": "/home/web_user/.terminfo/v/v5410"}, {"audio": 0, "start": 1870315, "crunched": 0, "end": 1870747, "filename": "/home/web_user/.terminfo/v/vt61"}, {"audio": 0, "start": 1870747, "crunched": 0, "end": 1871933, "filename": "/home/web_user/.terminfo/v/vt125"}, {"audio": 0, "start": 1871933, "crunched": 0, "end": 1872613, "filename": "/home/web_user/.terminfo/v/vt102+enq"}, {"audio": 0, "start": 1872613, "crunched": 0, "end": 1875769, "filename": "/home/web_user/.terminfo/v/vte-2008"}, {"audio": 0, "start": 1875769, "crunched": 0, "end": 1877517, "filename": "/home/web_user/.terminfo/v/vt420"}, {"audio": 0, "start": 1877517, "crunched": 0, "end": 1877969, "filename": "/home/web_user/.terminfo/v/vc414"}, {"audio": 0, "start": 1877969, "crunched": 0, "end": 1881490, "filename": "/home/web_user/.terminfo/v/vte-direct"}, {"audio": 0, "start": 1881490, "crunched": 0, "end": 1882789, "filename": "/home/web_user/.terminfo/v/vip7800-H"}, {"audio": 0, "start": 1882789, "crunched": 0, "end": 1886144, "filename": "/home/web_user/.terminfo/v/vte"}, {"audio": 0, "start": 1886144, "crunched": 0, "end": 1888318, "filename": "/home/web_user/.terminfo/v/vte+pcfkeys"}, {"audio": 0, "start": 1888318, "crunched": 0, "end": 1890066, "filename": "/home/web_user/.terminfo/v/vt510"}, {"audio": 0, "start": 1890066, "crunched": 0, "end": 1890678, "filename": "/home/web_user/.terminfo/v/vi300"}, {"audio": 0, "start": 1890678, "crunched": 0, "end": 1891795, "filename": "/home/web_user/.terminfo/v/vt330"}, {"audio": 0, "start": 1891795, "crunched": 0, "end": 1892104, "filename": "/home/web_user/.terminfo/v/vc403a"}, {"audio": 0, "start": 1892104, "crunched": 0, "end": 1895222, "filename": "/home/web_user/.terminfo/v/vte-2007"}, {"audio": 0, "start": 1895222, "crunched": 0, "end": 1895872, "filename": "/home/web_user/.terminfo/v/vi300-old"}, {"audio": 0, "start": 1895872, "crunched": 0, "end": 1897167, "filename": "/home/web_user/.terminfo/v/vip-w"}, {"audio": 0, "start": 1897167, "crunched": 0, "end": 1897780, "filename": "/home/web_user/.terminfo/v/vi550"}, {"audio": 0, "start": 1897780, "crunched": 0, "end": 1898212, "filename": "/home/web_user/.terminfo/v/vt61.5"}, {"audio": 0, "start": 1898212, "crunched": 0, "end": 1899433, "filename": "/home/web_user/.terminfo/v/vt100-nam-w"}, {"audio": 0, "start": 1899433, "crunched": 0, "end": 1900654, "filename": "/home/web_user/.terminfo/v/vt100-w-nam"}, {"audio": 0, "start": 1900654, "crunched": 0, "end": 1903867, "filename": "/home/web_user/.terminfo/v/vte-2012"}, {"audio": 0, "start": 1903867, "crunched": 0, "end": 1905135, "filename": "/home/web_user/.terminfo/v/vt100-top-s"}, {"audio": 0, "start": 1905135, "crunched": 0, "end": 1906780, "filename": "/home/web_user/.terminfo/v/vt300-nam"}, {"audio": 0, "start": 1906780, "crunched": 0, "end": 1908387, "filename": "/home/web_user/.terminfo/v/vt300"}, {"audio": 0, "start": 1908387, "crunched": 0, "end": 1909391, "filename": "/home/web_user/.terminfo/v/vt100+4bsd"}, {"audio": 0, "start": 1909391, "crunched": 0, "end": 1911588, "filename": "/home/web_user/.terminfo/v/vt420pc"}, {"audio": 0, "start": 1911588, "crunched": 0, "end": 1912840, "filename": "/home/web_user/.terminfo/v/vt100-s-bot"}, {"audio": 0, "start": 1912840, "crunched": 0, "end": 1914447, "filename": "/home/web_user/.terminfo/v/vt320"}, {"audio": 0, "start": 1914447, "crunched": 0, "end": 1915960, "filename": "/home/web_user/.terminfo/v/v320n"}, {"audio": 0, "start": 1915960, "crunched": 0, "end": 1916989, "filename": "/home/web_user/.terminfo/v/visual603"}, {"audio": 0, "start": 1916989, "crunched": 0, "end": 1917704, "filename": "/home/web_user/.terminfo/v/vt220-js"}, {"audio": 0, "start": 1917704, "crunched": 0, "end": 1919486, "filename": "/home/web_user/.terminfo/v/vt525"}, {"audio": 0, "start": 1919486, "crunched": 0, "end": 1920176, "filename": "/home/web_user/.terminfo/v/vt131"}, {"audio": 0, "start": 1920176, "crunched": 0, "end": 1921681, "filename": "/home/web_user/.terminfo/v/vt220-nam"}, {"audio": 0, "start": 1921681, "crunched": 0, "end": 1922949, "filename": "/home/web_user/.terminfo/v/vt100-s-top"}, {"audio": 0, "start": 1922949, "crunched": 0, "end": 1924244, "filename": "/home/web_user/.terminfo/v/vip7800-w"}, {"audio": 0, "start": 1924244, "crunched": 0, "end": 1924671, "filename": "/home/web_user/.terminfo/v/vsc"}, {"audio": 0, "start": 1924671, "crunched": 0, "end": 1925123, "filename": "/home/web_user/.terminfo/v/vc414h"}, {"audio": 0, "start": 1925123, "crunched": 0, "end": 1925838, "filename": "/home/web_user/.terminfo/v/vt200-js"}, {"audio": 0, "start": 1925838, "crunched": 0, "end": 1926893, "filename": "/home/web_user/.terminfo/v/vt100-nav"}, {"audio": 0, "start": 1926893, "crunched": 0, "end": 1927302, "filename": "/home/web_user/.terminfo/v/vc415"}, {"audio": 0, "start": 1927302, "crunched": 0, "end": 1928492, "filename": "/home/web_user/.terminfo/v/vt100-nam"}, {"audio": 0, "start": 1928492, "crunched": 0, "end": 1929702, "filename": "/home/web_user/.terminfo/v/vt100-vb"}, {"audio": 0, "start": 1929702, "crunched": 0, "end": 1930791, "filename": "/home/web_user/.terminfo/v/vt100-nav-w"}, {"audio": 0, "start": 1930791, "crunched": 0, "end": 1931999, "filename": "/home/web_user/.terminfo/v/vt132"}, {"audio": 0, "start": 1931999, "crunched": 0, "end": 1932449, "filename": "/home/web_user/.terminfo/v/vt100+fnkeys"}, {"audio": 0, "start": 1932449, "crunched": 0, "end": 1933912, "filename": "/home/web_user/.terminfo/v/vt220-w"}, {"audio": 0, "start": 1933912, "crunched": 0, "end": 1935511, "filename": "/home/web_user/.terminfo/v/vt200-old"}, {"audio": 0, "start": 1935511, "crunched": 0, "end": 1936096, "filename": "/home/web_user/.terminfo/v/viewpoint3a+"}, {"audio": 0, "start": 1936096, "crunched": 0, "end": 1937713, "filename": "/home/web_user/.terminfo/v/vt300-w"}, {"audio": 0, "start": 1937713, "crunched": 0, "end": 1939891, "filename": "/home/web_user/.terminfo/v/vt420pcdos"}, {"audio": 0, "start": 1939891, "crunched": 0, "end": 1941018, "filename": "/home/web_user/.terminfo/v/vt400"}, {"audio": 0, "start": 1941018, "crunched": 0, "end": 1942036, "filename": "/home/web_user/.terminfo/v/vi50"}, {"audio": 0, "start": 1942036, "crunched": 0, "end": 1942506, "filename": "/home/web_user/.terminfo/v/vi55"}, {"audio": 0, "start": 1942506, "crunched": 0, "end": 1942815, "filename": "/home/web_user/.terminfo/v/vc303"}, {"audio": 0, "start": 1942815, "crunched": 0, "end": 1943251, "filename": "/home/web_user/.terminfo/v/vc404-s"}, {"audio": 0, "start": 1943251, "crunched": 0, "end": 1943621, "filename": "/home/web_user/.terminfo/v/vapple"}, {"audio": 0, "start": 1943621, "crunched": 0, "end": 1944631, "filename": "/home/web_user/.terminfo/v/vt320-k311"}, {"audio": 0, "start": 1944631, "crunched": 0, "end": 1947978, "filename": "/home/web_user/.terminfo/v/vte-2017"}, {"audio": 0, "start": 1947978, "crunched": 0, "end": 1949177, "filename": "/home/web_user/.terminfo/v/vt100-putty"}, {"audio": 0, "start": 1949177, "crunched": 0, "end": 1949738, "filename": "/home/web_user/.terminfo/v/vp90"}, {"audio": 0, "start": 1949738, "crunched": 0, "end": 1950441, "filename": "/home/web_user/.terminfo/v/vi200-f"}, {"audio": 0, "start": 1950441, "crunched": 0, "end": 1950750, "filename": "/home/web_user/.terminfo/v/vc203"}, {"audio": 0, "start": 1950750, "crunched": 0, "end": 1951335, "filename": "/home/web_user/.terminfo/v/vp3a+"}, {"audio": 0, "start": 1951335, "crunched": 0, "end": 1953532, "filename": "/home/web_user/.terminfo/v/vt510pc"}, {"audio": 0, "start": 1953532, "crunched": 0, "end": 1955177, "filename": "/home/web_user/.terminfo/v/vt320-nam"}, {"audio": 0, "start": 1955177, "crunched": 0, "end": 1956776, "filename": "/home/web_user/.terminfo/v/vt220-old"}, {"audio": 0, "start": 1956776, "crunched": 0, "end": 1958045, "filename": "/home/web_user/.terminfo/v/vt100-bm-o"}, {"audio": 0, "start": 1958045, "crunched": 0, "end": 1959360, "filename": "/home/web_user/.terminfo/v/vt200-8bit"}, {"audio": 0, "start": 1959360, "crunched": 0, "end": 1959831, "filename": "/home/web_user/.terminfo/v/viewpoint"}, {"audio": 0, "start": 1959831, "crunched": 0, "end": 1963406, "filename": "/home/web_user/.terminfo/v/vte-256color"}, {"audio": 0, "start": 1963406, "crunched": 0, "end": 1964661, "filename": "/home/web_user/.terminfo/v/vip"}, {"audio": 0, "start": 1964661, "crunched": 0, "end": 1966353, "filename": "/home/web_user/.terminfo/v/vt-utf8"}, {"audio": 0, "start": 1966353, "crunched": 0, "end": 1966775, "filename": "/home/web_user/.terminfo/v/vt100+pfkeys"}, {"audio": 0, "start": 1966775, "crunched": 0, "end": 1968214, "filename": "/home/web_user/.terminfo/v/vt220"}, {"audio": 0, "start": 1968214, "crunched": 0, "end": 1970390, "filename": "/home/web_user/.terminfo/v/vt510pcdos"}, {"audio": 0, "start": 1970390, "crunched": 0, "end": 1971705, "filename": "/home/web_user/.terminfo/v/vt220-8"}, {"audio": 0, "start": 1971705, "crunched": 0, "end": 1972225, "filename": "/home/web_user/.terminfo/v/vp60"}, {"audio": 0, "start": 1972225, "crunched": 0, "end": 1973750, "filename": "/home/web_user/.terminfo/v/vs100"}, {"audio": 0, "start": 1973750, "crunched": 0, "end": 1974164, "filename": "/home/web_user/.terminfo/v/vc404"}, {"audio": 0, "start": 1974164, "crunched": 0, "end": 1974779, "filename": "/home/web_user/.terminfo/v/vk100"}, {"audio": 0, "start": 1974779, "crunched": 0, "end": 1976414, "filename": "/home/web_user/.terminfo/v/vt320-w-nam"}, {"audio": 0, "start": 1976414, "crunched": 0, "end": 1976723, "filename": "/home/web_user/.terminfo/v/vc103"}, {"audio": 0, "start": 1976723, "crunched": 0, "end": 1977155, "filename": "/home/web_user/.terminfo/v/vt-61"}, {"audio": 0, "start": 1977155, "crunched": 0, "end": 1978594, "filename": "/home/web_user/.terminfo/v/vt200"}, {"audio": 0, "start": 1978594, "crunched": 0, "end": 1979896, "filename": "/home/web_user/.terminfo/v/vwmterm"}, {"audio": 0, "start": 1979896, "crunched": 0, "end": 1981588, "filename": "/home/web_user/.terminfo/v/vt100+"}, {"audio": 0, "start": 1981588, "crunched": 0, "end": 1982903, "filename": "/home/web_user/.terminfo/v/vt200-8"}, {"audio": 0, "start": 1982903, "crunched": 0, "end": 1984106, "filename": "/home/web_user/.terminfo/v/vt100-w"}, {"audio": 0, "start": 1984106, "crunched": 0, "end": 1984787, "filename": "/home/web_user/.terminfo/v/vi200-rv"}, {"audio": 0, "start": 1984787, "crunched": 0, "end": 1986050, "filename": "/home/web_user/.terminfo/v/vt100-bm"}, {"audio": 0, "start": 1986050, "crunched": 0, "end": 1986359, "filename": "/home/web_user/.terminfo/v/vc303a"}, {"audio": 0, "start": 1986359, "crunched": 0, "end": 1987627, "filename": "/home/web_user/.terminfo/v/vt100-s"}, {"audio": 0, "start": 1987627, "crunched": 0, "end": 1988097, "filename": "/home/web_user/.terminfo/v/vt52"}, {"audio": 0, "start": 1988097, "crunched": 0, "end": 1989287, "filename": "/home/web_user/.terminfo/v/vt100"}, {"audio": 0, "start": 1989287, "crunched": 0, "end": 1990602, "filename": "/home/web_user/.terminfo/v/vt220-8bit"}, {"audio": 0, "start": 1990602, "crunched": 0, "end": 1991153, "filename": "/home/web_user/.terminfo/v/vi500"}, {"audio": 0, "start": 1991153, "crunched": 0, "end": 1992337, "filename": "/home/web_user/.terminfo/v/vt102"}, {"audio": 0, "start": 1992337, "crunched": 0, "end": 1993972, "filename": "/home/web_user/.terminfo/v/vt300-w-nam"}, {"audio": 0, "start": 1993972, "crunched": 0, "end": 1995271, "filename": "/home/web_user/.terminfo/v/vip-H"}, {"audio": 0, "start": 1995271, "crunched": 0, "end": 1996300, "filename": "/home/web_user/.terminfo/v/vi603"}, {"audio": 0, "start": 1996300, "crunched": 0, "end": 1997506, "filename": "/home/web_user/.terminfo/v/vt102-w"}, {"audio": 0, "start": 1997506, "crunched": 0, "end": 2000844, "filename": "/home/web_user/.terminfo/v/vte-2014"}, {"audio": 0, "start": 2000844, "crunched": 0, "end": 2002626, "filename": "/home/web_user/.terminfo/v/vt520"}, {"audio": 0, "start": 2002626, "crunched": 0, "end": 2004089, "filename": "/home/web_user/.terminfo/v/vt200-w"}, {"audio": 0, "start": 2004089, "crunched": 0, "end": 2004828, "filename": "/home/web_user/.terminfo/v/versaterm"}, {"audio": 0, "start": 2004828, "crunched": 0, "end": 2005510, "filename": "/home/web_user/.terminfo/v/vt100+enq"}, {"audio": 0, "start": 2005510, "crunched": 0, "end": 2007171, "filename": "/home/web_user/.terminfo/v/vt220d"}, {"audio": 0, "start": 2007171, "crunched": 0, "end": 2008374, "filename": "/home/web_user/.terminfo/v/vt100-w-am"}, {"audio": 0, "start": 2008374, "crunched": 0, "end": 2009046, "filename": "/home/web_user/.terminfo/v/vi200"}, {"audio": 0, "start": 2009046, "crunched": 0, "end": 2009926, "filename": "/home/web_user/.terminfo/v/viewdata-rv"}, {"audio": 0, "start": 2009926, "crunched": 0, "end": 2011116, "filename": "/home/web_user/.terminfo/v/vt100nam"}, {"audio": 0, "start": 2011116, "crunched": 0, "end": 2012243, "filename": "/home/web_user/.terminfo/v/vt400-24"}, {"audio": 0, "start": 2012243, "crunched": 0, "end": 2013433, "filename": "/home/web_user/.terminfo/v/vt100-am"}, {"audio": 0, "start": 2013433, "crunched": 0, "end": 2015050, "filename": "/home/web_user/.terminfo/v/vt320-w"}, {"audio": 0, "start": 2015050, "crunched": 0, "end": 2015647, "filename": "/home/web_user/.terminfo/v/viewdata"}, {"audio": 0, "start": 2015647, "crunched": 0, "end": 2017107, "filename": "/home/web_user/.terminfo/v/vtnt"}, {"audio": 0, "start": 2017107, "crunched": 0, "end": 2017475, "filename": "/home/web_user/.terminfo/v/vt100+keypad"}, {"audio": 0, "start": 2017475, "crunched": 0, "end": 2018085, "filename": "/home/web_user/.terminfo/v/v3220"}, {"audio": 0, "start": 2018085, "crunched": 0, "end": 2018421, "filename": "/home/web_user/.terminfo/v/vanilla"}, {"audio": 0, "start": 2018421, "crunched": 0, "end": 2019673, "filename": "/home/web_user/.terminfo/v/vt100-bot-s"}, {"audio": 0, "start": 2019673, "crunched": 0, "end": 2020085, "filename": "/home/web_user/.terminfo/v/venix"}, {"audio": 0, "start": 2020085, "crunched": 0, "end": 2020516, "filename": "/home/web_user/.terminfo/v/vremote"}, {"audio": 0, "start": 2020516, "crunched": 0, "end": 2021495, "filename": "/home/web_user/.terminfo/v/visa50"}, {"audio": 0, "start": 2021495, "crunched": 0, "end": 2021864, "filename": "/home/web_user/.terminfo/v/vt50"}, {"audio": 0, "start": 2021864, "crunched": 0, "end": 2023743, "filename": "/home/web_user/.terminfo/v/vt420f"}, {"audio": 0, "start": 2023743, "crunched": 0, "end": 2024832, "filename": "/home/web_user/.terminfo/v/vt100-w-nav"}, {"audio": 0, "start": 2024832, "crunched": 0, "end": 2025995, "filename": "/home/web_user/.terminfo/v/vt102-nsgr"}, {"audio": 0, "start": 2025995, "crunched": 0, "end": 2027508, "filename": "/home/web_user/.terminfo/v/vt320nam"}, {"audio": 0, "start": 2027508, "crunched": 0, "end": 2028801, "filename": "/home/web_user/.terminfo/v/vip-Hw"}, {"audio": 0, "start": 2028801, "crunched": 0, "end": 2029200, "filename": "/home/web_user/.terminfo/v/vt50h"}, {"audio": 0, "start": 2029200, "crunched": 0, "end": 2029720, "filename": "/home/web_user/.terminfo/v/viewpoint60"}, {"audio": 0, "start": 2029720, "crunched": 0, "end": 2030837, "filename": "/home/web_user/.terminfo/v/vt340"}, {"audio": 0, "start": 2030837, "crunched": 0, "end": 2031398, "filename": "/home/web_user/.terminfo/v/viewpoint90"}, {"audio": 0, "start": 2031398, "crunched": 0, "end": 2032691, "filename": "/home/web_user/.terminfo/v/vip7800-Hw"}, {"audio": 0, "start": 2032691, "crunched": 0, "end": 2034392, "filename": "/home/web_user/.terminfo/t/teraterm"}, {"audio": 0, "start": 2034392, "crunched": 0, "end": 2035312, "filename": "/home/web_user/.terminfo/t/tek4106brl"}, {"audio": 0, "start": 2035312, "crunched": 0, "end": 2036511, "filename": "/home/web_user/.terminfo/t/tvi920b-2p-unk"}, {"audio": 0, "start": 2036511, "crunched": 0, "end": 2038025, "filename": "/home/web_user/.terminfo/t/tty5425"}, {"audio": 0, "start": 2038025, "crunched": 0, "end": 2039184, "filename": "/home/web_user/.terminfo/t/ts100"}, {"audio": 0, "start": 2039184, "crunched": 0, "end": 2039568, "filename": "/home/web_user/.terminfo/t/tn300"}, {"audio": 0, "start": 2039568, "crunched": 0, "end": 2040488, "filename": "/home/web_user/.terminfo/t/tek4107brl"}, {"audio": 0, "start": 2040488, "crunched": 0, "end": 2041261, "filename": "/home/web_user/.terminfo/t/tvi955-w"}, {"audio": 0, "start": 2041261, "crunched": 0, "end": 2042771, "filename": "/home/web_user/.terminfo/t/ti916-8"}, {"audio": 0, "start": 2042771, "crunched": 0, "end": 2043900, "filename": "/home/web_user/.terminfo/t/ti928-8"}, {"audio": 0, "start": 2043900, "crunched": 0, "end": 2044525, "filename": "/home/web_user/.terminfo/t/tvi914"}, {"audio": 0, "start": 2044525, "crunched": 0, "end": 2045216, "filename": "/home/web_user/.terminfo/t/tek4107"}, {"audio": 0, "start": 2045216, "crunched": 0, "end": 2045744, "filename": "/home/web_user/.terminfo/t/tvipt"}, {"audio": 0, "start": 2045744, "crunched": 0, "end": 2047089, "filename": "/home/web_user/.terminfo/t/tvi920b-mc-vb"}, {"audio": 0, "start": 2047089, "crunched": 0, "end": 2048311, "filename": "/home/web_user/.terminfo/t/tvi920b-unk-vb"}, {"audio": 0, "start": 2048311, "crunched": 0, "end": 2049763, "filename": "/home/web_user/.terminfo/t/tws2103"}, {"audio": 0, "start": 2049763, "crunched": 0, "end": 2050974, "filename": "/home/web_user/.terminfo/t/tvi920b-mc"}, {"audio": 0, "start": 2050974, "crunched": 0, "end": 2051653, "filename": "/home/web_user/.terminfo/t/tvi92D"}, {"audio": 0, "start": 2051653, "crunched": 0, "end": 2053119, "filename": "/home/web_user/.terminfo/t/tws-generic"}, {"audio": 0, "start": 2053119, "crunched": 0, "end": 2053333, "filename": "/home/web_user/.terminfo/t/tek"}, {"audio": 0, "start": 2053333, "crunched": 0, "end": 2053746, "filename": "/home/web_user/.terminfo/t/tek4015"}, {"audio": 0, "start": 2053746, "crunched": 0, "end": 2055278, "filename": "/home/web_user/.terminfo/t/teken"}, {"audio": 0, "start": 2055278, "crunched": 0, "end": 2055738, "filename": "/home/web_user/.terminfo/t/ts1"}, {"audio": 0, "start": 2055738, "crunched": 0, "end": 2058922, "filename": "/home/web_user/.terminfo/t/terminology"}, {"audio": 0, "start": 2058922, "crunched": 0, "end": 2059332, "filename": "/home/web_user/.terminfo/t/t3800"}, {"audio": 0, "start": 2059332, "crunched": 0, "end": 2060589, "filename": "/home/web_user/.terminfo/t/tvi912b-vb-mc"}, {"audio": 0, "start": 2060589, "crunched": 0, "end": 2061258, "filename": "/home/web_user/.terminfo/t/tek4027"}, {"audio": 0, "start": 2061258, "crunched": 0, "end": 2062392, "filename": "/home/web_user/.terminfo/t/tvi912c-vb-unk"}, {"audio": 0, "start": 2062392, "crunched": 0, "end": 2063934, "filename": "/home/web_user/.terminfo/t/tty5425-w"}, {"audio": 0, "start": 2063934, "crunched": 0, "end": 2065156, "filename": "/home/web_user/.terminfo/t/tvi920c-unk-vb"}, {"audio": 0, "start": 2065156, "crunched": 0, "end": 2068419, "filename": "/home/web_user/.terminfo/t/tmux-256color"}, {"audio": 0, "start": 2068419, "crunched": 0, "end": 2068943, "filename": "/home/web_user/.terminfo/t/tty40"}, {"audio": 0, "start": 2068943, "crunched": 0, "end": 2069283, "filename": "/home/web_user/.terminfo/t/tty35"}, {"audio": 0, "start": 2069283, "crunched": 0, "end": 2069707, "filename": "/home/web_user/.terminfo/t/tt"}, {"audio": 0, "start": 2069707, "crunched": 0, "end": 2071148, "filename": "/home/web_user/.terminfo/t/tws2102-sna"}, {"audio": 0, "start": 2071148, "crunched": 0, "end": 2071851, "filename": "/home/web_user/.terminfo/t/tvi921"}, {"audio": 0, "start": 2071851, "crunched": 0, "end": 2072647, "filename": "/home/web_user/.terminfo/t/tty4424-1"}, {"audio": 0, "start": 2072647, "crunched": 0, "end": 2073366, "filename": "/home/web_user/.terminfo/t/tek4025-17-ws"}, {"audio": 0, "start": 2073366, "crunched": 0, "end": 2074594, "filename": "/home/web_user/.terminfo/t/tvi920c-vb"}, {"audio": 0, "start": 2074594, "crunched": 0, "end": 2075734, "filename": "/home/web_user/.terminfo/t/tvi912b-vb"}, {"audio": 0, "start": 2075734, "crunched": 0, "end": 2076697, "filename": "/home/web_user/.terminfo/t/tek4105a"}, {"audio": 0, "start": 2076697, "crunched": 0, "end": 2077190, "filename": "/home/web_user/.terminfo/t/tek4113"}, {"audio": 0, "start": 2077190, "crunched": 0, "end": 2077839, "filename": "/home/web_user/.terminfo/t/tek4025a"}, {"audio": 0, "start": 2077839, "crunched": 0, "end": 2078479, "filename": "/home/web_user/.terminfo/t/tek4105"}, {"audio": 0, "start": 2078479, "crunched": 0, "end": 2079713, "filename": "/home/web_user/.terminfo/t/tvi912b-2p-mc"}, {"audio": 0, "start": 2079713, "crunched": 0, "end": 2080226, "filename": "/home/web_user/.terminfo/t/ts1p"}, {"audio": 0, "start": 2080226, "crunched": 0, "end": 2081337, "filename": "/home/web_user/.terminfo/t/tt505-22"}, {"audio": 0, "start": 2081337, "crunched": 0, "end": 2082012, "filename": "/home/web_user/.terminfo/t/tek4025ex"}, {"audio": 0, "start": 2082012, "crunched": 0, "end": 2082637, "filename": "/home/web_user/.terminfo/t/tvi912"}, {"audio": 0, "start": 2082637, "crunched": 0, "end": 2083859, "filename": "/home/web_user/.terminfo/t/tvi920c-vb-unk"}, {"audio": 0, "start": 2083859, "crunched": 0, "end": 2084330, "filename": "/home/web_user/.terminfo/t/tty5420+nl"}, {"audio": 0, "start": 2084330, "crunched": 0, "end": 2087611, "filename": "/home/web_user/.terminfo/t/termite"}, {"audio": 0, "start": 2087611, "crunched": 0, "end": 2088124, "filename": "/home/web_user/.terminfo/t/ts-1p"}, {"audio": 0, "start": 2088124, "crunched": 0, "end": 2088734, "filename": "/home/web_user/.terminfo/t/ti924"}, {"audio": 0, "start": 2088734, "crunched": 0, "end": 2089732, "filename": "/home/web_user/.terminfo/t/tvi912c-unk"}, {"audio": 0, "start": 2089732, "crunched": 0, "end": 2090935, "filename": "/home/web_user/.terminfo/t/tvi920c-2p"}, {"audio": 0, "start": 2090935, "crunched": 0, "end": 2091667, "filename": "/home/web_user/.terminfo/t/tvi950-rv-2p"}, {"audio": 0, "start": 2091667, "crunched": 0, "end": 2092036, "filename": "/home/web_user/.terminfo/t/tty37"}, {"audio": 0, "start": 2092036, "crunched": 0, "end": 2092518, "filename": "/home/web_user/.terminfo/t/tek4114"}, {"audio": 0, "start": 2092518, "crunched": 0, "end": 2093659, "filename": "/home/web_user/.terminfo/t/tvi912b-vb-p"}, {"audio": 0, "start": 2093659, "crunched": 0, "end": 2094840, "filename": "/home/web_user/.terminfo/t/ts100-ctxt"}, {"audio": 0, "start": 2094840, "crunched": 0, "end": 2095975, "filename": "/home/web_user/.terminfo/t/tty5410v1-w"}, {"audio": 0, "start": 2095975, "crunched": 0, "end": 2097322, "filename": "/home/web_user/.terminfo/t/tw52-color"}, {"audio": 0, "start": 2097322, "crunched": 0, "end": 2098481, "filename": "/home/web_user/.terminfo/t/ts100-sp"}, {"audio": 0, "start": 2098481, "crunched": 0, "end": 2100421, "filename": "/home/web_user/.terminfo/t/tt52"}, {"audio": 0, "start": 2100421, "crunched": 0, "end": 2100839, "filename": "/home/web_user/.terminfo/t/tvi912b+dim"}, {"audio": 0, "start": 2100839, "crunched": 0, "end": 2102441, "filename": "/home/web_user/.terminfo/t/terminator"}, {"audio": 0, "start": 2102441, "crunched": 0, "end": 2102892, "filename": "/home/web_user/.terminfo/t/trsII"}, {"audio": 0, "start": 2102892, "crunched": 0, "end": 2103953, "filename": "/home/web_user/.terminfo/t/ti_ansi"}, {"audio": 0, "start": 2103953, "crunched": 0, "end": 2104987, "filename": "/home/web_user/.terminfo/t/tvi912c"}, {"audio": 0, "start": 2104987, "crunched": 0, "end": 2106073, "filename": "/home/web_user/.terminfo/t/tvi920c-unk"}, {"audio": 0, "start": 2106073, "crunched": 0, "end": 2106561, "filename": "/home/web_user/.terminfo/t/t16"}, {"audio": 0, "start": 2106561, "crunched": 0, "end": 2107818, "filename": "/home/web_user/.terminfo/t/tvi912c-vb-mc"}, {"audio": 0, "start": 2107818, "crunched": 0, "end": 2108936, "filename": "/home/web_user/.terminfo/t/tvi912b-2p-p"}, {"audio": 0, "start": 2108936, "crunched": 0, "end": 2109591, "filename": "/home/web_user/.terminfo/t/tek4025-17"}, {"audio": 0, "start": 2109591, "crunched": 0, "end": 2110073, "filename": "/home/web_user/.terminfo/t/tek4112"}, {"audio": 0, "start": 2110073, "crunched": 0, "end": 2110970, "filename": "/home/web_user/.terminfo/t/tw52-m"}, {"audio": 0, "start": 2110970, "crunched": 0, "end": 2112396, "filename": "/home/web_user/.terminfo/t/tw100"}, {"audio": 0, "start": 2112396, "crunched": 0, "end": 2112943, "filename": "/home/web_user/.terminfo/t/tty5620-1"}, {"audio": 0, "start": 2112943, "crunched": 0, "end": 2114066, "filename": "/home/web_user/.terminfo/t/tvi912b-mc"}, {"audio": 0, "start": 2114066, "crunched": 0, "end": 2115411, "filename": "/home/web_user/.terminfo/t/tvi920c-mc-vb"}, {"audio": 0, "start": 2115411, "crunched": 0, "end": 2116617, "filename": "/home/web_user/.terminfo/t/tvi920b-p-2p"}, {"audio": 0, "start": 2116617, "crunched": 0, "end": 2117173, "filename": "/home/web_user/.terminfo/t/tek4404"}, {"audio": 0, "start": 2117173, "crunched": 0, "end": 2118219, "filename": "/home/web_user/.terminfo/t/tab132-rv"}, {"audio": 0, "start": 2118219, "crunched": 0, "end": 2118559, "filename": "/home/web_user/.terminfo/t/tty33"}, {"audio": 0, "start": 2118559, "crunched": 0, "end": 2119038, "filename": "/home/web_user/.terminfo/t/tek4112-nd"}, {"audio": 0, "start": 2119038, "crunched": 0, "end": 2121405, "filename": "/home/web_user/.terminfo/t/teraterm-256color"}, {"audio": 0, "start": 2121405, "crunched": 0, "end": 2122491, "filename": "/home/web_user/.terminfo/t/tvi920b-unk"}, {"audio": 0, "start": 2122491, "crunched": 0, "end": 2123175, "filename": "/home/web_user/.terminfo/t/tvi803"}, {"audio": 0, "start": 2123175, "crunched": 0, "end": 2124124, "filename": "/home/web_user/.terminfo/t/tvi924"}, {"audio": 0, "start": 2124124, "crunched": 0, "end": 2125327, "filename": "/home/web_user/.terminfo/t/tvi920b-2p"}, {"audio": 0, "start": 2125327, "crunched": 0, "end": 2126048, "filename": "/home/web_user/.terminfo/t/tvi950-4p"}, {"audio": 0, "start": 2126048, "crunched": 0, "end": 2126581, "filename": "/home/web_user/.terminfo/t/ti931"}, {"audio": 0, "start": 2126581, "crunched": 0, "end": 2127199, "filename": "/home/web_user/.terminfo/t/ti924w"}, {"audio": 0, "start": 2127199, "crunched": 0, "end": 2128741, "filename": "/home/web_user/.terminfo/t/tty5425-nl"}, {"audio": 0, "start": 2128741, "crunched": 0, "end": 2129940, "filename": "/home/web_user/.terminfo/t/tvi920c-2p-unk"}, {"audio": 0, "start": 2129940, "crunched": 0, "end": 2130938, "filename": "/home/web_user/.terminfo/t/tvi912b-unk"}, {"audio": 0, "start": 2130938, "crunched": 0, "end": 2131445, "filename": "/home/web_user/.terminfo/t/tvi912b+mc"}, {"audio": 0, "start": 2131445, "crunched": 0, "end": 2131829, "filename": "/home/web_user/.terminfo/t/terminet300"}, {"audio": 0, "start": 2131829, "crunched": 0, "end": 2132041, "filename": "/home/web_user/.terminfo/t/tek4014"}, {"audio": 0, "start": 2132041, "crunched": 0, "end": 2133164, "filename": "/home/web_user/.terminfo/t/tvi912c-mc"}, {"audio": 0, "start": 2133164, "crunched": 0, "end": 2134393, "filename": "/home/web_user/.terminfo/t/tvi920b-p-vb"}, {"audio": 0, "start": 2134393, "crunched": 0, "end": 2135350, "filename": "/home/web_user/.terminfo/t/tandem6510"}, {"audio": 0, "start": 2135350, "crunched": 0, "end": 2136697, "filename": "/home/web_user/.terminfo/t/tw52"}, {"audio": 0, "start": 2136697, "crunched": 0, "end": 2138101, "filename": "/home/web_user/.terminfo/t/tty5420-rv-nl"}, {"audio": 0, "start": 2138101, "crunched": 0, "end": 2138686, "filename": "/home/web_user/.terminfo/t/ti924-8"}, {"audio": 0, "start": 2138686, "crunched": 0, "end": 2139831, "filename": "/home/web_user/.terminfo/t/tek4105-30"}, {"audio": 0, "start": 2139831, "crunched": 0, "end": 2140953, "filename": "/home/web_user/.terminfo/t/tvi920c"}, {"audio": 0, "start": 2140953, "crunched": 0, "end": 2142463, "filename": "/home/web_user/.terminfo/t/ti916-132"}, {"audio": 0, "start": 2142463, "crunched": 0, "end": 2143581, "filename": "/home/web_user/.terminfo/t/tvi912c-2p-p"}, {"audio": 0, "start": 2143581, "crunched": 0, "end": 2143965, "filename": "/home/web_user/.terminfo/t/terminet1200"}, {"audio": 0, "start": 2143965, "crunched": 0, "end": 2145080, "filename": "/home/web_user/.terminfo/t/tvi912b-2p"}, {"audio": 0, "start": 2145080, "crunched": 0, "end": 2145476, "filename": "/home/web_user/.terminfo/t/ti745"}, {"audio": 0, "start": 2145476, "crunched": 0, "end": 2147804, "filename": "/home/web_user/.terminfo/t/terminology-0.6.1"}, {"audio": 0, "start": 2147804, "crunched": 0, "end": 2149214, "filename": "/home/web_user/.terminfo/t/tty5420-w-rv-n"}, {"audio": 0, "start": 2149214, "crunched": 0, "end": 2149775, "filename": "/home/web_user/.terminfo/t/tvi925"}, {"audio": 0, "start": 2149775, "crunched": 0, "end": 2151437, "filename": "/home/web_user/.terminfo/t/tvi9065"}, {"audio": 0, "start": 2151437, "crunched": 0, "end": 2152158, "filename": "/home/web_user/.terminfo/t/tvi950-2p"}, {"audio": 0, "start": 2152158, "crunched": 0, "end": 2152849, "filename": "/home/web_user/.terminfo/t/tek4109"}, {"audio": 0, "start": 2152849, "crunched": 0, "end": 2156002, "filename": "/home/web_user/.terminfo/t/tmux"}, {"audio": 0, "start": 2156002, "crunched": 0, "end": 2156568, "filename": "/home/web_user/.terminfo/t/t1061"}, {"audio": 0, "start": 2156568, "crunched": 0, "end": 2157672, "filename": "/home/web_user/.terminfo/t/tab"}, {"audio": 0, "start": 2157672, "crunched": 0, "end": 2158136, "filename": "/home/web_user/.terminfo/t/tty5620-s"}, {"audio": 0, "start": 2158136, "crunched": 0, "end": 2159247, "filename": "/home/web_user/.terminfo/t/tvi912c-2p-unk"}, {"audio": 0, "start": 2159247, "crunched": 0, "end": 2160777, "filename": "/home/web_user/.terminfo/t/ti916"}, {"audio": 0, "start": 2160777, "crunched": 0, "end": 2161468, "filename": "/home/web_user/.terminfo/t/tvi92B"}, {"audio": 0, "start": 2161468, "crunched": 0, "end": 2162852, "filename": "/home/web_user/.terminfo/t/tty5420"}, {"audio": 0, "start": 2162852, "crunched": 0, "end": 2163988, "filename": "/home/web_user/.terminfo/t/tty5410"}, {"audio": 0, "start": 2163988, "crunched": 0, "end": 2164739, "filename": "/home/web_user/.terminfo/t/tek4115"}, {"audio": 0, "start": 2164739, "crunched": 0, "end": 2165367, "filename": "/home/web_user/.terminfo/t/tvi910+"}, {"audio": 0, "start": 2165367, "crunched": 0, "end": 2165763, "filename": "/home/web_user/.terminfo/t/ti735"}, {"audio": 0, "start": 2165763, "crunched": 0, "end": 2166992, "filename": "/home/web_user/.terminfo/t/tvi920b-vb-p"}, {"audio": 0, "start": 2166992, "crunched": 0, "end": 2168110, "filename": "/home/web_user/.terminfo/t/tvi912c-p-2p"}, {"audio": 0, "start": 2168110, "crunched": 0, "end": 2168561, "filename": "/home/web_user/.terminfo/t/trs80II"}, {"audio": 0, "start": 2168561, "crunched": 0, "end": 2169570, "filename": "/home/web_user/.terminfo/t/tvi912c-p"}, {"audio": 0, "start": 2169570, "crunched": 0, "end": 2170950, "filename": "/home/web_user/.terminfo/t/tty5420-nl"}, {"audio": 0, "start": 2170950, "crunched": 0, "end": 2171410, "filename": "/home/web_user/.terminfo/t/ts-1"}, {"audio": 0, "start": 2171410, "crunched": 0, "end": 2171758, "filename": "/home/web_user/.terminfo/t/tty43"}, {"audio": 0, "start": 2171758, "crunched": 0, "end": 2172792, "filename": "/home/web_user/.terminfo/t/tvi912b"}, {"audio": 0, "start": 2172792, "crunched": 0, "end": 2173362, "filename": "/home/web_user/.terminfo/t/ti926-8"}, {"audio": 0, "start": 2173362, "crunched": 0, "end": 2174480, "filename": "/home/web_user/.terminfo/t/tvi912b-p-2p"}, {"audio": 0, "start": 2174480, "crunched": 0, "end": 2176072, "filename": "/home/web_user/.terminfo/t/teraterm2.3"}, {"audio": 0, "start": 2176072, "crunched": 0, "end": 2177213, "filename": "/home/web_user/.terminfo/t/tvi912b-p-vb"}, {"audio": 0, "start": 2177213, "crunched": 0, "end": 2177839, "filename": "/home/web_user/.terminfo/t/ttydmd"}, {"audio": 0, "start": 2177839, "crunched": 0, "end": 2179067, "filename": "/home/web_user/.terminfo/t/tvi920b-vb"}, {"audio": 0, "start": 2179067, "crunched": 0, "end": 2179746, "filename": "/home/web_user/.terminfo/t/tvi950"}, {"audio": 0, "start": 2179746, "crunched": 0, "end": 2180157, "filename": "/home/web_user/.terminfo/t/tek4013"}, {"audio": 0, "start": 2180157, "crunched": 0, "end": 2180782, "filename": "/home/web_user/.terminfo/t/tvi920"}, {"audio": 0, "start": 2180782, "crunched": 0, "end": 2181264, "filename": "/home/web_user/.terminfo/t/tek4112-5"}, {"audio": 0, "start": 2181264, "crunched": 0, "end": 2182470, "filename": "/home/web_user/.terminfo/t/tvi920b-2p-p"}, {"audio": 0, "start": 2182470, "crunched": 0, "end": 2183669, "filename": "/home/web_user/.terminfo/t/tvi920b-unk-2p"}, {"audio": 0, "start": 2183669, "crunched": 0, "end": 2185065, "filename": "/home/web_user/.terminfo/t/tty5420-w-nl"}, {"audio": 0, "start": 2185065, "crunched": 0, "end": 2185461, "filename": "/home/web_user/.terminfo/t/ti800"}, {"audio": 0, "start": 2185461, "crunched": 0, "end": 2186806, "filename": "/home/web_user/.terminfo/t/tvi920b-vb-mc"}, {"audio": 0, "start": 2186806, "crunched": 0, "end": 2188336, "filename": "/home/web_user/.terminfo/t/ti916-220-7"}, {"audio": 0, "start": 2188336, "crunched": 0, "end": 2189005, "filename": "/home/web_user/.terminfo/t/tek4024"}, {"audio": 0, "start": 2189005, "crunched": 0, "end": 2189690, "filename": "/home/web_user/.terminfo/t/tvi970"}, {"audio": 0, "start": 2189690, "crunched": 0, "end": 2190924, "filename": "/home/web_user/.terminfo/t/tvi912c-mc-2p"}, {"audio": 0, "start": 2190924, "crunched": 0, "end": 2192246, "filename": "/home/web_user/.terminfo/t/tvi920b-mc-2p"}, {"audio": 0, "start": 2192246, "crunched": 0, "end": 2193591, "filename": "/home/web_user/.terminfo/t/tvi920c-vb-mc"}, {"audio": 0, "start": 2193591, "crunched": 0, "end": 2194211, "filename": "/home/web_user/.terminfo/t/tvi920b+fn"}, {"audio": 0, "start": 2194211, "crunched": 0, "end": 2195326, "filename": "/home/web_user/.terminfo/t/tvi912c-2p"}, {"audio": 0, "start": 2195326, "crunched": 0, "end": 2195995, "filename": "/home/web_user/.terminfo/t/tek4025"}, {"audio": 0, "start": 2195995, "crunched": 0, "end": 2197317, "filename": "/home/web_user/.terminfo/t/tvi920b-2p-mc"}, {"audio": 0, "start": 2197317, "crunched": 0, "end": 2197566, "filename": "/home/web_user/.terminfo/t/tvi912b+2p"}, {"audio": 0, "start": 2197566, "crunched": 0, "end": 2200756, "filename": "/home/web_user/.terminfo/t/terminology-1.0.0"}, {"audio": 0, "start": 2200756, "crunched": 0, "end": 2202078, "filename": "/home/web_user/.terminfo/t/tvi920c-mc-2p"}, {"audio": 0, "start": 2202078, "crunched": 0, "end": 2203480, "filename": "/home/web_user/.terminfo/t/tty5420-w-rv"}, {"audio": 0, "start": 2203480, "crunched": 0, "end": 2203904, "filename": "/home/web_user/.terminfo/t/tkterm"}, {"audio": 0, "start": 2203904, "crunched": 0, "end": 2204350, "filename": "/home/web_user/.terminfo/t/t10"}, {"audio": 0, "start": 2204350, "crunched": 0, "end": 2205579, "filename": "/home/web_user/.terminfo/t/tvi920c-vb-p"}, {"audio": 0, "start": 2205579, "crunched": 0, "end": 2206211, "filename": "/home/web_user/.terminfo/t/tty5620-24"}, {"audio": 0, "start": 2206211, "crunched": 0, "end": 2207340, "filename": "/home/web_user/.terminfo/t/tty5410v1"}, {"audio": 0, "start": 2207340, "crunched": 0, "end": 2208451, "filename": "/home/web_user/.terminfo/t/tvi912c-unk-2p"}, {"audio": 0, "start": 2208451, "crunched": 0, "end": 2209555, "filename": "/home/web_user/.terminfo/t/tab132"}, {"audio": 0, "start": 2209555, "crunched": 0, "end": 2210314, "filename": "/home/web_user/.terminfo/t/tvi955"}, {"audio": 0, "start": 2210314, "crunched": 0, "end": 2211448, "filename": "/home/web_user/.terminfo/t/tvi912c-unk-vb"}, {"audio": 0, "start": 2211448, "crunched": 0, "end": 2212080, "filename": "/home/web_user/.terminfo/t/tty5620-34"}, {"audio": 0, "start": 2212080, "crunched": 0, "end": 2212623, "filename": "/home/web_user/.terminfo/t/tty4420"}, {"audio": 0, "start": 2212623, "crunched": 0, "end": 2213090, "filename": "/home/web_user/.terminfo/t/t653x"}, {"audio": 0, "start": 2213090, "crunched": 0, "end": 2213804, "filename": "/home/web_user/.terminfo/t/tvi970-vb"}, {"audio": 0, "start": 2213804, "crunched": 0, "end": 2215038, "filename": "/home/web_user/.terminfo/t/tvi912c-2p-mc"}, {"audio": 0, "start": 2215038, "crunched": 0, "end": 2215561, "filename": "/home/web_user/.terminfo/t/tek4113-nd"}, {"audio": 0, "start": 2215561, "crunched": 0, "end": 2216015, "filename": "/home/web_user/.terminfo/t/tgtelnet"}, {"audio": 0, "start": 2216015, "crunched": 0, "end": 2216571, "filename": "/home/web_user/.terminfo/t/t1061f"}, {"audio": 0, "start": 2216571, "crunched": 0, "end": 2217563, "filename": "/home/web_user/.terminfo/t/tek4023"}, {"audio": 0, "start": 2217563, "crunched": 0, "end": 2219448, "filename": "/home/web_user/.terminfo/t/tek4205"}, {"audio": 0, "start": 2219448, "crunched": 0, "end": 2219810, "filename": "/home/web_user/.terminfo/t/teletec"}, {"audio": 0, "start": 2219810, "crunched": 0, "end": 2220498, "filename": "/home/web_user/.terminfo/t/tvi950-rv"}, {"audio": 0, "start": 2220498, "crunched": 0, "end": 2220850, "filename": "/home/web_user/.terminfo/t/t3700"}, {"audio": 0, "start": 2220850, "crunched": 0, "end": 2221336, "filename": "/home/web_user/.terminfo/t/tty4424m"}, {"audio": 0, "start": 2221336, "crunched": 0, "end": 2221937, "filename": "/home/web_user/.terminfo/t/tvi925-hi"}, {"audio": 0, "start": 2221937, "crunched": 0, "end": 2222151, "filename": "/home/web_user/.terminfo/t/tek4012"}, {"audio": 0, "start": 2222151, "crunched": 0, "end": 2223120, "filename": "/home/web_user/.terminfo/t/tvi912cc"}, {"audio": 0, "start": 2223120, "crunched": 0, "end": 2223504, "filename": "/home/web_user/.terminfo/t/terminet"}, {"audio": 0, "start": 2223504, "crunched": 0, "end": 2224601, "filename": "/home/web_user/.terminfo/t/tvi920c-p"}, {"audio": 0, "start": 2224601, "crunched": 0, "end": 2225751, "filename": "/home/web_user/.terminfo/t/ti928"}, {"audio": 0, "start": 2225751, "crunched": 0, "end": 2226219, "filename": "/home/web_user/.terminfo/t/tek4025-cr"}, {"audio": 0, "start": 2226219, "crunched": 0, "end": 2227359, "filename": "/home/web_user/.terminfo/t/tvi912c-vb"}, {"audio": 0, "start": 2227359, "crunched": 0, "end": 2228463, "filename": "/home/web_user/.terminfo/t/tab132-15"}, {"audio": 0, "start": 2228463, "crunched": 0, "end": 2229720, "filename": "/home/web_user/.terminfo/t/tvi912b-mc-vb"}, {"audio": 0, "start": 2229720, "crunched": 0, "end": 2230854, "filename": "/home/web_user/.terminfo/t/tvi912b-unk-vb"}, {"audio": 0, "start": 2230854, "crunched": 0, "end": 2231965, "filename": "/home/web_user/.terminfo/t/tvi912b-2p-unk"}, {"audio": 0, "start": 2231965, "crunched": 0, "end": 2232974, "filename": "/home/web_user/.terminfo/t/tvi912b-p"}, {"audio": 0, "start": 2232974, "crunched": 0, "end": 2234558, "filename": "/home/web_user/.terminfo/t/teraterm4.59"}, {"audio": 0, "start": 2234558, "crunched": 0, "end": 2236054, "filename": "/home/web_user/.terminfo/t/ti916-8-132"}, {"audio": 0, "start": 2236054, "crunched": 0, "end": 2236829, "filename": "/home/web_user/.terminfo/t/tvi955-hb"}, {"audio": 0, "start": 2236829, "crunched": 0, "end": 2237558, "filename": "/home/web_user/.terminfo/t/tvi970-2p"}, {"audio": 0, "start": 2237558, "crunched": 0, "end": 2238612, "filename": "/home/web_user/.terminfo/t/tab132-w-rv"}, {"audio": 0, "start": 2238612, "crunched": 0, "end": 2239811, "filename": "/home/web_user/.terminfo/t/tvi920c-unk-2p"}, {"audio": 0, "start": 2239811, "crunched": 0, "end": 2240207, "filename": "/home/web_user/.terminfo/t/ti733"}, {"audio": 0, "start": 2240207, "crunched": 0, "end": 2240864, "filename": "/home/web_user/.terminfo/t/tek4207"}, {"audio": 0, "start": 2240864, "crunched": 0, "end": 2241203, "filename": "/home/web_user/.terminfo/t/tvi912b+printer"}, {"audio": 0, "start": 2241203, "crunched": 0, "end": 2241477, "filename": "/home/web_user/.terminfo/t/tvi912b+vb"}, {"audio": 0, "start": 2241477, "crunched": 0, "end": 2241928, "filename": "/home/web_user/.terminfo/t/trs2"}, {"audio": 0, "start": 2241928, "crunched": 0, "end": 2243039, "filename": "/home/web_user/.terminfo/t/tvi912b-unk-2p"}, {"audio": 0, "start": 2243039, "crunched": 0, "end": 2244245, "filename": "/home/web_user/.terminfo/t/tvi920c-p-2p"}, {"audio": 0, "start": 2244245, "crunched": 0, "end": 2245397, "filename": "/home/web_user/.terminfo/t/tty5410-w"}, {"audio": 0, "start": 2245397, "crunched": 0, "end": 2245953, "filename": "/home/web_user/.terminfo/t/trs16"}, {"audio": 0, "start": 2245953, "crunched": 0, "end": 2246550, "filename": "/home/web_user/.terminfo/t/ti926"}, {"audio": 0, "start": 2246550, "crunched": 0, "end": 2247772, "filename": "/home/web_user/.terminfo/t/tvi920b-vb-unk"}, {"audio": 0, "start": 2247772, "crunched": 0, "end": 2248983, "filename": "/home/web_user/.terminfo/t/tvi920c-mc"}, {"audio": 0, "start": 2248983, "crunched": 0, "end": 2250189, "filename": "/home/web_user/.terminfo/t/tvi920c-2p-p"}, {"audio": 0, "start": 2250189, "crunched": 0, "end": 2251109, "filename": "/home/web_user/.terminfo/t/tek4109brl"}, {"audio": 0, "start": 2251109, "crunched": 0, "end": 2252818, "filename": "/home/web_user/.terminfo/t/teraterm4.97"}, {"audio": 0, "start": 2252818, "crunched": 0, "end": 2253444, "filename": "/home/web_user/.terminfo/t/tty5620"}, {"audio": 0, "start": 2253444, "crunched": 0, "end": 2254251, "filename": "/home/web_user/.terminfo/t/tty4426"}, {"audio": 0, "start": 2254251, "crunched": 0, "end": 2255097, "filename": "/home/web_user/.terminfo/t/tek4207-s"}, {"audio": 0, "start": 2255097, "crunched": 0, "end": 2256607, "filename": "/home/web_user/.terminfo/t/ti916-220-8"}, {"audio": 0, "start": 2256607, "crunched": 0, "end": 2257284, "filename": "/home/web_user/.terminfo/t/tek4027-ex"}, {"audio": 0, "start": 2257284, "crunched": 0, "end": 2258606, "filename": "/home/web_user/.terminfo/t/tvi920c-2p-mc"}, {"audio": 0, "start": 2258606, "crunched": 0, "end": 2259747, "filename": "/home/web_user/.terminfo/t/tvi912c-vb-p"}, {"audio": 0, "start": 2259747, "crunched": 0, "end": 2260881, "filename": "/home/web_user/.terminfo/t/tvi912b-vb-unk"}, {"audio": 0, "start": 2260881, "crunched": 0, "end": 2261980, "filename": "/home/web_user/.terminfo/t/tek4125"}, {"audio": 0, "start": 2261980, "crunched": 0, "end": 2263419, "filename": "/home/web_user/.terminfo/t/tws2103-sna"}, {"audio": 0, "start": 2263419, "crunched": 0, "end": 2263647, "filename": "/home/web_user/.terminfo/t/tek4014-sm"}, {"audio": 0, "start": 2263647, "crunched": 0, "end": 2264788, "filename": "/home/web_user/.terminfo/t/tvi912c-p-vb"}, {"audio": 0, "start": 2264788, "crunched": 0, "end": 2265465, "filename": "/home/web_user/.terminfo/t/tek4025-ex"}, {"audio": 0, "start": 2265465, "crunched": 0, "end": 2265894, "filename": "/home/web_user/.terminfo/t/tek4015-sm"}, {"audio": 0, "start": 2265894, "crunched": 0, "end": 2266460, "filename": "/home/web_user/.terminfo/t/teleray"}, {"audio": 0, "start": 2266460, "crunched": 0, "end": 2267850, "filename": "/home/web_user/.terminfo/t/tty5420-w"}, {"audio": 0, "start": 2267850, "crunched": 0, "end": 2268972, "filename": "/home/web_user/.terminfo/t/tvi920b"}, {"audio": 0, "start": 2268972, "crunched": 0, "end": 2270368, "filename": "/home/web_user/.terminfo/t/tty5420-rv"}, {"audio": 0, "start": 2270368, "crunched": 0, "end": 2270866, "filename": "/home/web_user/.terminfo/t/tek4113-34"}, {"audio": 0, "start": 2270866, "crunched": 0, "end": 2271641, "filename": "/home/web_user/.terminfo/t/tty4424"}, {"audio": 0, "start": 2271641, "crunched": 0, "end": 2272677, "filename": "/home/web_user/.terminfo/t/tab132-w"}, {"audio": 0, "start": 2272677, "crunched": 0, "end": 2273911, "filename": "/home/web_user/.terminfo/t/tvi912b-mc-2p"}, {"audio": 0, "start": 2273911, "crunched": 0, "end": 2275008, "filename": "/home/web_user/.terminfo/t/tvi920b-p"}, {"audio": 0, "start": 2275008, "crunched": 0, "end": 2276237, "filename": "/home/web_user/.terminfo/t/tvi920c-p-vb"}, {"audio": 0, "start": 2276237, "crunched": 0, "end": 2276828, "filename": "/home/web_user/.terminfo/t/ti924-8w"}, {"audio": 0, "start": 2276828, "crunched": 0, "end": 2278085, "filename": "/home/web_user/.terminfo/t/tvi912c-mc-vb"}, {"audio": 0, "start": 2278085, "crunched": 0, "end": 2278691, "filename": "/home/web_user/.terminfo/t/tvi910"}, {"audio": 0, "start": 2278691, "crunched": 0, "end": 2279158, "filename": "/home/web_user/.terminfo/t/tandem653"}, {"audio": 0, "start": 2279158, "crunched": 0, "end": 2279542, "filename": "/home/web_user/.terminfo/t/tn1200"}, {"audio": 0, "start": 2279542, "crunched": 0, "end": 2279938, "filename": "/home/web_user/.terminfo/t/ti700"}, {"audio": 0, "start": 2279938, "crunched": 0, "end": 2280668, "filename": "/home/web_user/.terminfo/t/tvi950-rv-4p"}, {"audio": 0, "start": 2280668, "crunched": 0, "end": 2281290, "filename": "/home/web_user/.terminfo/2/2621-wl"}, {"audio": 0, "start": 2281290, "crunched": 0, "end": 2281912, "filename": "/home/web_user/.terminfo/2/2621A"}, {"audio": 0, "start": 2281912, "crunched": 0, "end": 2282534, "filename": "/home/web_user/.terminfo/2/2621a"}, {"audio": 0, "start": 2282534, "crunched": 0, "end": 2283156, "filename": "/home/web_user/.terminfo/2/2621"}, {"audio": 0, "start": 2283156, "crunched": 0, "end": 2283966, "filename": "/home/web_user/.terminfo/o/oconcept"}, {"audio": 0, "start": 2283966, "crunched": 0, "end": 2284414, "filename": "/home/web_user/.terminfo/o/ojerq"}, {"audio": 0, "start": 2284414, "crunched": 0, "end": 2285951, "filename": "/home/web_user/.terminfo/o/opennt"}, {"audio": 0, "start": 2285951, "crunched": 0, "end": 2287464, "filename": "/home/web_user/.terminfo/o/opennt-60"}, {"audio": 0, "start": 2287464, "crunched": 0, "end": 2287894, "filename": "/home/web_user/.terminfo/o/osborne1"}, {"audio": 0, "start": 2287894, "crunched": 0, "end": 2289413, "filename": "/home/web_user/.terminfo/o/opennt-60-w"}, {"audio": 0, "start": 2289413, "crunched": 0, "end": 2290948, "filename": "/home/web_user/.terminfo/o/opennt-w"}, {"audio": 0, "start": 2290948, "crunched": 0, "end": 2291473, "filename": "/home/web_user/.terminfo/o/oldsun"}, {"audio": 0, "start": 2291473, "crunched": 0, "end": 2291921, "filename": "/home/web_user/.terminfo/o/oblit"}, {"audio": 0, "start": 2291921, "crunched": 0, "end": 2292300, "filename": "/home/web_user/.terminfo/o/otek4113"}, {"audio": 0, "start": 2292300, "crunched": 0, "end": 2293819, "filename": "/home/web_user/.terminfo/o/opennt-50-w"}, {"audio": 0, "start": 2293819, "crunched": 0, "end": 2294196, "filename": "/home/web_user/.terminfo/o/os9LII"}, {"audio": 0, "start": 2294196, "crunched": 0, "end": 2295701, "filename": "/home/web_user/.terminfo/o/opennt-60-nti"}, {"audio": 0, "start": 2295701, "crunched": 0, "end": 2296125, "filename": "/home/web_user/.terminfo/o/osborne1-w"}, {"audio": 0, "start": 2296125, "crunched": 0, "end": 2297634, "filename": "/home/web_user/.terminfo/o/opennt-100-nti"}, {"audio": 0, "start": 2297634, "crunched": 0, "end": 2299017, "filename": "/home/web_user/.terminfo/o/opus3n1+"}, {"audio": 0, "start": 2299017, "crunched": 0, "end": 2299487, "filename": "/home/web_user/.terminfo/o/o31"}, {"audio": 0, "start": 2299487, "crunched": 0, "end": 2301000, "filename": "/home/web_user/.terminfo/o/opennt-50"}, {"audio": 0, "start": 2301000, "crunched": 0, "end": 2301810, "filename": "/home/web_user/.terminfo/o/oc100"}, {"audio": 0, "start": 2301810, "crunched": 0, "end": 2303331, "filename": "/home/web_user/.terminfo/o/opennt-25-nti"}, {"audio": 0, "start": 2303331, "crunched": 0, "end": 2304080, "filename": "/home/web_user/.terminfo/o/otek4115"}, {"audio": 0, "start": 2304080, "crunched": 0, "end": 2305629, "filename": "/home/web_user/.terminfo/o/opennt-25-w-vt"}, {"audio": 0, "start": 2305629, "crunched": 0, "end": 2307134, "filename": "/home/web_user/.terminfo/o/opennt-35-nti"}, {"audio": 0, "start": 2307134, "crunched": 0, "end": 2308655, "filename": "/home/web_user/.terminfo/o/opennt-nti"}, {"audio": 0, "start": 2308655, "crunched": 0, "end": 2309034, "filename": "/home/web_user/.terminfo/o/o4112-nd"}, {"audio": 0, "start": 2309034, "crunched": 0, "end": 2309413, "filename": "/home/web_user/.terminfo/o/otek4114"}, {"audio": 0, "start": 2309413, "crunched": 0, "end": 2310038, "filename": "/home/web_user/.terminfo/o/ofcons"}, {"audio": 0, "start": 2310038, "crunched": 0, "end": 2310485, "filename": "/home/web_user/.terminfo/o/oldpc3"}, {"audio": 0, "start": 2310485, "crunched": 0, "end": 2310864, "filename": "/home/web_user/.terminfo/o/otek4112"}, {"audio": 0, "start": 2310864, "crunched": 0, "end": 2311294, "filename": "/home/web_user/.terminfo/o/osborne"}, {"audio": 0, "start": 2311294, "crunched": 0, "end": 2312831, "filename": "/home/web_user/.terminfo/o/opennt-25"}, {"audio": 0, "start": 2312831, "crunched": 0, "end": 2313377, "filename": "/home/web_user/.terminfo/o/owl"}, {"audio": 0, "start": 2313377, "crunched": 0, "end": 2313765, "filename": "/home/web_user/.terminfo/o/omron"}, {"audio": 0, "start": 2313765, "crunched": 0, "end": 2315314, "filename": "/home/web_user/.terminfo/o/opennt-w-vt"}, {"audio": 0, "start": 2315314, "crunched": 0, "end": 2316831, "filename": "/home/web_user/.terminfo/o/opennt-100"}, {"audio": 0, "start": 2316831, "crunched": 0, "end": 2318350, "filename": "/home/web_user/.terminfo/o/opennt-35-w"}, {"audio": 0, "start": 2318350, "crunched": 0, "end": 2319648, "filename": "/home/web_user/.terminfo/o/old-st"}, {"audio": 0, "start": 2319648, "crunched": 0, "end": 2321153, "filename": "/home/web_user/.terminfo/o/opennt-50-nti"}, {"audio": 0, "start": 2321153, "crunched": 0, "end": 2322666, "filename": "/home/web_user/.terminfo/o/opennt-35"}, {"audio": 0, "start": 2322666, "crunched": 0, "end": 2323230, "filename": "/home/web_user/.terminfo/o/origpc3"}, {"audio": 0, "start": 2323230, "crunched": 0, "end": 2323843, "filename": "/home/web_user/.terminfo/o/oabm85h"}, {"audio": 0, "start": 2323843, "crunched": 0, "end": 2324290, "filename": "/home/web_user/.terminfo/o/oldibmpc3"}, {"audio": 0, "start": 2324290, "crunched": 0, "end": 2324714, "filename": "/home/web_user/.terminfo/o/osborne-w"}, {"audio": 0, "start": 2324714, "crunched": 0, "end": 2326249, "filename": "/home/web_user/.terminfo/o/opennt-25-w"}, {"audio": 0, "start": 2326249, "crunched": 0, "end": 2327330, "filename": "/home/web_user/.terminfo/o/osexec"}, {"audio": 0, "start": 2327330, "crunched": 0, "end": 2327943, "filename": "/home/web_user/.terminfo/o/o85h"}, {"audio": 0, "start": 2327943, "crunched": 0, "end": 2328507, "filename": "/home/web_user/.terminfo/o/origibmpc3"}, {"audio": 0, "start": 2328507, "crunched": 0, "end": 2329622, "filename": "/home/web_user/.terminfo/h/hp2382"}, {"audio": 0, "start": 2329622, "crunched": 0, "end": 2331411, "filename": "/home/web_user/.terminfo/h/hft-c-old"}, {"audio": 0, "start": 2331411, "crunched": 0, "end": 2332089, "filename": "/home/web_user/.terminfo/h/hp70092"}, {"audio": 0, "start": 2332089, "crunched": 0, "end": 2333345, "filename": "/home/web_user/.terminfo/h/hp2626-12x40"}, {"audio": 0, "start": 2333345, "crunched": 0, "end": 2334836, "filename": "/home/web_user/.terminfo/h/h29a-nkc-bc"}, {"audio": 0, "start": 2334836, "crunched": 0, "end": 2335514, "filename": "/home/web_user/.terminfo/h/hp70092a"}, {"audio": 0, "start": 2335514, "crunched": 0, "end": 2336895, "filename": "/home/web_user/.terminfo/h/hpterm"}, {"audio": 0, "start": 2336895, "crunched": 0, "end": 2337161, "filename": "/home/web_user/.terminfo/h/hp+pfk+arrows"}, {"audio": 0, "start": 2337161, "crunched": 0, "end": 2337776, "filename": "/home/web_user/.terminfo/h/hp2621-k45"}, {"audio": 0, "start": 2337776, "crunched": 0, "end": 2338325, "filename": "/home/web_user/.terminfo/h/hp2645a"}, {"audio": 0, "start": 2338325, "crunched": 0, "end": 2339017, "filename": "/home/web_user/.terminfo/h/hp2640b"}, {"audio": 0, "start": 2339017, "crunched": 0, "end": 2339748, "filename": "/home/web_user/.terminfo/h/hp2648a"}, {"audio": 0, "start": 2339748, "crunched": 0, "end": 2340318, "filename": "/home/web_user/.terminfo/h/hp2621-nl"}, {"audio": 0, "start": 2340318, "crunched": 0, "end": 2341793, "filename": "/home/web_user/.terminfo/h/h29a-kc-bc"}, {"audio": 0, "start": 2341793, "crunched": 0, "end": 2342037, "filename": "/home/web_user/.terminfo/h/hp+arrows"}, {"audio": 0, "start": 2342037, "crunched": 0, "end": 2342670, "filename": "/home/web_user/.terminfo/h/h19-smul"}, {"audio": 0, "start": 2342670, "crunched": 0, "end": 2343292, "filename": "/home/web_user/.terminfo/h/hp2621a"}, {"audio": 0, "start": 2343292, "crunched": 0, "end": 2344001, "filename": "/home/web_user/.terminfo/h/ha8675"}, {"audio": 0, "start": 2344001, "crunched": 0, "end": 2345801, "filename": "/home/web_user/.terminfo/h/hft-c"}, {"audio": 0, "start": 2345801, "crunched": 0, "end": 2346434, "filename": "/home/web_user/.terminfo/h/h19-us"}, {"audio": 0, "start": 2346434, "crunched": 0, "end": 2347666, "filename": "/home/web_user/.terminfo/h/hp2626a"}, {"audio": 0, "start": 2347666, "crunched": 0, "end": 2348236, "filename": "/home/web_user/.terminfo/h/hp2621-nt"}, {"audio": 0, "start": 2348236, "crunched": 0, "end": 2348858, "filename": "/home/web_user/.terminfo/h/hp2621A"}, {"audio": 0, "start": 2348858, "crunched": 0, "end": 2350353, "filename": "/home/web_user/.terminfo/h/h29a-nkc-uc"}, {"audio": 0, "start": 2350353, "crunched": 0, "end": 2350986, "filename": "/home/web_user/.terminfo/h/h19us"}, {"audio": 0, "start": 2350986, "crunched": 0, "end": 2351601, "filename": "/home/web_user/.terminfo/h/hp2621k45"}, {"audio": 0, "start": 2351601, "crunched": 0, "end": 2353407, "filename": "/home/web_user/.terminfo/h/hft"}, {"audio": 0, "start": 2353407, "crunched": 0, "end": 2354114, "filename": "/home/web_user/.terminfo/h/h-100"}, {"audio": 0, "start": 2354114, "crunched": 0, "end": 2354853, "filename": "/home/web_user/.terminfo/h/hp2621b-p"}, {"audio": 0, "start": 2354853, "crunched": 0, "end": 2356118, "filename": "/home/web_user/.terminfo/h/hp2624b"}, {"audio": 0, "start": 2356118, "crunched": 0, "end": 2356751, "filename": "/home/web_user/.terminfo/h/hp2627a"}, {"audio": 0, "start": 2356751, "crunched": 0, "end": 2358116, "filename": "/home/web_user/.terminfo/h/hp2"}, {"audio": 0, "start": 2358116, "crunched": 0, "end": 2359327, "filename": "/home/web_user/.terminfo/h/hpansi"}, {"audio": 0, "start": 2359327, "crunched": 0, "end": 2359709, "filename": "/home/web_user/.terminfo/h/hz1510"}, {"audio": 0, "start": 2359709, "crunched": 0, "end": 2360243, "filename": "/home/web_user/.terminfo/h/hpgeneric"}, {"audio": 0, "start": 2360243, "crunched": 0, "end": 2360844, "filename": "/home/web_user/.terminfo/h/h19g"}, {"audio": 0, "start": 2360844, "crunched": 0, "end": 2361417, "filename": "/home/web_user/.terminfo/h/hp2621-48"}, {"audio": 0, "start": 2361417, "crunched": 0, "end": 2362905, "filename": "/home/web_user/.terminfo/h/h29a-kc-uc"}, {"audio": 0, "start": 2362905, "crunched": 0, "end": 2363621, "filename": "/home/web_user/.terminfo/h/hp2621b"}, {"audio": 0, "start": 2363621, "crunched": 0, "end": 2364292, "filename": "/home/web_user/.terminfo/h/heathkit-a"}, {"audio": 0, "start": 2364292, "crunched": 0, "end": 2364890, "filename": "/home/web_user/.terminfo/h/hp2621p-a"}, {"audio": 0, "start": 2364890, "crunched": 0, "end": 2365244, "filename": "/home/web_user/.terminfo/h/hz1000"}, {"audio": 0, "start": 2365244, "crunched": 0, "end": 2365883, "filename": "/home/web_user/.terminfo/h/hp2627c"}, {"audio": 0, "start": 2365883, "crunched": 0, "end": 2367662, "filename": "/home/web_user/.terminfo/h/hp2397"}, {"audio": 0, "start": 2367662, "crunched": 0, "end": 2368289, "filename": "/home/web_user/.terminfo/h/heath"}, {"audio": 0, "start": 2368289, "crunched": 0, "end": 2368724, "filename": "/home/web_user/.terminfo/h/hz1520"}, {"audio": 0, "start": 2368724, "crunched": 0, "end": 2369919, "filename": "/home/web_user/.terminfo/h/hp2622"}, {"audio": 0, "start": 2369919, "crunched": 0, "end": 2371698, "filename": "/home/web_user/.terminfo/h/hp2397a"}, {"audio": 0, "start": 2371698, "crunched": 0, "end": 2372987, "filename": "/home/web_user/.terminfo/h/hp2624b-10p"}, {"audio": 0, "start": 2372987, "crunched": 0, "end": 2374285, "filename": "/home/web_user/.terminfo/h/hp2624b-p"}, {"audio": 0, "start": 2374285, "crunched": 0, "end": 2375661, "filename": "/home/web_user/.terminfo/h/hp2626-12-s"}, {"audio": 0, "start": 2375661, "crunched": 0, "end": 2376223, "filename": "/home/web_user/.terminfo/h/hp98721"}, {"audio": 0, "start": 2376223, "crunched": 0, "end": 2376628, "filename": "/home/web_user/.terminfo/h/hz1420"}, {"audio": 0, "start": 2376628, "crunched": 0, "end": 2377913, "filename": "/home/web_user/.terminfo/h/hazel"}, {"audio": 0, "start": 2377913, "crunched": 0, "end": 2378878, "filename": "/home/web_user/.terminfo/h/hp+color"}, {"audio": 0, "start": 2378878, "crunched": 0, "end": 2380180, "filename": "/home/web_user/.terminfo/h/hp2624b-10p-p"}, {"audio": 0, "start": 2380180, "crunched": 0, "end": 2380686, "filename": "/home/web_user/.terminfo/h/hp262x"}, {"audio": 0, "start": 2380686, "crunched": 0, "end": 2381217, "filename": "/home/web_user/.terminfo/h/hz1552-rv"}, {"audio": 0, "start": 2381217, "crunched": 0, "end": 2382502, "filename": "/home/web_user/.terminfo/h/he80"}, {"audio": 0, "start": 2382502, "crunched": 0, "end": 2382916, "filename": "/home/web_user/.terminfo/h/hmod1"}, {"audio": 0, "start": 2382916, "crunched": 0, "end": 2384205, "filename": "/home/web_user/.terminfo/h/hp2624a-10p"}, {"audio": 0, "start": 2384205, "crunched": 0, "end": 2385320, "filename": "/home/web_user/.terminfo/h/hp2382a"}, {"audio": 0, "start": 2385320, "crunched": 0, "end": 2385912, "filename": "/home/web_user/.terminfo/h/hp2621-a"}, {"audio": 0, "start": 2385912, "crunched": 0, "end": 2386933, "filename": "/home/web_user/.terminfo/h/hp9845"}, {"audio": 0, "start": 2386933, "crunched": 0, "end": 2387495, "filename": "/home/web_user/.terminfo/h/hp9837"}, {"audio": 0, "start": 2387495, "crunched": 0, "end": 2388104, "filename": "/home/web_user/.terminfo/h/h19-bs"}, {"audio": 0, "start": 2388104, "crunched": 0, "end": 2388714, "filename": "/home/web_user/.terminfo/h/hp2392"}, {"audio": 0, "start": 2388714, "crunched": 0, "end": 2389385, "filename": "/home/web_user/.terminfo/h/heath-ansi"}, {"audio": 0, "start": 2389385, "crunched": 0, "end": 2389919, "filename": "/home/web_user/.terminfo/h/hp"}, {"audio": 0, "start": 2389919, "crunched": 0, "end": 2391140, "filename": "/home/web_user/.terminfo/h/hp150"}, {"audio": 0, "start": 2391140, "crunched": 0, "end": 2391946, "filename": "/home/web_user/.terminfo/h/hirez100"}, {"audio": 0, "start": 2391946, "crunched": 0, "end": 2393211, "filename": "/home/web_user/.terminfo/h/hp2624"}, {"audio": 0, "start": 2393211, "crunched": 0, "end": 2393598, "filename": "/home/web_user/.terminfo/h/hz2000"}, {"audio": 0, "start": 2393598, "crunched": 0, "end": 2394379, "filename": "/home/web_user/.terminfo/h/hp2621b-kx-p"}, {"audio": 0, "start": 2394379, "crunched": 0, "end": 2395121, "filename": "/home/web_user/.terminfo/h/hp2621b-kx"}, {"audio": 0, "start": 2395121, "crunched": 0, "end": 2396386, "filename": "/home/web_user/.terminfo/h/hp2624a"}, {"audio": 0, "start": 2396386, "crunched": 0, "end": 2397618, "filename": "/home/web_user/.terminfo/h/hp2626"}, {"audio": 0, "start": 2397618, "crunched": 0, "end": 2398245, "filename": "/home/web_user/.terminfo/h/heath-19"}, {"audio": 0, "start": 2398245, "crunched": 0, "end": 2398475, "filename": "/home/web_user/.terminfo/h/hp+pfk+cr"}, {"audio": 0, "start": 2398475, "crunched": 0, "end": 2399206, "filename": "/home/web_user/.terminfo/h/hp2648"}, {"audio": 0, "start": 2399206, "crunched": 0, "end": 2400417, "filename": "/home/web_user/.terminfo/h/hp700"}, {"audio": 0, "start": 2400417, "crunched": 0, "end": 2401612, "filename": "/home/web_user/.terminfo/h/hp2623"}, {"audio": 0, "start": 2401612, "crunched": 0, "end": 2401945, "filename": "/home/web_user/.terminfo/h/hp+printer"}, {"audio": 0, "start": 2401945, "crunched": 0, "end": 2402520, "filename": "/home/web_user/.terminfo/h/hpex"}, {"audio": 0, "start": 2402520, "crunched": 0, "end": 2403885, "filename": "/home/web_user/.terminfo/h/hpex2"}, {"audio": 0, "start": 2403885, "crunched": 0, "end": 2405150, "filename": "/home/web_user/.terminfo/h/hp2624b-4p"}, {"audio": 0, "start": 2405150, "crunched": 0, "end": 2405772, "filename": "/home/web_user/.terminfo/h/hp2621-wl"}, {"audio": 0, "start": 2405772, "crunched": 0, "end": 2406315, "filename": "/home/web_user/.terminfo/h/hpsub"}, {"audio": 0, "start": 2406315, "crunched": 0, "end": 2406944, "filename": "/home/web_user/.terminfo/h/h19k"}, {"audio": 0, "start": 2406944, "crunched": 0, "end": 2407493, "filename": "/home/web_user/.terminfo/h/hp2641a"}, {"audio": 0, "start": 2407493, "crunched": 0, "end": 2408164, "filename": "/home/web_user/.terminfo/h/h19a"}, {"audio": 0, "start": 2408164, "crunched": 0, "end": 2408793, "filename": "/home/web_user/.terminfo/h/h19kermit"}, {"audio": 0, "start": 2408793, "crunched": 0, "end": 2409176, "filename": "/home/web_user/.terminfo/h/hz1520-noesc"}, {"audio": 0, "start": 2409176, "crunched": 0, "end": 2409883, "filename": "/home/web_user/.terminfo/h/h100"}, {"audio": 0, "start": 2409883, "crunched": 0, "end": 2410510, "filename": "/home/web_user/.terminfo/h/h19"}, {"audio": 0, "start": 2410510, "crunched": 0, "end": 2411102, "filename": "/home/web_user/.terminfo/h/hp2621a-a"}, {"audio": 0, "start": 2411102, "crunched": 0, "end": 2411790, "filename": "/home/web_user/.terminfo/h/hp700-wy"}, {"audio": 0, "start": 2411790, "crunched": 0, "end": 2412391, "filename": "/home/web_user/.terminfo/h/h19-g"}, {"audio": 0, "start": 2412391, "crunched": 0, "end": 2413676, "filename": "/home/web_user/.terminfo/h/h80"}, {"audio": 0, "start": 2413676, "crunched": 0, "end": 2414303, "filename": "/home/web_user/.terminfo/h/h19-b"}, {"audio": 0, "start": 2414303, "crunched": 0, "end": 2415044, "filename": "/home/web_user/.terminfo/h/hp98550"}, {"audio": 0, "start": 2415044, "crunched": 0, "end": 2415633, "filename": "/home/web_user/.terminfo/h/hp300h"}, {"audio": 0, "start": 2415633, "crunched": 0, "end": 2416168, "filename": "/home/web_user/.terminfo/h/htx11"}, {"audio": 0, "start": 2416168, "crunched": 0, "end": 2417412, "filename": "/home/web_user/.terminfo/h/hp2626-x40"}, {"audio": 0, "start": 2417412, "crunched": 0, "end": 2417961, "filename": "/home/web_user/.terminfo/h/hp2647a"}, {"audio": 0, "start": 2417961, "crunched": 0, "end": 2418789, "filename": "/home/web_user/.terminfo/h/hirez100-w"}, {"audio": 0, "start": 2418789, "crunched": 0, "end": 2420087, "filename": "/home/web_user/.terminfo/h/hp2626-ns"}, {"audio": 0, "start": 2420087, "crunched": 0, "end": 2421980, "filename": "/home/web_user/.terminfo/h/hurd"}, {"audio": 0, "start": 2421980, "crunched": 0, "end": 2422680, "filename": "/home/web_user/.terminfo/h/hp45"}, {"audio": 0, "start": 2422680, "crunched": 0, "end": 2423282, "filename": "/home/web_user/.terminfo/h/hp2621-ba"}, {"audio": 0, "start": 2423282, "crunched": 0, "end": 2423844, "filename": "/home/web_user/.terminfo/h/hp98720"}, {"audio": 0, "start": 2423844, "crunched": 0, "end": 2424333, "filename": "/home/web_user/.terminfo/h/hp+labels"}, {"audio": 0, "start": 2424333, "crunched": 0, "end": 2424968, "filename": "/home/web_user/.terminfo/h/hp2627a-rev"}, {"audio": 0, "start": 2424968, "crunched": 0, "end": 2425475, "filename": "/home/web_user/.terminfo/h/hz1552"}, {"audio": 0, "start": 2425475, "crunched": 0, "end": 2426153, "filename": "/home/web_user/.terminfo/h/hp70092A"}, {"audio": 0, "start": 2426153, "crunched": 0, "end": 2427442, "filename": "/home/web_user/.terminfo/h/hp2624-10p"}, {"audio": 0, "start": 2427442, "crunched": 0, "end": 2428008, "filename": "/home/web_user/.terminfo/h/hp2621-fl"}, {"audio": 0, "start": 2428008, "crunched": 0, "end": 2429203, "filename": "/home/web_user/.terminfo/h/hp2622a"}, {"audio": 0, "start": 2429203, "crunched": 0, "end": 2429892, "filename": "/home/web_user/.terminfo/h/h100bw"}, {"audio": 0, "start": 2429892, "crunched": 0, "end": 2430163, "filename": "/home/web_user/.terminfo/h/hp236"}, {"audio": 0, "start": 2430163, "crunched": 0, "end": 2430615, "filename": "/home/web_user/.terminfo/h/hz1500"}, {"audio": 0, "start": 2430615, "crunched": 0, "end": 2431488, "filename": "/home/web_user/.terminfo/h/ha8686"}, {"audio": 0, "start": 2431488, "crunched": 0, "end": 2432115, "filename": "/home/web_user/.terminfo/h/heathkit"}, {"audio": 0, "start": 2432115, "crunched": 0, "end": 2432856, "filename": "/home/web_user/.terminfo/h/hp98550a"}, {"audio": 0, "start": 2432856, "crunched": 0, "end": 2433446, "filename": "/home/web_user/.terminfo/h/hp2621p"}, {"audio": 0, "start": 2433446, "crunched": 0, "end": 2434744, "filename": "/home/web_user/.terminfo/h/hp2624b-4p-p"}, {"audio": 0, "start": 2434744, "crunched": 0, "end": 2435272, "filename": "/home/web_user/.terminfo/h/hp110"}, {"audio": 0, "start": 2435272, "crunched": 0, "end": 2436630, "filename": "/home/web_user/.terminfo/h/hp2626-s"}, {"audio": 0, "start": 2436630, "crunched": 0, "end": 2436850, "filename": "/home/web_user/.terminfo/h/hp+pfk-cr"}, {"audio": 0, "start": 2436850, "crunched": 0, "end": 2438045, "filename": "/home/web_user/.terminfo/h/hp2623a"}, {"audio": 0, "start": 2438045, "crunched": 0, "end": 2438716, "filename": "/home/web_user/.terminfo/h/h19-a"}, {"audio": 0, "start": 2438716, "crunched": 0, "end": 2439408, "filename": "/home/web_user/.terminfo/h/hp2644a"}, {"audio": 0, "start": 2439408, "crunched": 0, "end": 2440883, "filename": "/home/web_user/.terminfo/h/hpterm-color"}, {"audio": 0, "start": 2440883, "crunched": 0, "end": 2442125, "filename": "/home/web_user/.terminfo/h/hp2626-12"}, {"audio": 0, "start": 2442125, "crunched": 0, "end": 2442783, "filename": "/home/web_user/.terminfo/h/hp2640a"}, {"audio": 0, "start": 2442783, "crunched": 0, "end": 2444415, "filename": "/home/web_user/.terminfo/h/hds200"}, {"audio": 0, "start": 2444415, "crunched": 0, "end": 2445014, "filename": "/home/web_user/.terminfo/h/h19-u"}, {"audio": 0, "start": 2445014, "crunched": 0, "end": 2445636, "filename": "/home/web_user/.terminfo/h/hp2621"}, {"audio": 0, "start": 2445636, "crunched": 0, "end": 2446325, "filename": "/home/web_user/.terminfo/h/h-100bw"}, {"audio": 0, "start": 2446325, "crunched": 0, "end": 2447025, "filename": "/home/web_user/.terminfo/h/hp2645"}, {"audio": 0, "start": 2447025, "crunched": 0, "end": 2448257, "filename": "/home/web_user/.terminfo/h/hp2626p"}, {"audio": 0, "start": 2448257, "crunched": 0, "end": 2449471, "filename": "/home/web_user/.terminfo/h/hft-old"}, {"audio": 0, "start": 2449471, "crunched": 0, "end": 2451067, "filename": "/home/web_user/.terminfo/b/bq300-pc-w"}, {"audio": 0, "start": 2451067, "crunched": 0, "end": 2452352, "filename": "/home/web_user/.terminfo/b/bsdos-pc"}, {"audio": 0, "start": 2452352, "crunched": 0, "end": 2453952, "filename": "/home/web_user/.terminfo/b/bq300-pc-rv"}, {"audio": 0, "start": 2453952, "crunched": 0, "end": 2455481, "filename": "/home/web_user/.terminfo/b/bq300-8-pc"}, {"audio": 0, "start": 2455481, "crunched": 0, "end": 2456730, "filename": "/home/web_user/.terminfo/b/bsdos-pc-mono"}, {"audio": 0, "start": 2456730, "crunched": 0, "end": 2457339, "filename": "/home/web_user/.terminfo/b/bitgraph"}, {"audio": 0, "start": 2457339, "crunched": 0, "end": 2458639, "filename": "/home/web_user/.terminfo/b/bsdos-pc-nobold"}, {"audio": 0, "start": 2458639, "crunched": 0, "end": 2458972, "filename": "/home/web_user/.terminfo/b/beehive4"}, {"audio": 0, "start": 2458972, "crunched": 0, "end": 2459563, "filename": "/home/web_user/.terminfo/b/bg3.10rv"}, {"audio": 0, "start": 2459563, "crunched": 0, "end": 2461094, "filename": "/home/web_user/.terminfo/b/bq300-8-pc-w-rv"}, {"audio": 0, "start": 2461094, "crunched": 0, "end": 2462637, "filename": "/home/web_user/.terminfo/b/bq300-8w"}, {"audio": 0, "start": 2462637, "crunched": 0, "end": 2463818, "filename": "/home/web_user/.terminfo/b/bct510a"}, {"audio": 0, "start": 2463818, "crunched": 0, "end": 2464240, "filename": "/home/web_user/.terminfo/b/beehiveIIIm"}, {"audio": 0, "start": 2464240, "crunched": 0, "end": 2464756, "filename": "/home/web_user/.terminfo/b/bobcat"}, {"audio": 0, "start": 2464756, "crunched": 0, "end": 2465424, "filename": "/home/web_user/.terminfo/b/basic4"}, {"audio": 0, "start": 2465424, "crunched": 0, "end": 2465846, "filename": "/home/web_user/.terminfo/b/beehive3"}, {"audio": 0, "start": 2465846, "crunched": 0, "end": 2467172, "filename": "/home/web_user/.terminfo/b/bct510d"}, {"audio": 0, "start": 2467172, "crunched": 0, "end": 2468454, "filename": "/home/web_user/.terminfo/b/beterm"}, {"audio": 0, "start": 2468454, "crunched": 0, "end": 2468875, "filename": "/home/web_user/.terminfo/b/bantam"}, {"audio": 0, "start": 2468875, "crunched": 0, "end": 2469447, "filename": "/home/web_user/.terminfo/b/bg1.25rv"}, {"audio": 0, "start": 2469447, "crunched": 0, "end": 2471006, "filename": "/home/web_user/.terminfo/b/bq300-w-8rv"}, {"audio": 0, "start": 2471006, "crunched": 0, "end": 2471566, "filename": "/home/web_user/.terminfo/b/bg2.0"}, {"audio": 0, "start": 2471566, "crunched": 0, "end": 2473122, "filename": "/home/web_user/.terminfo/b/bq300-8rv"}, {"audio": 0, "start": 2473122, "crunched": 0, "end": 2474154, "filename": "/home/web_user/.terminfo/b/b-128"}, {"audio": 0, "start": 2474154, "crunched": 0, "end": 2475441, "filename": "/home/web_user/.terminfo/b/bsdos-ppc"}, {"audio": 0, "start": 2475441, "crunched": 0, "end": 2477045, "filename": "/home/web_user/.terminfo/b/bq300-pc-w-rv"}, {"audio": 0, "start": 2477045, "crunched": 0, "end": 2478593, "filename": "/home/web_user/.terminfo/b/bq300-8"}, {"audio": 0, "start": 2478593, "crunched": 0, "end": 2479153, "filename": "/home/web_user/.terminfo/b/bg3.10"}, {"audio": 0, "start": 2479153, "crunched": 0, "end": 2479676, "filename": "/home/web_user/.terminfo/b/bg1.25"}, {"audio": 0, "start": 2479676, "crunched": 0, "end": 2480687, "filename": "/home/web_user/.terminfo/b/basis"}, {"audio": 0, "start": 2480687, "crunched": 0, "end": 2482315, "filename": "/home/web_user/.terminfo/b/bq300-w"}, {"audio": 0, "start": 2482315, "crunched": 0, "end": 2482824, "filename": "/home/web_user/.terminfo/b/bee"}, {"audio": 0, "start": 2482824, "crunched": 0, "end": 2483246, "filename": "/home/web_user/.terminfo/b/bh3m"}, {"audio": 0, "start": 2483246, "crunched": 0, "end": 2484842, "filename": "/home/web_user/.terminfo/b/bq300-pc"}, {"audio": 0, "start": 2484842, "crunched": 0, "end": 2485433, "filename": "/home/web_user/.terminfo/b/bg2.0rv"}, {"audio": 0, "start": 2485433, "crunched": 0, "end": 2486682, "filename": "/home/web_user/.terminfo/b/bsdos-pc-m"}, {"audio": 0, "start": 2486682, "crunched": 0, "end": 2488326, "filename": "/home/web_user/.terminfo/b/bq300-w-rv"}, {"audio": 0, "start": 2488326, "crunched": 0, "end": 2488835, "filename": "/home/web_user/.terminfo/b/beehive"}, {"audio": 0, "start": 2488835, "crunched": 0, "end": 2489168, "filename": "/home/web_user/.terminfo/b/bh4"}, {"audio": 0, "start": 2489168, "crunched": 0, "end": 2490687, "filename": "/home/web_user/.terminfo/b/bq300-8-pc-w"}, {"audio": 0, "start": 2490687, "crunched": 0, "end": 2491257, "filename": "/home/web_user/.terminfo/b/bg1.25nv"}, {"audio": 0, "start": 2491257, "crunched": 0, "end": 2491849, "filename": "/home/web_user/.terminfo/b/beacon"}, {"audio": 0, "start": 2491849, "crunched": 0, "end": 2493485, "filename": "/home/web_user/.terminfo/b/bq300-rv"}, {"audio": 0, "start": 2493485, "crunched": 0, "end": 2495131, "filename": "/home/web_user/.terminfo/b/bq300"}, {"audio": 0, "start": 2495131, "crunched": 0, "end": 2496664, "filename": "/home/web_user/.terminfo/b/bq300-8-pc-rv"}, {"audio": 0, "start": 2496664, "crunched": 0, "end": 2497154, "filename": "/home/web_user/.terminfo/b/blit"}, {"audio": 0, "start": 2497154, "crunched": 0, "end": 2498309, "filename": "/home/web_user/.terminfo/b/bterm"}, {"audio": 0, "start": 2498309, "crunched": 0, "end": 2498918, "filename": "/home/web_user/.terminfo/b/bg3.10nv"}, {"audio": 0, "start": 2498918, "crunched": 0, "end": 2499527, "filename": "/home/web_user/.terminfo/b/bg2.0nv"}, {"audio": 0, "start": 2499527, "crunched": 0, "end": 2500511, "filename": "/home/web_user/.terminfo/b/bsdos-sparc"}, {"audio": 0, "start": 2500511, "crunched": 0, "end": 2501653, "filename": "/home/web_user/.terminfo/e/emots"}, {"audio": 0, "start": 2501653, "crunched": 0, "end": 2503153, "filename": "/home/web_user/.terminfo/e/ecma+color"}, {"audio": 0, "start": 2503153, "crunched": 0, "end": 2503523, "filename": "/home/web_user/.terminfo/e/ep4080"}, {"audio": 0, "start": 2503523, "crunched": 0, "end": 2503893, "filename": "/home/web_user/.terminfo/e/ep40"}, {"audio": 0, "start": 2503893, "crunched": 0, "end": 2504950, "filename": "/home/web_user/.terminfo/e/ecma+sgr"}, {"audio": 0, "start": 2504950, "crunched": 0, "end": 2505367, "filename": "/home/web_user/.terminfo/e/elks"}, {"audio": 0, "start": 2505367, "crunched": 0, "end": 2505737, "filename": "/home/web_user/.terminfo/e/ep4000"}, {"audio": 0, "start": 2505737, "crunched": 0, "end": 2506780, "filename": "/home/web_user/.terminfo/e/excel64-rv"}, {"audio": 0, "start": 2506780, "crunched": 0, "end": 2507418, "filename": "/home/web_user/.terminfo/e/ergo4000"}, {"audio": 0, "start": 2507418, "crunched": 0, "end": 2507803, "filename": "/home/web_user/.terminfo/e/elks-glasstty"}, {"audio": 0, "start": 2507803, "crunched": 0, "end": 2508571, "filename": "/home/web_user/.terminfo/e/ecma+strikeout"}, {"audio": 0, "start": 2508571, "crunched": 0, "end": 2509925, "filename": "/home/web_user/.terminfo/e/emu-220"}, {"audio": 0, "start": 2509925, "crunched": 0, "end": 2510767, "filename": "/home/web_user/.terminfo/e/eterm"}, {"audio": 0, "start": 2510767, "crunched": 0, "end": 2511249, "filename": "/home/web_user/.terminfo/e/esprit"}, {"audio": 0, "start": 2511249, "crunched": 0, "end": 2511668, "filename": "/home/web_user/.terminfo/e/elks-vt52"}, {"audio": 0, "start": 2511668, "crunched": 0, "end": 2512164, "filename": "/home/web_user/.terminfo/e/esprit-am"}, {"audio": 0, "start": 2512164, "crunched": 0, "end": 2513168, "filename": "/home/web_user/.terminfo/e/excel62"}, {"audio": 0, "start": 2513168, "crunched": 0, "end": 2514724, "filename": "/home/web_user/.terminfo/e/emx-base"}, {"audio": 0, "start": 2514724, "crunched": 0, "end": 2515732, "filename": "/home/web_user/.terminfo/e/env230"}, {"audio": 0, "start": 2515732, "crunched": 0, "end": 2517055, "filename": "/home/web_user/.terminfo/e/emu"}, {"audio": 0, "start": 2517055, "crunched": 0, "end": 2517425, "filename": "/home/web_user/.terminfo/e/ep48"}, {"audio": 0, "start": 2517425, "crunched": 0, "end": 2518674, "filename": "/home/web_user/.terminfo/e/eterm-color"}, {"audio": 0, "start": 2518674, "crunched": 0, "end": 2519717, "filename": "/home/web_user/.terminfo/e/excel62-rv"}, {"audio": 0, "start": 2519717, "crunched": 0, "end": 2521002, "filename": "/home/web_user/.terminfo/e/exec80"}, {"audio": 0, "start": 2521002, "crunched": 0, "end": 2522058, "filename": "/home/web_user/.terminfo/e/excel64-w"}, {"audio": 0, "start": 2522058, "crunched": 0, "end": 2522755, "filename": "/home/web_user/.terminfo/e/ecma+italics"}, {"audio": 0, "start": 2522755, "crunched": 0, "end": 2523811, "filename": "/home/web_user/.terminfo/e/excel62-w"}, {"audio": 0, "start": 2523811, "crunched": 0, "end": 2524819, "filename": "/home/web_user/.terminfo/e/envision230"}, {"audio": 0, "start": 2524819, "crunched": 0, "end": 2525373, "filename": "/home/web_user/.terminfo/e/ex155"}, {"audio": 0, "start": 2525373, "crunched": 0, "end": 2526377, "filename": "/home/web_user/.terminfo/e/excel64"}, {"audio": 0, "start": 2526377, "crunched": 0, "end": 2526806, "filename": "/home/web_user/.terminfo/e/elks-ansi"}, {"audio": 0, "start": 2526806, "crunched": 0, "end": 2527393, "filename": "/home/web_user/.terminfo/r/rtpc"}, {"audio": 0, "start": 2527393, "crunched": 0, "end": 2529905, "filename": "/home/web_user/.terminfo/r/rxvt-16color"}, {"audio": 0, "start": 2529905, "crunched": 0, "end": 2530725, "filename": "/home/web_user/.terminfo/r/rt6221-w"}, {"audio": 0, "start": 2530725, "crunched": 0, "end": 2531230, "filename": "/home/web_user/.terminfo/r/regent40+"}, {"audio": 0, "start": 2531230, "crunched": 0, "end": 2533472, "filename": "/home/web_user/.terminfo/r/rxvt-xpm"}, {"audio": 0, "start": 2533472, "crunched": 0, "end": 2535756, "filename": "/home/web_user/.terminfo/r/rxvt-cygwin-native"}, {"audio": 0, "start": 2535756, "crunched": 0, "end": 2538204, "filename": "/home/web_user/.terminfo/r/rxvt-256color"}, {"audio": 0, "start": 2538204, "crunched": 0, "end": 2539388, "filename": "/home/web_user/.terminfo/r/rcons-color"}, {"audio": 0, "start": 2539388, "crunched": 0, "end": 2539888, "filename": "/home/web_user/.terminfo/r/regent40"}, {"audio": 0, "start": 2539888, "crunched": 0, "end": 2542188, "filename": "/home/web_user/.terminfo/r/rxvt"}, {"audio": 0, "start": 2542188, "crunched": 0, "end": 2543160, "filename": "/home/web_user/.terminfo/r/rcons"}, {"audio": 0, "start": 2543160, "crunched": 0, "end": 2543960, "filename": "/home/web_user/.terminfo/r/rebus3180"}, {"audio": 0, "start": 2543960, "crunched": 0, "end": 2546204, "filename": "/home/web_user/.terminfo/r/rxvt-color"}, {"audio": 0, "start": 2546204, "crunched": 0, "end": 2546796, "filename": "/home/web_user/.terminfo/r/rbcomm"}, {"audio": 0, "start": 2546796, "crunched": 0, "end": 2547161, "filename": "/home/web_user/.terminfo/r/regent"}, {"audio": 0, "start": 2547161, "crunched": 0, "end": 2547749, "filename": "/home/web_user/.terminfo/r/rbcomm-nam"}, {"audio": 0, "start": 2547749, "crunched": 0, "end": 2549025, "filename": "/home/web_user/.terminfo/r/rxvt+pcfkeys"}, {"audio": 0, "start": 2549025, "crunched": 0, "end": 2551291, "filename": "/home/web_user/.terminfo/r/rxvt-cygwin"}, {"audio": 0, "start": 2551291, "crunched": 0, "end": 2551781, "filename": "/home/web_user/.terminfo/r/regent100"}, {"audio": 0, "start": 2551781, "crunched": 0, "end": 2552322, "filename": "/home/web_user/.terminfo/r/regent60"}, {"audio": 0, "start": 2552322, "crunched": 0, "end": 2552910, "filename": "/home/web_user/.terminfo/r/rbcomm-w"}, {"audio": 0, "start": 2552910, "crunched": 0, "end": 2553451, "filename": "/home/web_user/.terminfo/r/regent200"}, {"audio": 0, "start": 2553451, "crunched": 0, "end": 2553660, "filename": "/home/web_user/.terminfo/r/rca"}, {"audio": 0, "start": 2553660, "crunched": 0, "end": 2554476, "filename": "/home/web_user/.terminfo/r/rt6221"}, {"audio": 0, "start": 2554476, "crunched": 0, "end": 2556636, "filename": "/home/web_user/.terminfo/r/rxvt-basic"}, {"audio": 0, "start": 2556636, "crunched": 0, "end": 2557030, "filename": "/home/web_user/.terminfo/r/regent20"}, {"audio": 0, "start": 2557030, "crunched": 0, "end": 2557434, "filename": "/home/web_user/.terminfo/r/regent25"}, {"audio": 0, "start": 2557434, "crunched": 0, "end": 2559880, "filename": "/home/web_user/.terminfo/r/rxvt-88color"}, {"audio": 0, "start": 2559880, "crunched": 0, "end": 2561251, "filename": "/home/web_user/.terminfo/d/d462-unix-25"}, {"audio": 0, "start": 2561251, "crunched": 0, "end": 2562221, "filename": "/home/web_user/.terminfo/d/darwin-128x40-m"}, {"audio": 0, "start": 2562221, "crunched": 0, "end": 2563027, "filename": "/home/web_user/.terminfo/d/dgkeys+15"}, {"audio": 0, "start": 2563027, "crunched": 0, "end": 2564368, "filename": "/home/web_user/.terminfo/d/d414-unix-25"}, {"audio": 0, "start": 2564368, "crunched": 0, "end": 2565600, "filename": "/home/web_user/.terminfo/d/dg+color8"}, {"audio": 0, "start": 2565600, "crunched": 0, "end": 2567157, "filename": "/home/web_user/.terminfo/d/d470c-dg"}, {"audio": 0, "start": 2567157, "crunched": 0, "end": 2567511, "filename": "/home/web_user/.terminfo/d/digilog"}, {"audio": 0, "start": 2567511, "crunched": 0, "end": 2569052, "filename": "/home/web_user/.terminfo/d/d411-w"}, {"audio": 0, "start": 2569052, "crunched": 0, "end": 2570609, "filename": "/home/web_user/.terminfo/d/d470-dg"}, {"audio": 0, "start": 2570609, "crunched": 0, "end": 2571189, "filename": "/home/web_user/.terminfo/d/dt80-sas"}, {"audio": 0, "start": 2571189, "crunched": 0, "end": 2572183, "filename": "/home/web_user/.terminfo/d/darwin-m-b"}, {"audio": 0, "start": 2572183, "crunched": 0, "end": 2573378, "filename": "/home/web_user/.terminfo/d/darwin-80x25"}, {"audio": 0, "start": 2573378, "crunched": 0, "end": 2574733, "filename": "/home/web_user/.terminfo/d/d463-unix-w"}, {"audio": 0, "start": 2574733, "crunched": 0, "end": 2575903, "filename": "/home/web_user/.terminfo/d/d216+25"}, {"audio": 0, "start": 2575903, "crunched": 0, "end": 2577078, "filename": "/home/web_user/.terminfo/d/d461-dg"}, {"audio": 0, "start": 2577078, "crunched": 0, "end": 2578123, "filename": "/home/web_user/.terminfo/d/dg+fixed"}, {"audio": 0, "start": 2578123, "crunched": 0, "end": 2579872, "filename": "/home/web_user/.terminfo/d/d430c-unix-25-ccc"}, {"audio": 0, "start": 2579872, "crunched": 0, "end": 2580414, "filename": "/home/web_user/.terminfo/d/dwk-vt"}, {"audio": 0, "start": 2580414, "crunched": 0, "end": 2581761, "filename": "/home/web_user/.terminfo/d/d462-unix"}, {"audio": 0, "start": 2581761, "crunched": 0, "end": 2583564, "filename": "/home/web_user/.terminfo/d/d430-unix-sr-ccc"}, {"audio": 0, "start": 2583564, "crunched": 0, "end": 2583981, "filename": "/home/web_user/.terminfo/d/diablo1640-m8"}, {"audio": 0, "start": 2583981, "crunched": 0, "end": 2585420, "filename": "/home/web_user/.terminfo/d/dku7103-sna"}, {"audio": 0, "start": 2585420, "crunched": 0, "end": 2587640, "filename": "/home/web_user/.terminfo/d/d470"}, {"audio": 0, "start": 2587640, "crunched": 0, "end": 2588588, "filename": "/home/web_user/.terminfo/d/darwin-m"}, {"audio": 0, "start": 2588588, "crunched": 0, "end": 2589256, "filename": "/home/web_user/.terminfo/d/dt-100w"}, {"audio": 0, "start": 2589256, "crunched": 0, "end": 2590659, "filename": "/home/web_user/.terminfo/d/d464-unix-s"}, {"audio": 0, "start": 2590659, "crunched": 0, "end": 2591327, "filename": "/home/web_user/.terminfo/d/dt100w"}, {"audio": 0, "start": 2591327, "crunched": 0, "end": 2592497, "filename": "/home/web_user/.terminfo/d/d216+"}, {"audio": 0, "start": 2592497, "crunched": 0, "end": 2594030, "filename": "/home/web_user/.terminfo/d/d578-7b"}, {"audio": 0, "start": 2594030, "crunched": 0, "end": 2595453, "filename": "/home/web_user/.terminfo/d/d462-unix-s"}, {"audio": 0, "start": 2595453, "crunched": 0, "end": 2596269, "filename": "/home/web_user/.terminfo/d/dg6053"}, {"audio": 0, "start": 2596269, "crunched": 0, "end": 2597239, "filename": "/home/web_user/.terminfo/d/darwin-144x48-m"}, {"audio": 0, "start": 2597239, "crunched": 0, "end": 2597641, "filename": "/home/web_user/.terminfo/d/dku7003-dumb"}, {"audio": 0, "start": 2597641, "crunched": 0, "end": 2598672, "filename": "/home/web_user/.terminfo/d/d216+dg"}, {"audio": 0, "start": 2598672, "crunched": 0, "end": 2599725, "filename": "/home/web_user/.terminfo/d/dgunix+fixed"}, {"audio": 0, "start": 2599725, "crunched": 0, "end": 2601092, "filename": "/home/web_user/.terminfo/d/d462+w"}, {"audio": 0, "start": 2601092, "crunched": 0, "end": 2601521, "filename": "/home/web_user/.terminfo/d/diablo"}, {"audio": 0, "start": 2601521, "crunched": 0, "end": 2602002, "filename": "/home/web_user/.terminfo/d/dialogue80"}, {"audio": 0, "start": 2602002, "crunched": 0, "end": 2602818, "filename": "/home/web_user/.terminfo/d/d2"}, {"audio": 0, "start": 2602818, "crunched": 0, "end": 2603172, "filename": "/home/web_user/.terminfo/d/dw"}, {"audio": 0, "start": 2603172, "crunched": 0, "end": 2604371, "filename": "/home/web_user/.terminfo/d/darwin-144x48"}, {"audio": 0, "start": 2604371, "crunched": 0, "end": 2605187, "filename": "/home/web_user/.terminfo/d/d2-dg"}, {"audio": 0, "start": 2605187, "crunched": 0, "end": 2605668, "filename": "/home/web_user/.terminfo/d/d80"}, {"audio": 0, "start": 2605668, "crunched": 0, "end": 2607232, "filename": "/home/web_user/.terminfo/d/d555-7b-w"}, {"audio": 0, "start": 2607232, "crunched": 0, "end": 2608407, "filename": "/home/web_user/.terminfo/d/d411-dg"}, {"audio": 0, "start": 2608407, "crunched": 0, "end": 2608832, "filename": "/home/web_user/.terminfo/d/diablo-lm"}, {"audio": 0, "start": 2608832, "crunched": 0, "end": 2610049, "filename": "/home/web_user/.terminfo/d/darwin-f2"}, {"audio": 0, "start": 2610049, "crunched": 0, "end": 2610865, "filename": "/home/web_user/.terminfo/d/dg605x"}, {"audio": 0, "start": 2610865, "crunched": 0, "end": 2611763, "filename": "/home/web_user/.terminfo/d/dumb-emacs-ansi"}, {"audio": 0, "start": 2611763, "crunched": 0, "end": 2613286, "filename": "/home/web_user/.terminfo/d/decansi"}, {"audio": 0, "start": 2613286, "crunched": 0, "end": 2614768, "filename": "/home/web_user/.terminfo/d/d230c-dg"}, {"audio": 0, "start": 2614768, "crunched": 0, "end": 2616571, "filename": "/home/web_user/.terminfo/d/d430c-unix-sr-ccc"}, {"audio": 0, "start": 2616571, "crunched": 0, "end": 2617541, "filename": "/home/web_user/.terminfo/d/darwin-256x96-m"}, {"audio": 0, "start": 2617541, "crunched": 0, "end": 2618668, "filename": "/home/web_user/.terminfo/d/dec-vt400"}, {"audio": 0, "start": 2618668, "crunched": 0, "end": 2619144, "filename": "/home/web_user/.terminfo/d/dm3025"}, {"audio": 0, "start": 2619144, "crunched": 0, "end": 2619442, "filename": "/home/web_user/.terminfo/d/dec+pp"}, {"audio": 0, "start": 2619442, "crunched": 0, "end": 2619871, "filename": "/home/web_user/.terminfo/d/diablo1740"}, {"audio": 0, "start": 2619871, "crunched": 0, "end": 2621692, "filename": "/home/web_user/.terminfo/d/d430c-dg-ccc"}, {"audio": 0, "start": 2621692, "crunched": 0, "end": 2622682, "filename": "/home/web_user/.terminfo/d/d210-dg"}, {"audio": 0, "start": 2622682, "crunched": 0, "end": 2624257, "filename": "/home/web_user/.terminfo/d/d410-7b"}, {"audio": 0, "start": 2624257, "crunched": 0, "end": 2625500, "filename": "/home/web_user/.terminfo/d/dg460-ansi"}, {"audio": 0, "start": 2625500, "crunched": 0, "end": 2627248, "filename": "/home/web_user/.terminfo/d/d430c-unix-w"}, {"audio": 0, "start": 2627248, "crunched": 0, "end": 2628998, "filename": "/home/web_user/.terminfo/d/d430c-unix-25"}, {"audio": 0, "start": 2628998, "crunched": 0, "end": 2630747, "filename": "/home/web_user/.terminfo/d/d430-unix-w-ccc"}, {"audio": 0, "start": 2630747, "crunched": 0, "end": 2631321, "filename": "/home/web_user/.terminfo/d/d800"}, {"audio": 0, "start": 2631321, "crunched": 0, "end": 2632927, "filename": "/home/web_user/.terminfo/d/d461-7b-w"}, {"audio": 0, "start": 2632927, "crunched": 0, "end": 2634028, "filename": "/home/web_user/.terminfo/d/dgkeys+7b"}, {"audio": 0, "start": 2634028, "crunched": 0, "end": 2635002, "filename": "/home/web_user/.terminfo/d/dm80"}, {"audio": 0, "start": 2635002, "crunched": 0, "end": 2635549, "filename": "/home/web_user/.terminfo/d/dmd1"}, {"audio": 0, "start": 2635549, "crunched": 0, "end": 2637101, "filename": "/home/web_user/.terminfo/d/d430-dg"}, {"audio": 0, "start": 2637101, "crunched": 0, "end": 2638117, "filename": "/home/web_user/.terminfo/d/darwin-m-f2"}, {"audio": 0, "start": 2638117, "crunched": 0, "end": 2640414, "filename": "/home/web_user/.terminfo/d/d470c-7b"}, {"audio": 0, "start": 2640414, "crunched": 0, "end": 2640819, "filename": "/home/web_user/.terminfo/d/d132"}, {"audio": 0, "start": 2640819, "crunched": 0, "end": 2641789, "filename": "/home/web_user/.terminfo/d/darwin-112x37-m"}, {"audio": 0, "start": 2641789, "crunched": 0, "end": 2643538, "filename": "/home/web_user/.terminfo/d/d430-unix-25-ccc"}, {"audio": 0, "start": 2643538, "crunched": 0, "end": 2644713, "filename": "/home/web_user/.terminfo/d/d460-dg"}, {"audio": 0, "start": 2644713, "crunched": 0, "end": 2646091, "filename": "/home/web_user/.terminfo/d/djgpp"}, {"audio": 0, "start": 2646091, "crunched": 0, "end": 2646520, "filename": "/home/web_user/.terminfo/d/diablo1640"}, {"audio": 0, "start": 2646520, "crunched": 0, "end": 2647674, "filename": "/home/web_user/.terminfo/d/d450"}, {"audio": 0, "start": 2647674, "crunched": 0, "end": 2649069, "filename": "/home/web_user/.terminfo/d/d414-unix-sr"}, {"audio": 0, "start": 2649069, "crunched": 0, "end": 2650440, "filename": "/home/web_user/.terminfo/d/d412-unix-25"}, {"audio": 0, "start": 2650440, "crunched": 0, "end": 2651639, "filename": "/home/web_user/.terminfo/d/darwin-128x48"}, {"audio": 0, "start": 2651639, "crunched": 0, "end": 2653121, "filename": "/home/web_user/.terminfo/d/d230-dg"}, {"audio": 0, "start": 2653121, "crunched": 0, "end": 2654320, "filename": "/home/web_user/.terminfo/d/darwin-160x64"}, {"audio": 0, "start": 2654320, "crunched": 0, "end": 2655479, "filename": "/home/web_user/.terminfo/d/d578-dg"}, {"audio": 0, "start": 2655479, "crunched": 0, "end": 2656674, "filename": "/home/web_user/.terminfo/d/darwin-80x30"}, {"audio": 0, "start": 2656674, "crunched": 0, "end": 2657644, "filename": "/home/web_user/.terminfo/d/darwin-200x75-m"}, {"audio": 0, "start": 2657644, "crunched": 0, "end": 2659454, "filename": "/home/web_user/.terminfo/d/d430-unix-s"}, {"audio": 0, "start": 2659454, "crunched": 0, "end": 2660738, "filename": "/home/web_user/.terminfo/d/dg+ccc"}, {"audio": 0, "start": 2660738, "crunched": 0, "end": 2662245, "filename": "/home/web_user/.terminfo/d/d577-w"}, {"audio": 0, "start": 2662245, "crunched": 0, "end": 2663786, "filename": "/home/web_user/.terminfo/d/d410-w"}, {"audio": 0, "start": 2663786, "crunched": 0, "end": 2665361, "filename": "/home/web_user/.terminfo/d/d460-7b"}, {"audio": 0, "start": 2665361, "crunched": 0, "end": 2666716, "filename": "/home/web_user/.terminfo/d/d413-unix-25"}, {"audio": 0, "start": 2666716, "crunched": 0, "end": 2668125, "filename": "/home/web_user/.terminfo/d/d463-unix-s"}, {"audio": 0, "start": 2668125, "crunched": 0, "end": 2669574, "filename": "/home/web_user/.terminfo/d/dku7102-old"}, {"audio": 0, "start": 2669574, "crunched": 0, "end": 2670605, "filename": "/home/web_user/.terminfo/d/d216e-dg"}, {"audio": 0, "start": 2670605, "crunched": 0, "end": 2671629, "filename": "/home/web_user/.terminfo/d/dt80w"}, {"audio": 0, "start": 2671629, "crunched": 0, "end": 2672096, "filename": "/home/web_user/.terminfo/d/datamedia2500"}, {"audio": 0, "start": 2672096, "crunched": 0, "end": 2672469, "filename": "/home/web_user/.terminfo/d/dw4"}, {"audio": 0, "start": 2672469, "crunched": 0, "end": 2673816, "filename": "/home/web_user/.terminfo/d/d412-unix"}, {"audio": 0, "start": 2673816, "crunched": 0, "end": 2675002, "filename": "/home/web_user/.terminfo/d/dec-vt100"}, {"audio": 0, "start": 2675002, "crunched": 0, "end": 2676411, "filename": "/home/web_user/.terminfo/d/d413-unix-s"}, {"audio": 0, "start": 2676411, "crunched": 0, "end": 2677610, "filename": "/home/web_user/.terminfo/d/darwin-128x40"}, {"audio": 0, "start": 2677610, "crunched": 0, "end": 2678982, "filename": "/home/web_user/.terminfo/d/d211-7b"}, {"audio": 0, "start": 2678982, "crunched": 0, "end": 2679290, "filename": "/home/web_user/.terminfo/d/dumb"}, {"audio": 0, "start": 2679290, "crunched": 0, "end": 2680573, "filename": "/home/web_user/.terminfo/d/d215"}, {"audio": 0, "start": 2680573, "crunched": 0, "end": 2681543, "filename": "/home/web_user/.terminfo/d/darwin-160x64-m"}, {"audio": 0, "start": 2681543, "crunched": 0, "end": 2682740, "filename": "/home/web_user/.terminfo/d/darwin-b"}, {"audio": 0, "start": 2682740, "crunched": 0, "end": 2685037, "filename": "/home/web_user/.terminfo/d/d470-7b"}, {"audio": 0, "start": 2685037, "crunched": 0, "end": 2685525, "filename": "/home/web_user/.terminfo/d/dmterm"}, {"audio": 0, "start": 2685525, "crunched": 0, "end": 2686724, "filename": "/home/web_user/.terminfo/d/darwin-200x64"}, {"audio": 0, "start": 2686724, "crunched": 0, "end": 2687138, "filename": "/home/web_user/.terminfo/d/dm1520"}, {"audio": 0, "start": 2687138, "crunched": 0, "end": 2687552, "filename": "/home/web_user/.terminfo/d/dm1521"}, {"audio": 0, "start": 2687552, "crunched": 0, "end": 2688975, "filename": "/home/web_user/.terminfo/d/d412+s"}, {"audio": 0, "start": 2688975, "crunched": 0, "end": 2690310, "filename": "/home/web_user/.terminfo/d/d463-unix"}, {"audio": 0, "start": 2690310, "crunched": 0, "end": 2691280, "filename": "/home/web_user/.terminfo/d/darwin-128x48-m"}, {"audio": 0, "start": 2691280, "crunched": 0, "end": 2692479, "filename": "/home/web_user/.terminfo/d/d462-dg"}, {"audio": 0, "start": 2692479, "crunched": 0, "end": 2693846, "filename": "/home/web_user/.terminfo/d/d412-unix-w"}, {"audio": 0, "start": 2693846, "crunched": 0, "end": 2694217, "filename": "/home/web_user/.terminfo/d/dp3360"}, {"audio": 0, "start": 2694217, "crunched": 0, "end": 2695658, "filename": "/home/web_user/.terminfo/d/dku7102-sna"}, {"audio": 0, "start": 2695658, "crunched": 0, "end": 2696626, "filename": "/home/web_user/.terminfo/d/darwin-90x30-m"}, {"audio": 0, "start": 2696626, "crunched": 0, "end": 2697967, "filename": "/home/web_user/.terminfo/d/d464-unix-w"}, {"audio": 0, "start": 2697967, "crunched": 0, "end": 2699469, "filename": "/home/web_user/.terminfo/d/d460"}, {"audio": 0, "start": 2699469, "crunched": 0, "end": 2700841, "filename": "/home/web_user/.terminfo/d/d215-7b"}, {"audio": 0, "start": 2700841, "crunched": 0, "end": 2701809, "filename": "/home/web_user/.terminfo/d/darwin-80x30-m"}, {"audio": 0, "start": 2701809, "crunched": 0, "end": 2702163, "filename": "/home/web_user/.terminfo/d/dtc300s"}, {"audio": 0, "start": 2702163, "crunched": 0, "end": 2703580, "filename": "/home/web_user/.terminfo/d/d412-unix-sr"}, {"audio": 0, "start": 2703580, "crunched": 0, "end": 2705186, "filename": "/home/web_user/.terminfo/d/d411-7b-w"}, {"audio": 0, "start": 2705186, "crunched": 0, "end": 2706385, "filename": "/home/web_user/.terminfo/d/d462+dg"}, {"audio": 0, "start": 2706385, "crunched": 0, "end": 2707017, "filename": "/home/web_user/.terminfo/d/dmd-34"}, {"audio": 0, "start": 2707017, "crunched": 0, "end": 2708581, "filename": "/home/web_user/.terminfo/d/d577-7b-w"}, {"audio": 0, "start": 2708581, "crunched": 0, "end": 2709780, "filename": "/home/web_user/.terminfo/d/d463-dg"}, {"audio": 0, "start": 2709780, "crunched": 0, "end": 2710490, "filename": "/home/web_user/.terminfo/d/dt110"}, {"audio": 0, "start": 2710490, "crunched": 0, "end": 2711861, "filename": "/home/web_user/.terminfo/d/d462+25"}, {"audio": 0, "start": 2711861, "crunched": 0, "end": 2713082, "filename": "/home/web_user/.terminfo/d/djgpp204"}, {"audio": 0, "start": 2713082, "crunched": 0, "end": 2714429, "filename": "/home/web_user/.terminfo/d/d462+"}, {"audio": 0, "start": 2714429, "crunched": 0, "end": 2715397, "filename": "/home/web_user/.terminfo/d/darwin-80x25-m"}, {"audio": 0, "start": 2715397, "crunched": 0, "end": 2717633, "filename": "/home/web_user/.terminfo/d/dvtm-256color"}, {"audio": 0, "start": 2717633, "crunched": 0, "end": 2718966, "filename": "/home/web_user/.terminfo/d/d214"}, {"audio": 0, "start": 2718966, "crunched": 0, "end": 2721112, "filename": "/home/web_user/.terminfo/d/d230c"}, {"audio": 0, "start": 2721112, "crunched": 0, "end": 2722598, "filename": "/home/web_user/.terminfo/d/d220-dg"}, {"audio": 0, "start": 2722598, "crunched": 0, "end": 2723398, "filename": "/home/web_user/.terminfo/d/ddr"}, {"audio": 0, "start": 2723398, "crunched": 0, "end": 2723809, "filename": "/home/web_user/.terminfo/d/diablo1740-lm"}, {"audio": 0, "start": 2723809, "crunched": 0, "end": 2724243, "filename": "/home/web_user/.terminfo/d/dg6134"}, {"audio": 0, "start": 2724243, "crunched": 0, "end": 2725397, "filename": "/home/web_user/.terminfo/d/d400-dg"}, {"audio": 0, "start": 2725397, "crunched": 0, "end": 2726596, "filename": "/home/web_user/.terminfo/d/d413-dg"}, {"audio": 0, "start": 2726596, "crunched": 0, "end": 2727741, "filename": "/home/web_user/.terminfo/d/d555-dg"}, {"audio": 0, "start": 2727741, "crunched": 0, "end": 2728104, "filename": "/home/web_user/.terminfo/d/dec+sl"}, {"audio": 0, "start": 2728104, "crunched": 0, "end": 2729135, "filename": "/home/web_user/.terminfo/d/d216e+dg"}, {"audio": 0, "start": 2729135, "crunched": 0, "end": 2730552, "filename": "/home/web_user/.terminfo/d/d462-unix-sr"}, {"audio": 0, "start": 2730552, "crunched": 0, "end": 2730943, "filename": "/home/web_user/.terminfo/d/diablo450"}, {"audio": 0, "start": 2730943, "crunched": 0, "end": 2732105, "filename": "/home/web_user/.terminfo/d/d217-unix-25"}, {"audio": 0, "start": 2732105, "crunched": 0, "end": 2733472, "filename": "/home/web_user/.terminfo/d/d412+w"}, {"audio": 0, "start": 2733472, "crunched": 0, "end": 2735276, "filename": "/home/web_user/.terminfo/d/d430c-unix-sr"}, {"audio": 0, "start": 2735276, "crunched": 0, "end": 2736597, "filename": "/home/web_user/.terminfo/d/d464-unix"}, {"audio": 0, "start": 2736597, "crunched": 0, "end": 2737992, "filename": "/home/web_user/.terminfo/d/d464-unix-sr"}, {"audio": 0, "start": 2737992, "crunched": 0, "end": 2738422, "filename": "/home/web_user/.terminfo/d/dd5000"}, {"audio": 0, "start": 2738422, "crunched": 0, "end": 2739839, "filename": "/home/web_user/.terminfo/d/d412+sr"}, {"audio": 0, "start": 2739839, "crunched": 0, "end": 2740863, "filename": "/home/web_user/.terminfo/d/dmdt80w"}, {"audio": 0, "start": 2740863, "crunched": 0, "end": 2741980, "filename": "/home/web_user/.terminfo/d/dec-vt330"}, {"audio": 0, "start": 2741980, "crunched": 0, "end": 2743709, "filename": "/home/web_user/.terminfo/d/d430c-unix-ccc"}, {"audio": 0, "start": 2743709, "crunched": 0, "end": 2744126, "filename": "/home/web_user/.terminfo/d/diablo1620-m8"}, {"audio": 0, "start": 2744126, "crunched": 0, "end": 2744758, "filename": "/home/web_user/.terminfo/d/dmd-24"}, {"audio": 0, "start": 2744758, "crunched": 0, "end": 2745750, "filename": "/home/web_user/.terminfo/d/dg6053-old"}, {"audio": 0, "start": 2745750, "crunched": 0, "end": 2746758, "filename": "/home/web_user/.terminfo/d/darwin-m-f"}, {"audio": 0, "start": 2746758, "crunched": 0, "end": 2747715, "filename": "/home/web_user/.terminfo/d/dg210"}, {"audio": 0, "start": 2747715, "crunched": 0, "end": 2749118, "filename": "/home/web_user/.terminfo/d/d413-unix-sr"}, {"audio": 0, "start": 2749118, "crunched": 0, "end": 2749660, "filename": "/home/web_user/.terminfo/d/dwk"}, {"audio": 0, "start": 2749660, "crunched": 0, "end": 2750147, "filename": "/home/web_user/.terminfo/d/dm3045"}, {"audio": 0, "start": 2750147, "crunched": 0, "end": 2751699, "filename": "/home/web_user/.terminfo/d/d430c-dg"}, {"audio": 0, "start": 2751699, "crunched": 0, "end": 2753845, "filename": "/home/web_user/.terminfo/d/d230"}, {"audio": 0, "start": 2753845, "crunched": 0, "end": 2755463, "filename": "/home/web_user/.terminfo/d/dtterm"}, {"audio": 0, "start": 2755463, "crunched": 0, "end": 2756662, "filename": "/home/web_user/.terminfo/d/d462e-dg"}, {"audio": 0, "start": 2756662, "crunched": 0, "end": 2758471, "filename": "/home/web_user/.terminfo/d/d430-unix-s-ccc"}, {"audio": 0, "start": 2758471, "crunched": 0, "end": 2758938, "filename": "/home/web_user/.terminfo/d/dm2500"}, {"audio": 0, "start": 2758938, "crunched": 0, "end": 2760667, "filename": "/home/web_user/.terminfo/d/d430-unix-ccc"}, {"audio": 0, "start": 2760667, "crunched": 0, "end": 2762887, "filename": "/home/web_user/.terminfo/d/d470c"}, {"audio": 0, "start": 2762887, "crunched": 0, "end": 2764617, "filename": "/home/web_user/.terminfo/d/d430-unix"}, {"audio": 0, "start": 2764617, "crunched": 0, "end": 2765988, "filename": "/home/web_user/.terminfo/d/d412+25"}, {"audio": 0, "start": 2765988, "crunched": 0, "end": 2766512, "filename": "/home/web_user/.terminfo/d/dataspeed40"}, {"audio": 0, "start": 2766512, "crunched": 0, "end": 2767682, "filename": "/home/web_user/.terminfo/d/d216-unix-25"}, {"audio": 0, "start": 2767682, "crunched": 0, "end": 2768881, "filename": "/home/web_user/.terminfo/d/darwin-200x75"}, {"audio": 0, "start": 2768881, "crunched": 0, "end": 2770298, "filename": "/home/web_user/.terminfo/d/d462+sr"}, {"audio": 0, "start": 2770298, "crunched": 0, "end": 2772048, "filename": "/home/web_user/.terminfo/d/d430-unix-25"}, {"audio": 0, "start": 2772048, "crunched": 0, "end": 2772477, "filename": "/home/web_user/.terminfo/d/diablo630"}, {"audio": 0, "start": 2772477, "crunched": 0, "end": 2774016, "filename": "/home/web_user/.terminfo/d/d577-7b"}, {"audio": 0, "start": 2774016, "crunched": 0, "end": 2775363, "filename": "/home/web_user/.terminfo/d/d412+"}, {"audio": 0, "start": 2775363, "crunched": 0, "end": 2776759, "filename": "/home/web_user/.terminfo/d/dg+color"}, {"audio": 0, "start": 2776759, "crunched": 0, "end": 2778563, "filename": "/home/web_user/.terminfo/d/d430-unix-sr"}, {"audio": 0, "start": 2778563, "crunched": 0, "end": 2779966, "filename": "/home/web_user/.terminfo/d/d463-unix-sr"}, {"audio": 0, "start": 2779966, "crunched": 0, "end": 2780956, "filename": "/home/web_user/.terminfo/d/d214-dg"}, {"audio": 0, "start": 2780956, "crunched": 0, "end": 2782100, "filename": "/home/web_user/.terminfo/d/d217-unix"}, {"audio": 0, "start": 2782100, "crunched": 0, "end": 2783433, "filename": "/home/web_user/.terminfo/d/d210"}, {"audio": 0, "start": 2783433, "crunched": 0, "end": 2783867, "filename": "/home/web_user/.terminfo/d/dg450"}, {"audio": 0, "start": 2783867, "crunched": 0, "end": 2784841, "filename": "/home/web_user/.terminfo/d/dt80"}, {"audio": 0, "start": 2784841, "crunched": 0, "end": 2785872, "filename": "/home/web_user/.terminfo/d/d217-dg"}, {"audio": 0, "start": 2785872, "crunched": 0, "end": 2787239, "filename": "/home/web_user/.terminfo/d/d462-unix-w"}, {"audio": 0, "start": 2787239, "crunched": 0, "end": 2788263, "filename": "/home/web_user/.terminfo/d/dm80w"}, {"audio": 0, "start": 2788263, "crunched": 0, "end": 2789417, "filename": "/home/web_user/.terminfo/d/d450-dg"}, {"audio": 0, "start": 2789417, "crunched": 0, "end": 2790887, "filename": "/home/web_user/.terminfo/d/d578"}, {"audio": 0, "start": 2790887, "crunched": 0, "end": 2791241, "filename": "/home/web_user/.terminfo/d/dw2"}, {"audio": 0, "start": 2791241, "crunched": 0, "end": 2792211, "filename": "/home/web_user/.terminfo/d/darwin-100x37-m"}, {"audio": 0, "start": 2792211, "crunched": 0, "end": 2793546, "filename": "/home/web_user/.terminfo/d/d413-unix"}, {"audio": 0, "start": 2793546, "crunched": 0, "end": 2793971, "filename": "/home/web_user/.terminfo/d/diablo1640-lm"}, {"audio": 0, "start": 2793971, "crunched": 0, "end": 2795437, "filename": "/home/web_user/.terminfo/d/dku7102"}, {"audio": 0, "start": 2795437, "crunched": 0, "end": 2796939, "filename": "/home/web_user/.terminfo/d/d411"}, {"audio": 0, "start": 2796939, "crunched": 0, "end": 2797482, "filename": "/home/web_user/.terminfo/d/decpro"}, {"audio": 0, "start": 2797482, "crunched": 0, "end": 2798803, "filename": "/home/web_user/.terminfo/d/d414-unix"}, {"audio": 0, "start": 2798803, "crunched": 0, "end": 2799327, "filename": "/home/web_user/.terminfo/d/ds40-2"}, {"audio": 0, "start": 2799327, "crunched": 0, "end": 2800481, "filename": "/home/web_user/.terminfo/d/d400"}, {"audio": 0, "start": 2800481, "crunched": 0, "end": 2801214, "filename": "/home/web_user/.terminfo/d/dgkeys+11"}, {"audio": 0, "start": 2801214, "crunched": 0, "end": 2802690, "filename": "/home/web_user/.terminfo/d/d555"}, {"audio": 0, "start": 2802690, "crunched": 0, "end": 2804796, "filename": "/home/web_user/.terminfo/d/dvtm"}, {"audio": 0, "start": 2804796, "crunched": 0, "end": 2805849, "filename": "/home/web_user/.terminfo/d/dgmode+color"}, {"audio": 0, "start": 2805849, "crunched": 0, "end": 2807830, "filename": "/home/web_user/.terminfo/d/d220"}, {"audio": 0, "start": 2807830, "crunched": 0, "end": 2809029, "filename": "/home/web_user/.terminfo/d/darwin-256x96"}, {"audio": 0, "start": 2809029, "crunched": 0, "end": 2809400, "filename": "/home/web_user/.terminfo/d/datapoint"}, {"audio": 0, "start": 2809400, "crunched": 0, "end": 2810755, "filename": "/home/web_user/.terminfo/d/d463-unix-25"}, {"audio": 0, "start": 2810755, "crunched": 0, "end": 2811784, "filename": "/home/web_user/.terminfo/d/dgkeys+8b"}, {"audio": 0, "start": 2811784, "crunched": 0, "end": 2812789, "filename": "/home/web_user/.terminfo/d/d215-dg"}, {"audio": 0, "start": 2812789, "crunched": 0, "end": 2813988, "filename": "/home/web_user/.terminfo/d/darwin-112x37"}, {"audio": 0, "start": 2813988, "crunched": 0, "end": 2815736, "filename": "/home/web_user/.terminfo/d/d430-unix-w"}, {"audio": 0, "start": 2815736, "crunched": 0, "end": 2816945, "filename": "/home/web_user/.terminfo/d/darwin-f"}, {"audio": 0, "start": 2816945, "crunched": 0, "end": 2817492, "filename": "/home/web_user/.terminfo/d/dp8242"}, {"audio": 0, "start": 2817492, "crunched": 0, "end": 2818651, "filename": "/home/web_user/.terminfo/d/d577-dg"}, {"audio": 0, "start": 2818651, "crunched": 0, "end": 2819656, "filename": "/home/web_user/.terminfo/d/d211-dg"}, {"audio": 0, "start": 2819656, "crunched": 0, "end": 2821011, "filename": "/home/web_user/.terminfo/d/d413-unix-w"}, {"audio": 0, "start": 2821011, "crunched": 0, "end": 2822003, "filename": "/home/web_user/.terminfo/d/dg100"}, {"audio": 0, "start": 2822003, "crunched": 0, "end": 2823178, "filename": "/home/web_user/.terminfo/d/d410-dg"}, {"audio": 0, "start": 2823178, "crunched": 0, "end": 2824601, "filename": "/home/web_user/.terminfo/d/d462+s"}, {"audio": 0, "start": 2824601, "crunched": 0, "end": 2825796, "filename": "/home/web_user/.terminfo/d/darwin-90x30"}, {"audio": 0, "start": 2825796, "crunched": 0, "end": 2827337, "filename": "/home/web_user/.terminfo/d/d460-w"}, {"audio": 0, "start": 2827337, "crunched": 0, "end": 2829146, "filename": "/home/web_user/.terminfo/d/d430c-unix-s-ccc"}, {"audio": 0, "start": 2829146, "crunched": 0, "end": 2830103, "filename": "/home/web_user/.terminfo/d/dg-ansi"}, {"audio": 0, "start": 2830103, "crunched": 0, "end": 2831833, "filename": "/home/web_user/.terminfo/d/d430c-unix"}, {"audio": 0, "start": 2831833, "crunched": 0, "end": 2833010, "filename": "/home/web_user/.terminfo/d/darwin"}, {"audio": 0, "start": 2833010, "crunched": 0, "end": 2833364, "filename": "/home/web_user/.terminfo/d/decwriter"}, {"audio": 0, "start": 2833364, "crunched": 0, "end": 2833834, "filename": "/home/web_user/.terminfo/d/dku7003"}, {"audio": 0, "start": 2833834, "crunched": 0, "end": 2834358, "filename": "/home/web_user/.terminfo/d/ds40"}, {"audio": 0, "start": 2834358, "crunched": 0, "end": 2835761, "filename": "/home/web_user/.terminfo/d/d414-unix-s"}, {"audio": 0, "start": 2835761, "crunched": 0, "end": 2837336, "filename": "/home/web_user/.terminfo/d/d411-7b"}, {"audio": 0, "start": 2837336, "crunched": 0, "end": 2838942, "filename": "/home/web_user/.terminfo/d/d410-7b-w"}, {"audio": 0, "start": 2838942, "crunched": 0, "end": 2839338, "filename": "/home/web_user/.terminfo/d/dtc382"}, {"audio": 0, "start": 2839338, "crunched": 0, "end": 2841148, "filename": "/home/web_user/.terminfo/d/d430c-unix-s"}, {"audio": 0, "start": 2841148, "crunched": 0, "end": 2841578, "filename": "/home/web_user/.terminfo/d/delta"}, {"audio": 0, "start": 2841578, "crunched": 0, "end": 2843327, "filename": "/home/web_user/.terminfo/d/d430c-unix-w-ccc"}, {"audio": 0, "start": 2843327, "crunched": 0, "end": 2844829, "filename": "/home/web_user/.terminfo/d/d461"}, {"audio": 0, "start": 2844829, "crunched": 0, "end": 2846331, "filename": "/home/web_user/.terminfo/d/d410"}, {"audio": 0, "start": 2846331, "crunched": 0, "end": 2847530, "filename": "/home/web_user/.terminfo/d/darwin-100x37"}, {"audio": 0, "start": 2847530, "crunched": 0, "end": 2847868, "filename": "/home/web_user/.terminfo/d/dw1"}, {"audio": 0, "start": 2847868, "crunched": 0, "end": 2848341, "filename": "/home/web_user/.terminfo/d/dw3"}, {"audio": 0, "start": 2848341, "crunched": 0, "end": 2848995, "filename": "/home/web_user/.terminfo/d/dt-100"}, {"audio": 0, "start": 2848995, "crunched": 0, "end": 2849386, "filename": "/home/web_user/.terminfo/d/diablo1720"}, {"audio": 0, "start": 2849386, "crunched": 0, "end": 2850727, "filename": "/home/web_user/.terminfo/d/d414-unix-w"}, {"audio": 0, "start": 2850727, "crunched": 0, "end": 2852302, "filename": "/home/web_user/.terminfo/d/d461-7b"}, {"audio": 0, "start": 2852302, "crunched": 0, "end": 2853262, "filename": "/home/web_user/.terminfo/d/d200"}, {"audio": 0, "start": 2853262, "crunched": 0, "end": 2854293, "filename": "/home/web_user/.terminfo/d/d216-dg"}, {"audio": 0, "start": 2854293, "crunched": 0, "end": 2855085, "filename": "/home/web_user/.terminfo/d/dg-generic"}, {"audio": 0, "start": 2855085, "crunched": 0, "end": 2856059, "filename": "/home/web_user/.terminfo/d/dmdt80"}, {"audio": 0, "start": 2856059, "crunched": 0, "end": 2856685, "filename": "/home/web_user/.terminfo/d/dmd"}, {"audio": 0, "start": 2856685, "crunched": 0, "end": 2857114, "filename": "/home/web_user/.terminfo/d/diablo1730"}, {"audio": 0, "start": 2857114, "crunched": 0, "end": 2857585, "filename": "/home/web_user/.terminfo/d/dmchat"}, {"audio": 0, "start": 2857585, "crunched": 0, "end": 2859085, "filename": "/home/web_user/.terminfo/d/dku7202"}, {"audio": 0, "start": 2859085, "crunched": 0, "end": 2860592, "filename": "/home/web_user/.terminfo/d/d555-w"}, {"audio": 0, "start": 2860592, "crunched": 0, "end": 2861875, "filename": "/home/web_user/.terminfo/d/d211"}, {"audio": 0, "start": 2861875, "crunched": 0, "end": 2863929, "filename": "/home/web_user/.terminfo/d/d220-7b"}, {"audio": 0, "start": 2863929, "crunched": 0, "end": 2865099, "filename": "/home/web_user/.terminfo/d/d216e-unix"}, {"audio": 0, "start": 2865099, "crunched": 0, "end": 2865526, "filename": "/home/web_user/.terminfo/d/dg211"}, {"audio": 0, "start": 2865526, "crunched": 0, "end": 2866555, "filename": "/home/web_user/.terminfo/d/dgmode+color8"}, {"audio": 0, "start": 2866555, "crunched": 0, "end": 2867355, "filename": "/home/web_user/.terminfo/d/ddr3180"}, {"audio": 0, "start": 2867355, "crunched": 0, "end": 2868554, "filename": "/home/web_user/.terminfo/d/d412+dg"}, {"audio": 0, "start": 2868554, "crunched": 0, "end": 2870030, "filename": "/home/web_user/.terminfo/d/d577"}, {"audio": 0, "start": 2870030, "crunched": 0, "end": 2871200, "filename": "/home/web_user/.terminfo/d/d216-unix"}, {"audio": 0, "start": 2871200, "crunched": 0, "end": 2872317, "filename": "/home/web_user/.terminfo/d/dec-vt340"}, {"audio": 0, "start": 2872317, "crunched": 0, "end": 2873856, "filename": "/home/web_user/.terminfo/d/d555-7b"}, {"audio": 0, "start": 2873856, "crunched": 0, "end": 2874247, "filename": "/home/web_user/.terminfo/d/diablo1620"}, {"audio": 0, "start": 2874247, "crunched": 0, "end": 2875853, "filename": "/home/web_user/.terminfo/d/d460-7b-w"}, {"audio": 0, "start": 2875853, "crunched": 0, "end": 2876507, "filename": "/home/web_user/.terminfo/d/dt100"}, {"audio": 0, "start": 2876507, "crunched": 0, "end": 2876941, "filename": "/home/web_user/.terminfo/d/dg200"}, {"audio": 0, "start": 2876941, "crunched": 0, "end": 2878364, "filename": "/home/web_user/.terminfo/d/d412-unix-s"}, {"audio": 0, "start": 2878364, "crunched": 0, "end": 2878741, "filename": "/home/web_user/.terminfo/d/djgpp203"}, {"audio": 0, "start": 2878741, "crunched": 0, "end": 2880562, "filename": "/home/web_user/.terminfo/d/d430-dg-ccc"}, {"audio": 0, "start": 2880562, "crunched": 0, "end": 2881903, "filename": "/home/web_user/.terminfo/d/d464-unix-25"}, {"audio": 0, "start": 2881903, "crunched": 0, "end": 2883444, "filename": "/home/web_user/.terminfo/d/d461-w"}, {"audio": 0, "start": 2883444, "crunched": 0, "end": 2884901, "filename": "/home/web_user/.terminfo/d/dec-vt220"}, {"audio": 0, "start": 2884901, "crunched": 0, "end": 2885927, "filename": "/home/web_user/.terminfo/d/dgunix+ccc"}, {"audio": 0, "start": 2885927, "crunched": 0, "end": 2886408, "filename": "/home/web_user/.terminfo/d/dialogue"}, {"audio": 0, "start": 2886408, "crunched": 0, "end": 2886813, "filename": "/home/web_user/.terminfo/d/datagraphix"}, {"audio": 0, "start": 2886813, "crunched": 0, "end": 2887773, "filename": "/home/web_user/.terminfo/d/d200-dg"}, {"audio": 0, "start": 2887773, "crunched": 0, "end": 2888972, "filename": "/home/web_user/.terminfo/d/d412-dg"}, {"audio": 0, "start": 2888972, "crunched": 0, "end": 2890142, "filename": "/home/web_user/.terminfo/d/d216e+"}, {"audio": 0, "start": 2890142, "crunched": 0, "end": 2891112, "filename": "/home/web_user/.terminfo/d/darwin-200x64-m"}, {"audio": 0, "start": 2891112, "crunched": 0, "end": 2891740, "filename": "/home/web_user/.terminfo/s/sb2"}, {"audio": 0, "start": 2891740, "crunched": 0, "end": 2894802, "filename": "/home/web_user/.terminfo/s/st-256color"}, {"audio": 0, "start": 2894802, "crunched": 0, "end": 2895781, "filename": "/home/web_user/.terminfo/s/sun-ss5"}, {"audio": 0, "start": 2895781, "crunched": 0, "end": 2896760, "filename": "/home/web_user/.terminfo/s/sun-cgsix"}, {"audio": 0, "start": 2896760, "crunched": 0, "end": 2897227, "filename": "/home/web_user/.terminfo/s/sc415"}, {"audio": 0, "start": 2897227, "crunched": 0, "end": 2900301, "filename": "/home/web_user/.terminfo/s/st-direct"}, {"audio": 0, "start": 2900301, "crunched": 0, "end": 2901275, "filename": "/home/web_user/.terminfo/s/sun-24"}, {"audio": 0, "start": 2901275, "crunched": 0, "end": 2902279, "filename": "/home/web_user/.terminfo/s/sun1"}, {"audio": 0, "start": 2902279, "crunched": 0, "end": 2904980, "filename": "/home/web_user/.terminfo/s/st-0.6"}, {"audio": 0, "start": 2904980, "crunched": 0, "end": 2906948, "filename": "/home/web_user/.terminfo/s/screen-256color-bce"}, {"audio": 0, "start": 2906948, "crunched": 0, "end": 2910274, "filename": "/home/web_user/.terminfo/s/st-16color"}, {"audio": 0, "start": 2910274, "crunched": 0, "end": 2910902, "filename": "/home/web_user/.terminfo/s/sb3"}, {"audio": 0, "start": 2910902, "crunched": 0, "end": 2913041, "filename": "/home/web_user/.terminfo/s/screen.linux-m1b"}, {"audio": 0, "start": 2913041, "crunched": 0, "end": 2914057, "filename": "/home/web_user/.terminfo/s/sun-nic"}, {"audio": 0, "start": 2914057, "crunched": 0, "end": 2916989, "filename": "/home/web_user/.terminfo/s/st"}, {"audio": 0, "start": 2916989, "crunched": 0, "end": 2917993, "filename": "/home/web_user/.terminfo/s/sun-il"}, {"audio": 0, "start": 2917993, "crunched": 0, "end": 2918967, "filename": "/home/web_user/.terminfo/s/sun-48"}, {"audio": 0, "start": 2918967, "crunched": 0, "end": 2919926, "filename": "/home/web_user/.terminfo/s/soroc120"}, {"audio": 0, "start": 2919926, "crunched": 0, "end": 2922166, "filename": "/home/web_user/.terminfo/s/screen.rxvt"}, {"audio": 0, "start": 2922166, "crunched": 0, "end": 2924230, "filename": "/home/web_user/.terminfo/s/screen-16color"}, {"audio": 0, "start": 2924230, "crunched": 0, "end": 2927805, "filename": "/home/web_user/.terminfo/s/screen.xterm-xfree86"}, {"audio": 0, "start": 2927805, "crunched": 0, "end": 2928824, "filename": "/home/web_user/.terminfo/s/sun-s"}, {"audio": 0, "start": 2928824, "crunched": 0, "end": 2929919, "filename": "/home/web_user/.terminfo/s/scrhp"}, {"audio": 0, "start": 2929919, "crunched": 0, "end": 2933023, "filename": "/home/web_user/.terminfo/s/screen.mlterm"}, {"audio": 0, "start": 2933023, "crunched": 0, "end": 2935955, "filename": "/home/web_user/.terminfo/s/st-0.7"}, {"audio": 0, "start": 2935955, "crunched": 0, "end": 2936660, "filename": "/home/web_user/.terminfo/s/sb1"}, {"audio": 0, "start": 2936660, "crunched": 0, "end": 2938336, "filename": "/home/web_user/.terminfo/s/screen-s"}, {"audio": 0, "start": 2938336, "crunched": 0, "end": 2938822, "filename": "/home/web_user/.terminfo/s/soroc140"}, {"audio": 0, "start": 2938822, "crunched": 0, "end": 2939838, "filename": "/home/web_user/.terminfo/s/sun-e"}, {"audio": 0, "start": 2939838, "crunched": 0, "end": 2942588, "filename": "/home/web_user/.terminfo/s/screen.putty"}, {"audio": 0, "start": 2942588, "crunched": 0, "end": 2945810, "filename": "/home/web_user/.terminfo/s/screen.mrxvt"}, {"audio": 0, "start": 2945810, "crunched": 0, "end": 2949232, "filename": "/home/web_user/.terminfo/s/screen.konsole-256color"}, {"audio": 0, "start": 2949232, "crunched": 0, "end": 2951092, "filename": "/home/web_user/.terminfo/s/screen.linux"}, {"audio": 0, "start": 2951092, "crunched": 0, "end": 2952066, "filename": "/home/web_user/.terminfo/s/sun-17"}, {"audio": 0, "start": 2952066, "crunched": 0, "end": 2952582, "filename": "/home/web_user/.terminfo/s/sbobcat"}, {"audio": 0, "start": 2952582, "crunched": 0, "end": 2953613, "filename": "/home/web_user/.terminfo/s/sun-s-e"}, {"audio": 0, "start": 2953613, "crunched": 0, "end": 2954647, "filename": "/home/web_user/.terminfo/s/sun-cmd"}, {"audio": 0, "start": 2954647, "crunched": 0, "end": 2955563, "filename": "/home/web_user/.terminfo/s/stv52"}, {"audio": 0, "start": 2955563, "crunched": 0, "end": 2956574, "filename": "/home/web_user/.terminfo/s/s4"}, {"audio": 0, "start": 2956574, "crunched": 0, "end": 2957533, "filename": "/home/web_user/.terminfo/s/soroc"}, {"audio": 0, "start": 2957533, "crunched": 0, "end": 2958381, "filename": "/home/web_user/.terminfo/s/stv52pc"}, {"audio": 0, "start": 2958381, "crunched": 0, "end": 2958894, "filename": "/home/web_user/.terminfo/s/superbeeic"}, {"audio": 0, "start": 2958894, "crunched": 0, "end": 2961000, "filename": "/home/web_user/.terminfo/s/screen-16color-bce-s"}, {"audio": 0, "start": 2961000, "crunched": 0, "end": 2963316, "filename": "/home/web_user/.terminfo/s/screen.Eterm"}, {"audio": 0, "start": 2963316, "crunched": 0, "end": 2966743, "filename": "/home/web_user/.terminfo/s/screen.xterm-256color"}, {"audio": 0, "start": 2966743, "crunched": 0, "end": 2969065, "filename": "/home/web_user/.terminfo/s/screen-bce.Eterm"}, {"audio": 0, "start": 2969065, "crunched": 0, "end": 2969521, "filename": "/home/web_user/.terminfo/s/screwpoint"}, {"audio": 0, "start": 2969521, "crunched": 0, "end": 2971477, "filename": "/home/web_user/.terminfo/s/screen.minitel12-80"}, {"audio": 0, "start": 2971477, "crunched": 0, "end": 2973433, "filename": "/home/web_user/.terminfo/s/screen-256color"}, {"audio": 0, "start": 2973433, "crunched": 0, "end": 2976365, "filename": "/home/web_user/.terminfo/s/stterm"}, {"audio": 0, "start": 2976365, "crunched": 0, "end": 2978365, "filename": "/home/web_user/.terminfo/s/screen-256color-bce-s"}, {"audio": 0, "start": 2978365, "crunched": 0, "end": 2980321, "filename": "/home/web_user/.terminfo/s/screen.minitel1b-80"}, {"audio": 0, "start": 2980321, "crunched": 0, "end": 2981290, "filename": "/home/web_user/.terminfo/s/superbrain"}, {"audio": 0, "start": 2981290, "crunched": 0, "end": 2984616, "filename": "/home/web_user/.terminfo/s/stterm-16color"}, {"audio": 0, "start": 2984616, "crunched": 0, "end": 2984998, "filename": "/home/web_user/.terminfo/s/spinwriter"}, {"audio": 0, "start": 2984998, "crunched": 0, "end": 2986870, "filename": "/home/web_user/.terminfo/s/screen.minitel1"}, {"audio": 0, "start": 2986870, "crunched": 0, "end": 2987864, "filename": "/home/web_user/.terminfo/s/sun-1"}, {"audio": 0, "start": 2987864, "crunched": 0, "end": 2988829, "filename": "/home/web_user/.terminfo/s/sv80"}, {"audio": 0, "start": 2988829, "crunched": 0, "end": 2988990, "filename": "/home/web_user/.terminfo/s/synertek380"}, {"audio": 0, "start": 2988990, "crunched": 0, "end": 2992052, "filename": "/home/web_user/.terminfo/s/stterm-256color"}, {"audio": 0, "start": 2992052, "crunched": 0, "end": 2993968, "filename": "/home/web_user/.terminfo/s/screen.minitel1b-nb"}, {"audio": 0, "start": 2993968, "crunched": 0, "end": 2996224, "filename": "/home/web_user/.terminfo/s/screen-bce.rxvt"}, {"audio": 0, "start": 2996224, "crunched": 0, "end": 2996691, "filename": "/home/web_user/.terminfo/s/sc410"}, {"audio": 0, "start": 2996691, "crunched": 0, "end": 3000136, "filename": "/home/web_user/.terminfo/s/screen-bce.xterm-new"}, {"audio": 0, "start": 3000136, "crunched": 0, "end": 3003401, "filename": "/home/web_user/.terminfo/s/screen.mlterm-256color"}, {"audio": 0, "start": 3003401, "crunched": 0, "end": 3004375, "filename": "/home/web_user/.terminfo/s/sun-12"}, {"audio": 0, "start": 3004375, "crunched": 0, "end": 3005776, "filename": "/home/web_user/.terminfo/s/sun-color"}, {"audio": 0, "start": 3005776, "crunched": 0, "end": 3006632, "filename": "/home/web_user/.terminfo/s/st52-m"}, {"audio": 0, "start": 3006632, "crunched": 0, "end": 3008799, "filename": "/home/web_user/.terminfo/s/screen.linux-m1"}, {"audio": 0, "start": 3008799, "crunched": 0, "end": 3009297, "filename": "/home/web_user/.terminfo/s/superbee-xsb"}, {"audio": 0, "start": 3009297, "crunched": 0, "end": 3010153, "filename": "/home/web_user/.terminfo/s/st52"}, {"audio": 0, "start": 3010153, "crunched": 0, "end": 3012139, "filename": "/home/web_user/.terminfo/s/screen-256color-s"}, {"audio": 0, "start": 3012139, "crunched": 0, "end": 3012606, "filename": "/home/web_user/.terminfo/s/scanset"}, {"audio": 0, "start": 3012606, "crunched": 0, "end": 3014482, "filename": "/home/web_user/.terminfo/s/screen-bce.linux"}, {"audio": 0, "start": 3014482, "crunched": 0, "end": 3015516, "filename": "/home/web_user/.terminfo/s/sun-c"}, {"audio": 0, "start": 3015516, "crunched": 0, "end": 3018787, "filename": "/home/web_user/.terminfo/s/screen.konsole"}, {"audio": 0, "start": 3018787, "crunched": 0, "end": 3020719, "filename": "/home/web_user/.terminfo/s/screen.minitel1b"}, {"audio": 0, "start": 3020719, "crunched": 0, "end": 3022626, "filename": "/home/web_user/.terminfo/s/screen.putty-m2"}, {"audio": 0, "start": 3022626, "crunched": 0, "end": 3023600, "filename": "/home/web_user/.terminfo/s/sun-34"}, {"audio": 0, "start": 3023600, "crunched": 0, "end": 3026426, "filename": "/home/web_user/.terminfo/s/screen.putty-256color"}, {"audio": 0, "start": 3026426, "crunched": 0, "end": 3026775, "filename": "/home/web_user/.terminfo/s/sun+sl"}, {"audio": 0, "start": 3026775, "crunched": 0, "end": 3030070, "filename": "/home/web_user/.terminfo/s/screen-bce.gnome"}, {"audio": 0, "start": 3030070, "crunched": 0, "end": 3032162, "filename": "/home/web_user/.terminfo/s/screen-16color-s"}, {"audio": 0, "start": 3032162, "crunched": 0, "end": 3032560, "filename": "/home/web_user/.terminfo/s/simterm"}, {"audio": 0, "start": 3032560, "crunched": 0, "end": 3032975, "filename": "/home/web_user/.terminfo/s/sibo"}, {"audio": 0, "start": 3032975, "crunched": 0, "end": 3033449, "filename": "/home/web_user/.terminfo/s/screen+fkeys"}, {"audio": 0, "start": 3033449, "crunched": 0, "end": 3035410, "filename": "/home/web_user/.terminfo/s/screen.putty-m1"}, {"audio": 0, "start": 3035410, "crunched": 0, "end": 3037376, "filename": "/home/web_user/.terminfo/s/st52-color"}, {"audio": 0, "start": 3037376, "crunched": 0, "end": 3038390, "filename": "/home/web_user/.terminfo/s/sun-type4"}, {"audio": 0, "start": 3038390, "crunched": 0, "end": 3040346, "filename": "/home/web_user/.terminfo/s/screen.minitel2-80"}, {"audio": 0, "start": 3040346, "crunched": 0, "end": 3042014, "filename": "/home/web_user/.terminfo/s/screen.xterm-r6"}, {"audio": 0, "start": 3042014, "crunched": 0, "end": 3044125, "filename": "/home/web_user/.terminfo/s/screen.linux-m2"}, {"audio": 0, "start": 3044125, "crunched": 0, "end": 3045979, "filename": "/home/web_user/.terminfo/s/screen.minitel1-nb"}, {"audio": 0, "start": 3045979, "crunched": 0, "end": 3046564, "filename": "/home/web_user/.terminfo/s/screen2"}, {"audio": 0, "start": 3046564, "crunched": 0, "end": 3047862, "filename": "/home/web_user/.terminfo/s/simpleterm"}, {"audio": 0, "start": 3047862, "crunched": 0, "end": 3048893, "filename": "/home/web_user/.terminfo/s/sun-e-s"}, {"audio": 0, "start": 3048893, "crunched": 0, "end": 3049293, "filename": "/home/web_user/.terminfo/s/swtp"}, {"audio": 0, "start": 3049293, "crunched": 0, "end": 3050863, "filename": "/home/web_user/.terminfo/s/scoansi-old"}, {"audio": 0, "start": 3050863, "crunched": 0, "end": 3052516, "filename": "/home/web_user/.terminfo/s/screen"}, {"audio": 0, "start": 3052516, "crunched": 0, "end": 3054236, "filename": "/home/web_user/.terminfo/s/screen.teraterm"}, {"audio": 0, "start": 3054236, "crunched": 0, "end": 3055240, "filename": "/home/web_user/.terminfo/s/sun"}, {"audio": 0, "start": 3055240, "crunched": 0, "end": 3058519, "filename": "/home/web_user/.terminfo/s/screen-bce.konsole"}, {"audio": 0, "start": 3058519, "crunched": 0, "end": 3061755, "filename": "/home/web_user/.terminfo/s/screen-bce.mrxvt"}, {"audio": 0, "start": 3061755, "crunched": 0, "end": 3062403, "filename": "/home/web_user/.terminfo/s/superbee"}, {"audio": 0, "start": 3062403, "crunched": 0, "end": 3062564, "filename": "/home/web_user/.terminfo/s/synertek"}, {"audio": 0, "start": 3062564, "crunched": 0, "end": 3063580, "filename": "/home/web_user/.terminfo/s/sune"}, {"audio": 0, "start": 3063580, "crunched": 0, "end": 3064210, "filename": "/home/web_user/.terminfo/s/screen3"}, {"audio": 0, "start": 3064210, "crunched": 0, "end": 3064772, "filename": "/home/web_user/.terminfo/s/st52-old"}, {"audio": 0, "start": 3064772, "crunched": 0, "end": 3065148, "filename": "/home/web_user/.terminfo/s/system1"}, {"audio": 0, "start": 3065148, "crunched": 0, "end": 3066706, "filename": "/home/web_user/.terminfo/s/scoansi"}, {"audio": 0, "start": 3066706, "crunched": 0, "end": 3068366, "filename": "/home/web_user/.terminfo/s/screen-w"}, {"audio": 0, "start": 3068366, "crunched": 0, "end": 3071726, "filename": "/home/web_user/.terminfo/s/screen.vte"}, {"audio": 0, "start": 3071726, "crunched": 0, "end": 3073661, "filename": "/home/web_user/.terminfo/s/screen.putty-m1b"}, {"audio": 0, "start": 3073661, "crunched": 0, "end": 3075317, "filename": "/home/web_user/.terminfo/s/screen-bce"}, {"audio": 0, "start": 3075317, "crunched": 0, "end": 3076321, "filename": "/home/web_user/.terminfo/s/sun2"}, {"audio": 0, "start": 3076321, "crunched": 0, "end": 3076969, "filename": "/home/web_user/.terminfo/s/sbi"}, {"audio": 0, "start": 3076969, "crunched": 0, "end": 3079045, "filename": "/home/web_user/.terminfo/s/screen-16color-bce"}, {"audio": 0, "start": 3079045, "crunched": 0, "end": 3082620, "filename": "/home/web_user/.terminfo/s/screen.xterm-new"}, {"audio": 0, "start": 3082620, "crunched": 0, "end": 3085907, "filename": "/home/web_user/.terminfo/s/screen.gnome"}, {"audio": 0, "start": 3085907, "crunched": 0, "end": 3089389, "filename": "/home/web_user/.terminfo/s/screen.vte-256color"}, {"audio": 0, "start": 3089389, "crunched": 0, "end": 3091193, "filename": "/home/web_user/.terminfo/s/scoansi-new"}, {"audio": 0, "start": 3091193, "crunched": 0, "end": 3091895, "filename": "/home/web_user/.terminfo/s/screen+italics"}, {"audio": 0, "start": 3091895, "crunched": 0, "end": 3093148, "filename": "/home/web_user/.terminfo/u/uwin"}, {"audio": 0, "start": 3093148, "crunched": 0, "end": 3094159, "filename": "/home/web_user/.terminfo/u/unixpc"}, {"audio": 0, "start": 3094159, "crunched": 0, "end": 3095652, "filename": "/home/web_user/.terminfo/u/uniterm"}, {"audio": 0, "start": 3095652, "crunched": 0, "end": 3097145, "filename": "/home/web_user/.terminfo/u/uniterm49"}, {"audio": 0, "start": 3097145, "crunched": 0, "end": 3097982, "filename": "/home/web_user/.terminfo/u/uts30"}, {"audio": 0, "start": 3097982, "crunched": 0, "end": 3098565, "filename": "/home/web_user/.terminfo/u/ultima2"}, {"audio": 0, "start": 3098565, "crunched": 0, "end": 3099148, "filename": "/home/web_user/.terminfo/u/ultimaII"}, {"audio": 0, "start": 3099148, "crunched": 0, "end": 3099468, "filename": "/home/web_user/.terminfo/u/unknown"}, {"audio": 0, "start": 3099468, "crunched": 0, "end": 3100147, "filename": "/home/web_user/.terminfo/f/freedom200"}, {"audio": 0, "start": 3100147, "crunched": 0, "end": 3100815, "filename": "/home/web_user/.terminfo/f/f110"}, {"audio": 0, "start": 3100815, "crunched": 0, "end": 3101492, "filename": "/home/web_user/.terminfo/f/f200vi"}, {"audio": 0, "start": 3101492, "crunched": 0, "end": 3102137, "filename": "/home/web_user/.terminfo/f/freedom100"}, {"audio": 0, "start": 3102137, "crunched": 0, "end": 3102788, "filename": "/home/web_user/.terminfo/f/f100-rv"}, {"audio": 0, "start": 3102788, "crunched": 0, "end": 3103453, "filename": "/home/web_user/.terminfo/f/f110-14"}, {"audio": 0, "start": 3103453, "crunched": 0, "end": 3105253, "filename": "/home/web_user/.terminfo/f/fbterm"}, {"audio": 0, "start": 3105253, "crunched": 0, "end": 3105898, "filename": "/home/web_user/.terminfo/f/f100"}, {"audio": 0, "start": 3105898, "crunched": 0, "end": 3106321, "filename": "/home/web_user/.terminfo/f/f1720a"}, {"audio": 0, "start": 3106321, "crunched": 0, "end": 3106994, "filename": "/home/web_user/.terminfo/f/f110-14w"}, {"audio": 0, "start": 3106994, "crunched": 0, "end": 3107639, "filename": "/home/web_user/.terminfo/f/freedom"}, {"audio": 0, "start": 3107639, "crunched": 0, "end": 3108270, "filename": "/home/web_user/.terminfo/f/fenixw"}, {"audio": 0, "start": 3108270, "crunched": 0, "end": 3108885, "filename": "/home/web_user/.terminfo/f/fenix"}, {"audio": 0, "start": 3108885, "crunched": 0, "end": 3109566, "filename": "/home/web_user/.terminfo/f/f200-w"}, {"audio": 0, "start": 3109566, "crunched": 0, "end": 3110257, "filename": "/home/web_user/.terminfo/f/f200vi-w"}, {"audio": 0, "start": 3110257, "crunched": 0, "end": 3110811, "filename": "/home/web_user/.terminfo/f/fixterm"}, {"audio": 0, "start": 3110811, "crunched": 0, "end": 3111481, "filename": "/home/web_user/.terminfo/f/f110-w"}, {"audio": 0, "start": 3111481, "crunched": 0, "end": 3111926, "filename": "/home/web_user/.terminfo/f/fox"}, {"audio": 0, "start": 3111926, "crunched": 0, "end": 3112439, "filename": "/home/web_user/.terminfo/f/falco-p"}, {"audio": 0, "start": 3112439, "crunched": 0, "end": 3113089, "filename": "/home/web_user/.terminfo/f/fortune"}, {"audio": 0, "start": 3113089, "crunched": 0, "end": 3113549, "filename": "/home/web_user/.terminfo/f/falco"}, {"audio": 0, "start": 3113549, "crunched": 0, "end": 3114228, "filename": "/home/web_user/.terminfo/f/f200"}, {"audio": 0, "start": 3114228, "crunched": 0, "end": 3114896, "filename": "/home/web_user/.terminfo/f/freedom110"}, {"audio": 0, "start": 3114896, "crunched": 0, "end": 3115546, "filename": "/home/web_user/.terminfo/f/fos"}, {"audio": 0, "start": 3115546, "crunched": 0, "end": 3115969, "filename": "/home/web_user/.terminfo/f/f1720"}, {"audio": 0, "start": 3115969, "crunched": 0, "end": 3116620, "filename": "/home/web_user/.terminfo/f/freedom-rv"}], "remote_package_size": 3116620, "package_uuid": "91d0059e-a8a1-4037-bfdd-cb008394f452"});

})();



// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

Module['arguments'] = [];
Module['thisProgram'] = './this.program';
Module['quit'] = function(status, toThrow) {
  throw toThrow;
};
Module['preRun'] = [];
Module['postRun'] = [];

// The environment setup code below is customized to use Module.
// *** Environment setup code ***

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (ENVIRONMENT_IS_NODE) {


  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  var nodeFS;
  var nodePath;

  Module['read'] = function shell_read(filename, binary) {
    var ret;
      if (!nodeFS) nodeFS = require('fs');
      if (!nodePath) nodePath = require('path');
      filename = nodePath['normalize'](filename);
      ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  if (process['argv'].length > 1) {
    Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
  }

  Module['arguments'] = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });
  // Currently node will swallow unhandled rejections, but this behavior is
  // deprecated, and in the future it will exit with error status.
  process['on']('unhandledRejection', function(reason, p) {
    err('node.js exiting due to unhandled promise rejection');
    process['exit'](1);
  });

  Module['quit'] = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
} else
if (ENVIRONMENT_IS_SHELL) {


  if (typeof read != 'undefined') {
    Module['read'] = function shell_read(f) {
      return read(f);
    };
  }

  Module['readBinary'] = function readBinary(f) {
    var data;
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof quit === 'function') {
    Module['quit'] = function(status) {
      quit(status);
    }
  }
} else
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {


  Module['read'] = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    Module['readBinary'] = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(xhr.response);
    };
  }

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  Module['setWindowTitle'] = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
// If the user provided Module.print or printErr, use that. Otherwise,
// console.log is checked first, as 'print' on the web will open a print dialogue
// printErr is preferable to console.warn (works better in shells)
// bind(console) is necessary to fix IE/Edge closed dev tools panel behavior.
var out = Module['print'] || (typeof console !== 'undefined' ? console.log.bind(console) : (typeof print !== 'undefined' ? print : null));
var err = Module['printErr'] || (typeof printErr !== 'undefined' ? printErr : ((typeof console !== 'undefined' && console.warn.bind(console)) || out));

// *** Environment setup code ***

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;

// stack management, and other functionality that is provided by the compiled code,
// should not be used before it is ready
stackSave = stackRestore = stackAlloc = setTempRet0 = getTempRet0 = function() {
  abort('cannot use the stack before compiled code is ready to run, and has provided stack access');
};

function staticAlloc(size) {
  assert(!staticSealed);
  var ret = STATICTOP;
  STATICTOP = (STATICTOP + size + 15) & -16;
  assert(STATICTOP < TOTAL_MEMORY, 'not enough memory for static allocation - increase TOTAL_MEMORY');
  return ret;
}

function dynamicAlloc(size) {
  assert(DYNAMICTOP_PTR);
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  if (end >= TOTAL_MEMORY) {
    var success = enlargeMemory();
    if (!success) {
      HEAP32[DYNAMICTOP_PTR>>2] = ret;
      return 0;
    }
  }
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  var ret = size = Math.ceil(size / factor) * factor;
  return ret;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = parseInt(type.substr(1));
        assert(bits % 8 === 0);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

var asm2wasmImports = { // special asm2wasm imports
    "f64-rem": function(x, y) {
        return x % y;
    },
    "debugger": function() {
        debugger;
    }
};



var jsCallStartIndex = 1;
var functionPointers = new Array(0);

// 'sig' parameter is only used on LLVM wasm backend
function addFunction(func, sig) {
  if (typeof sig === 'undefined') {
    err('warning: addFunction(): You should provide a wasm function signature string as a second argument. This is not necessary for asm.js and asm2wasm, but is required for the LLVM wasm backend, so it is recommended for full portability.');
  }
  var base = 0;
  for (var i = base; i < base + 0; i++) {
    if (!functionPointers[i]) {
      functionPointers[i] = func;
      return jsCallStartIndex + i;
    }
  }
  throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
}

function removeFunction(index) {
  functionPointers[index-jsCallStartIndex] = null;
}

var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}


function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

function dynCall(sig, ptr, args) {
  if (args && args.length) {
    assert(args.length == sig.length-1);
    assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    assert(sig.length == 1);
    assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
    return Module['dynCall_' + sig].call(null, ptr);
  }
}


function getCompilerSetting(name) {
  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
}

var Runtime = {
  // FIXME backwards compatibility layer for ports. Support some Runtime.*
  //       for now, fix it there, then remove it from here. That way we
  //       can minimize any period of breakage.
  dynCall: dynCall, // for SDL2 port
  // helpful errors
  getTempRet0: function() { abort('getTempRet0() is now a top-level function, after removing the Runtime object. Remove "Runtime."') },
  staticAlloc: function() { abort('staticAlloc() is now a top-level function, after removing the Runtime object. Remove "Runtime."') },
  stackAlloc: function() { abort('stackAlloc() is now a top-level function, after removing the Runtime object. Remove "Runtime."') },
};

// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 1024;


// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html



//========================================
// Runtime essentials
//========================================

var ABORT = 0; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

var JSfuncs = {
  // Helpers for cwrap -- it can't refer to Runtime directly because it might
  // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
  // out what the minified function name is.
  'stackSave': function() {
    stackSave()
  },
  'stackRestore': function() {
    stackRestore()
  },
  // type conversion from js to c
  'arrayToC' : function(arr) {
    var ret = stackAlloc(arr.length);
    writeArrayToMemory(arr, ret);
    return ret;
  },
  'stringToC' : function(str) {
    var ret = 0;
    if (str !== null && str !== undefined && str !== 0) { // null string
      // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
      var len = (str.length << 2) + 1;
      ret = stackAlloc(len);
      stringToUTF8(str, ret, len);
    }
    return ret;
  }
};

// For fast lookup of conversion functions
var toC = {
  'string': JSfuncs['stringToC'], 'array': JSfuncs['arrayToC']
};


// C calling interface.
function ccall(ident, returnType, argTypes, args, opts) {
  function convertReturnValue(ret) {
    if (returnType === 'string') return Pointer_stringify(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

/** @type {function(number, number, string, boolean=)} */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @type {function(number, string, boolean=)} */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : staticAlloc, stackAlloc, staticAlloc, dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return staticAlloc(size);
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}

/** @type {function(number, number=)} */
function Pointer_stringify(ptr, length) {
  if (length === 0 || !ptr) return '';
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))>>0)];
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return UTF8ToString(ptr);
}

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

function demangle(func) {
  warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
  return func;
}

function demangleAll(text) {
  var regex =
    /__Z[\w\d_]+/g;
  return text.replace(regex,
    function(x) {
      var y = demangle(x);
      return x === y ? x : (x + ' [' + y + ']');
    });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}

// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;
var MIN_TOTAL_MEMORY = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBuffer(buf) {
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  HEAPU32[(STACK_MAX >> 2)-1] = 0x02135467;
  HEAPU32[(STACK_MAX >> 2)-2] = 0x89BACDFE;
}

function checkStackCookie() {
  if (HEAPU32[(STACK_MAX >> 2)-1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2)-2] != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2)-2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2)-1].toString(16));
  }
  // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - stackSave() + allocSize) + ' bytes available!');
}


function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}

if (!Module['reallocBuffer']) Module['reallocBuffer'] = function(size) {
  var ret;
  try {
    if (ArrayBuffer.transfer) {
      ret = ArrayBuffer.transfer(buffer, size);
    } else {
      var oldHEAP8 = HEAP8;
      ret = new ArrayBuffer(size);
      var temp = new Int8Array(ret);
      temp.set(oldHEAP8);
    }
  } catch(e) {
    return false;
  }
  var success = _emscripten_replace_memory(ret);
  if (!success) return false;
  return ret;
};

function enlargeMemory() {
  // TOTAL_MEMORY is the current size of the actual array, and DYNAMICTOP is the new top.
  assert(HEAP32[DYNAMICTOP_PTR>>2] > TOTAL_MEMORY); // This function should only ever be called after the ceiling of the dynamic heap has already been bumped to exceed the current total size of the asm.js heap.


  var PAGE_MULTIPLE = Module["usingWasm"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE; // In wasm, heap size must be a multiple of 64KB. In asm.js, they need to be multiples of 16MB.
  var LIMIT = 2147483648 - PAGE_MULTIPLE; // We can do one page short of 2GB as theoretical maximum.

  if (HEAP32[DYNAMICTOP_PTR>>2] > LIMIT) {
    err('Cannot enlarge memory, asked to go up to ' + HEAP32[DYNAMICTOP_PTR>>2] + ' bytes, but the limit is ' + LIMIT + ' bytes!');
    return false;
  }

  var OLD_TOTAL_MEMORY = TOTAL_MEMORY;
  TOTAL_MEMORY = Math.max(TOTAL_MEMORY, MIN_TOTAL_MEMORY); // So the loop below will not be infinite, and minimum asm.js memory size is 16MB.

  while (TOTAL_MEMORY < HEAP32[DYNAMICTOP_PTR>>2]) { // Keep incrementing the heap size as long as it's less than what is requested.
    if (TOTAL_MEMORY <= 536870912) {
      TOTAL_MEMORY = alignUp(2 * TOTAL_MEMORY, PAGE_MULTIPLE); // Simple heuristic: double until 1GB...
    } else {
      // ..., but after that, add smaller increments towards 2GB, which we cannot reach
      TOTAL_MEMORY = Math.min(alignUp((3 * TOTAL_MEMORY + 2147483648) / 4, PAGE_MULTIPLE), LIMIT);
      if (TOTAL_MEMORY === OLD_TOTAL_MEMORY) {
        warnOnce('Cannot ask for more memory since we reached the practical limit in browsers (which is just below 2GB), so the request would have failed. Requesting only ' + TOTAL_MEMORY);
      }
    }
  }

  var start = Date.now();

  var replacement = Module['reallocBuffer'](TOTAL_MEMORY);
  if (!replacement || replacement.byteLength != TOTAL_MEMORY) {
    err('Failed to grow the heap from ' + OLD_TOTAL_MEMORY + ' bytes to ' + TOTAL_MEMORY + ' bytes, not enough memory!');
    if (replacement) {
      err('Expected to get back a buffer of size ' + TOTAL_MEMORY + ' bytes, but instead got back a buffer of size ' + replacement.byteLength);
    }
    // restore the state to before this call, we failed
    TOTAL_MEMORY = OLD_TOTAL_MEMORY;
    return false;
  }

  // everything worked

  updateGlobalBuffer(replacement);
  updateGlobalBufferViews();

  if (!Module["usingWasm"]) {
    err('Warning: Enlarging memory arrays, this is not fast! ' + [OLD_TOTAL_MEMORY, TOTAL_MEMORY]);
  }


  return true;
}

var byteLength;
try {
  byteLength = Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength').get);
  byteLength(new ArrayBuffer(4)); // can fail on older ie
} catch(e) { // can fail on older node/v8
  byteLength = function(buffer) { return buffer.byteLength; };
}

var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
if (TOTAL_MEMORY < TOTAL_STACK) err('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');



// Use a provided buffer, if there is one, or else allocate a new one
if (Module['buffer']) {
  buffer = Module['buffer'];
  assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
} else {
  // Use a WebAssembly memory where available
  if (typeof WebAssembly === 'object' && typeof WebAssembly.Memory === 'function') {
    assert(TOTAL_MEMORY % WASM_PAGE_SIZE === 0);
    Module['wasmMemory'] = new WebAssembly.Memory({ 'initial': TOTAL_MEMORY / WASM_PAGE_SIZE });
    buffer = Module['wasmMemory'].buffer;
  } else
  {
    buffer = new ArrayBuffer(TOTAL_MEMORY);
  }
  assert(buffer.byteLength === TOTAL_MEMORY);
  Module['buffer'] = buffer;
}
updateGlobalBufferViews();


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)
  HEAP32[0] = 0x63736d65; /* 'emsc' */
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  checkStackCookie();
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}

assert(Math['imul'] && Math['fround'] && Math['clz32'] && Math['trunc'], 'this is a legacy browser, build with LEGACY_VM_SUPPORT');

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;






// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return String.prototype.startsWith ?
      filename.startsWith(dataURIPrefix) :
      filename.indexOf(dataURIPrefix) === 0;
}




function integrateWasmJS() {
  // wasm.js has several methods for creating the compiled code module here:
  //  * 'native-wasm' : use native WebAssembly support in the browser
  //  * 'interpret-s-expr': load s-expression code from a .wast and interpret
  //  * 'interpret-binary': load binary wasm and interpret
  //  * 'interpret-asm2wasm': load asm.js code, translate to wasm, and interpret
  //  * 'asmjs': no wasm, just load the asm.js code and use that (good for testing)
  // The method is set at compile time (BINARYEN_METHOD)
  // The method can be a comma-separated list, in which case, we will try the
  // options one by one. Some of them can fail gracefully, and then we can try
  // the next.

  // inputs

  var method = 'native-wasm';

  var wasmTextFile = 'hello.wast';
  var wasmBinaryFile = 'hello.wasm';
  var asmjsCodeFile = 'hello.temp.asm.js';

  if (typeof Module['locateFile'] === 'function') {
    if (!isDataURI(wasmTextFile)) {
      wasmTextFile = Module['locateFile'](wasmTextFile);
    }
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = Module['locateFile'](wasmBinaryFile);
    }
    if (!isDataURI(asmjsCodeFile)) {
      asmjsCodeFile = Module['locateFile'](asmjsCodeFile);
    }
  }

  // utilities

  var wasmPageSize = 64*1024;

  var info = {
    'global': null,
    'env': null,
    'asm2wasm': asm2wasmImports,
    'parent': Module // Module inside wasm-js.cpp refers to wasm-js.cpp; this allows access to the outside program.
  };

  var exports = null;


  function mergeMemory(newBuffer) {
    // The wasm instance creates its memory. But static init code might have written to
    // buffer already, including the mem init file, and we must copy it over in a proper merge.
    // TODO: avoid this copy, by avoiding such static init writes
    // TODO: in shorter term, just copy up to the last static init write
    var oldBuffer = Module['buffer'];
    if (newBuffer.byteLength < oldBuffer.byteLength) {
      err('the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here');
    }
    var oldView = new Int8Array(oldBuffer);
    var newView = new Int8Array(newBuffer);


    newView.set(oldView);
    updateGlobalBuffer(newBuffer);
    updateGlobalBufferViews();
  }

  function fixImports(imports) {
    return imports;
  }

  function getBinary() {
    try {
      if (Module['wasmBinary']) {
        return new Uint8Array(Module['wasmBinary']);
      }
      if (Module['readBinary']) {
        return Module['readBinary'](wasmBinaryFile);
      } else {
        throw "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";
      }
    }
    catch (err) {
      abort(err);
    }
  }

  function getBinaryPromise() {
    // if we don't have the binary yet, and have the Fetch api, use that
    // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
    if (!Module['wasmBinary'] && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
        return getBinary();
      });
    }
    // Otherwise, getBinary should be able to get it synchronously
    return new Promise(function(resolve, reject) {
      resolve(getBinary());
    });
  }

  // do-method functions


  function doNativeWasm(global, env, providedBuffer) {
    if (typeof WebAssembly !== 'object') {
      // when the method is just native-wasm, our error message can be very specific
      abort('No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.');
      err('no native wasm support detected');
      return false;
    }
    // prepare memory import
    if (!(Module['wasmMemory'] instanceof WebAssembly.Memory)) {
      err('no native wasm Memory in use');
      return false;
    }
    env['memory'] = Module['wasmMemory'];
    // Load the wasm module and create an instance of using native support in the JS engine.
    info['global'] = {
      'NaN': NaN,
      'Infinity': Infinity
    };
    info['global.Math'] = Math;
    info['env'] = env;
    // handle a generated wasm instance, receiving its exports and
    // performing other necessary setup
    function receiveInstance(instance, module) {
      exports = instance.exports;
      if (exports.memory) mergeMemory(exports.memory);
      Module['asm'] = exports;
      Module["usingWasm"] = true;
      removeRunDependency('wasm-instantiate');
    }
    addRunDependency('wasm-instantiate');

    // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
    // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
    // to any other async startup actions they are performing.
    if (Module['instantiateWasm']) {
      try {
        return Module['instantiateWasm'](info, receiveInstance);
      } catch(e) {
        err('Module.instantiateWasm callback failed with error: ' + e);
        return false;
      }
    }

    // Async compilation can be confusing when an error on the page overwrites Module
    // (for example, if the order of elements is wrong, and the one defining Module is
    // later), so we save Module and check it later.
    var trueModule = Module;
    function receiveInstantiatedSource(output) {
      // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
      // receiveInstance() will swap in the exports (to Module.asm) so they can be called
      assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
      trueModule = null;
      receiveInstance(output['instance'], output['module']);
    }
    function instantiateArrayBuffer(receiver) {
      getBinaryPromise().then(function(binary) {
        return WebAssembly.instantiate(binary, info);
      }).then(receiver).catch(function(reason) {
        err('failed to asynchronously prepare wasm: ' + reason);
        abort(reason);
      });
    }
    // Prefer streaming instantiation if available.
    if (!Module['wasmBinary'] &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      WebAssembly.instantiateStreaming(fetch(wasmBinaryFile, { credentials: 'same-origin' }), info)
        .then(receiveInstantiatedSource)
        .catch(function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err('wasm streaming compile failed: ' + reason);
          err('falling back to ArrayBuffer instantiation');
          instantiateArrayBuffer(receiveInstantiatedSource);
        });
    } else {
      instantiateArrayBuffer(receiveInstantiatedSource);
    }
    return {}; // no exports yet; we'll fill them in later
  }


  // We may have a preloaded value in Module.asm, save it
  Module['asmPreload'] = Module['asm'];

  // Memory growth integration code

  var asmjsReallocBuffer = Module['reallocBuffer'];

  var wasmReallocBuffer = function(size) {
    var PAGE_MULTIPLE = Module["usingWasm"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE; // In wasm, heap size must be a multiple of 64KB. In asm.js, they need to be multiples of 16MB.
    size = alignUp(size, PAGE_MULTIPLE); // round up to wasm page size
    var old = Module['buffer'];
    var oldSize = old.byteLength;
    if (Module["usingWasm"]) {
      // native wasm support
      try {
        var result = Module['wasmMemory'].grow((size - oldSize) / wasmPageSize); // .grow() takes a delta compared to the previous size
        if (result !== (-1 | 0)) {
          // success in native wasm memory growth, get the buffer from the memory
          return Module['buffer'] = Module['wasmMemory'].buffer;
        } else {
          return null;
        }
      } catch(e) {
        console.error('Module.reallocBuffer: Attempted to grow from ' + oldSize  + ' bytes to ' + size + ' bytes, but got error: ' + e);
        return null;
      }
    }
  };

  Module['reallocBuffer'] = function(size) {
    if (finalMethod === 'asmjs') {
      return asmjsReallocBuffer(size);
    } else {
      return wasmReallocBuffer(size);
    }
  };

  // we may try more than one; this is the final one, that worked and we are using
  var finalMethod = '';

  // Provide an "asm.js function" for the application, called to "link" the asm.js module. We instantiate
  // the wasm module at that time, and it receives imports and provides exports and so forth, the app
  // doesn't need to care that it is wasm or olyfilled wasm or asm.js.

  Module['asm'] = function(global, env, providedBuffer) {
    env = fixImports(env);

    // import table
    if (!env['table']) {
      var TABLE_SIZE = Module['wasmTableSize'];
      if (TABLE_SIZE === undefined) TABLE_SIZE = 1024; // works in binaryen interpreter at least
      var MAX_TABLE_SIZE = Module['wasmMaxTableSize'];
      if (typeof WebAssembly === 'object' && typeof WebAssembly.Table === 'function') {
        if (MAX_TABLE_SIZE !== undefined) {
          env['table'] = new WebAssembly.Table({ 'initial': TABLE_SIZE, 'maximum': MAX_TABLE_SIZE, 'element': 'anyfunc' });
        } else {
          env['table'] = new WebAssembly.Table({ 'initial': TABLE_SIZE, element: 'anyfunc' });
        }
      } else {
        env['table'] = new Array(TABLE_SIZE); // works in binaryen interpreter at least
      }
      Module['wasmTable'] = env['table'];
    }

    if (!env['memoryBase']) {
      env['memoryBase'] = Module['STATIC_BASE']; // tell the memory segments where to place themselves
    }
    if (!env['tableBase']) {
      env['tableBase'] = 0; // table starts at 0 by default, in dynamic linking this will change
    }

    // try the methods. each should return the exports if it succeeded

    var exports;
    exports = doNativeWasm(global, env, providedBuffer);

    assert(exports, 'no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods');


    return exports;
  };

  var methodHandler = Module['asm']; // note our method handler, as we may modify Module['asm'] later
}

integrateWasmJS();

// === Body ===

var ASM_CONSTS = [];





STATIC_BASE = GLOBAL_BASE;

STATICTOP = STATIC_BASE + 54640;
/* global initializers */  __ATINIT__.push({ func: function() { ___emscripten_environ_constructor() } });







var STATIC_BUMP = 54640;
Module["STATIC_BASE"] = STATIC_BASE;
Module["STATIC_BUMP"] = STATIC_BUMP;

/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


  
  var ENV={};function ___buildEnvironment(environ) {
      // WARNING: Arbitrary limit!
      var MAX_ENV_VALUES = 64;
      var TOTAL_ENV_SIZE = 1024;
  
      // Statically allocate memory for the environment.
      var poolPtr;
      var envPtr;
      if (!___buildEnvironment.called) {
        ___buildEnvironment.called = true;
        // Set default values. Use string keys for Closure Compiler compatibility.
        ENV['USER'] = ENV['LOGNAME'] = 'web_user';
        ENV['PATH'] = '/';
        ENV['PWD'] = '/';
        ENV['HOME'] = '/home/web_user';
        ENV['LANG'] = 'C.UTF-8';
        ENV['_'] = Module['thisProgram'];
        // Allocate memory.
        poolPtr = getMemory(TOTAL_ENV_SIZE);
        envPtr = getMemory(MAX_ENV_VALUES * 4);
        HEAP32[((envPtr)>>2)]=poolPtr;
        HEAP32[((environ)>>2)]=envPtr;
      } else {
        envPtr = HEAP32[((environ)>>2)];
        poolPtr = HEAP32[((envPtr)>>2)];
      }
  
      // Collect key=value lines.
      var strings = [];
      var totalSize = 0;
      for (var key in ENV) {
        if (typeof ENV[key] === 'string') {
          var line = key + '=' + ENV[key];
          strings.push(line);
          totalSize += line.length;
        }
      }
      if (totalSize > TOTAL_ENV_SIZE) {
        throw new Error('Environment size exceeded TOTAL_ENV_SIZE!');
      }
  
      // Make new.
      var ptrSize = 4;
      for (var i = 0; i < strings.length; i++) {
        var line = strings[i];
        writeAsciiToMemory(line, poolPtr);
        HEAP32[(((envPtr)+(i * ptrSize))>>2)]=poolPtr;
        poolPtr += line.length + 1;
      }
      HEAP32[(((envPtr)+(strings.length * ptrSize))>>2)]=0;
    }

  function ___lock() {}

  
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  
  function ___setErrNo(value) {
      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
      else err('failed to set errno from JS');
      return value;
    }function ___map_file(pathname, size) {
      ___setErrNo(ERRNO_CODES.EPERM);
      return -1;
    }

  
  var PROCINFO={ppid:1,pid:42,sid:42,pgid:42};
  
  
  
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  
  var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function (stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = new Buffer(BUFSIZE);
              var bytesRead = 0;
  
              var isPosixPlatform = (process.platform != 'win32'); // Node doesn't offer a direct check, so test by exclusion
  
              var fd = process.stdin.fd;
              if (isPosixPlatform) {
                // Linux and Mac cannot use process.stdin.fd (which isn't set up as sync)
                var usingDevice = false;
                try {
                  fd = fs.openSync('/dev/stdin', 'r');
                  usingDevice = true;
                } catch (e) {}
              }
  
              try {
                bytesRead = fs.readSync(fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().indexOf('EOF') != -1) bytesRead = 0;
                else throw e;
              }
  
              if (usingDevice) { fs.closeSync(fd); }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
  
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function (tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function (tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  var MEMFS={ops_table:null,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function (node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function (node) {
        if (!node.contents) return new Uint8Array;
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function (node, newCapacity) {
        // If we are asked to expand the size of a file that already exists, revert to using a standard JS array to store the file
        // instead of a typed array. This makes resizing the array more flexible because we can just .push() elements at the back to
        // increase the size.
        if (node.contents && node.contents.subarray && newCapacity > node.contents.length) {
          node.contents = MEMFS.getFileDataAsRegularArray(node);
          node.usedBytes = node.contents.length; // We might be writing to a lazy-loaded file which had overridden this property, so force-reset it.
        }
  
        if (!node.contents || node.contents.subarray) { // Keep using a typed array if creating a new storage, or if old one was a typed array as well.
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
          // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
          // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
          // avoid overshooting the allocation cap by a very large margin.
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) | 0);
          if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity); // Allocate new storage.
          if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
          return;
        }
        // Not using a typed array to back the file storage. Use a standard JS array instead.
        if (!node.contents && newCapacity > 0) node.contents = [];
        while (node.contents.length < newCapacity) node.contents.push(0);
      },resizeFileStorage:function (node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(new ArrayBuffer(newSize)); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position); // Use typed array write if available.
          else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position+length);
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < stream.node.usedBytes) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function (stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  var IDBFS={dbs:{},indexedDB:function () {
        if (typeof indexedDB !== 'undefined') return indexedDB;
        var ret = null;
        if (typeof window === 'object') ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, 'IDBFS used, but indexedDB not supported');
        return ret;
      },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        // reuse all of the core MEMFS functionality
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },getDB:function (name, callback) {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        if (!req) {
          return callback("Unable to connect to IndexedDB");
        }
        req.onupgradeneeded = function(e) {
          var db = e.target.result;
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          if (!fileStore.indexNames.contains('timestamp')) {
            fileStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
        };
        req.onsuccess = function() {
          db = req.result;
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },getLocalSet:function (mount, callback) {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { timestamp: stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },getRemoteSet:function (mount, callback) {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
  
          try {
            var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
            transaction.onerror = function(e) {
              callback(this.error);
              e.preventDefault();
            };
  
            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
            var index = store.index('timestamp');
  
            index.openKeyCursor().onsuccess = function(event) {
              var cursor = event.target.result;
  
              if (!cursor) {
                return callback(null, { type: 'remote', db: db, entries: entries });
              }
  
              entries[cursor.primaryKey] = { timestamp: cursor.key };
  
              cursor.continue();
            };
          } catch (e) {
            return callback(e);
          }
        });
      },loadLocalEntry:function (path, callback) {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { timestamp: stat.mtime, mode: stat.mode });
        } else if (FS.isFile(stat.mode)) {
          // Performance consideration: storing a normal JavaScript array to a IndexedDB is much slower than storing a typed array.
          // Therefore always convert the file contents to a typed array first before writing the data to IndexedDB.
          node.contents = MEMFS.getFileDataAsTypedArray(node);
          return callback(null, { timestamp: stat.mtime, mode: stat.mode, contents: node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },storeLocalEntry:function (path, entry, callback) {
        try {
          if (FS.isDir(entry.mode)) {
            FS.mkdir(path, entry.mode);
          } else if (FS.isFile(entry.mode)) {
            FS.writeFile(path, entry.contents, { canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.chmod(path, entry.mode);
          FS.utime(path, entry.timestamp, entry.timestamp);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },removeLocalEntry:function (path, callback) {
        try {
          var lookup = FS.lookupPath(path);
          var stat = FS.stat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },loadRemoteEntry:function (store, path, callback) {
        var req = store.get(path);
        req.onsuccess = function(event) { callback(null, event.target.result); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },storeRemoteEntry:function (store, path, entry, callback) {
        var req = store.put(entry, path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },removeRemoteEntry:function (store, path, callback) {
        var req = store.delete(path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },reconcile:function (src, dst, callback) {
        var total = 0;
  
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create.push(key);
            total++;
          }
        });
  
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          var e = dst.entries[key];
          var e2 = src.entries[key];
          if (!e2) {
            remove.push(key);
            total++;
          }
        });
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var completed = 0;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return callback(err);
            }
            return;
          }
          if (++completed >= total) {
            return callback(null);
          }
        };
  
        transaction.onerror = function(e) {
          done(this.error);
          e.preventDefault();
        };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (path) {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        remove.sort().reverse().forEach(function(path) {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        });
      }};
  
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
        var flags = process["binding"]("constants");
        // Node.js 4 compatibility: it has no namespaces for constants
        if (flags["fs"]) {
          flags = flags["fs"];
        }
        NODEFS.flagsForNodeMap = {
          "1024": flags["O_APPEND"],
          "64": flags["O_CREAT"],
          "128": flags["O_EXCL"],
          "0": flags["O_RDONLY"],
          "2": flags["O_RDWR"],
          "4096": flags["O_SYNC"],
          "512": flags["O_TRUNC"],
          "1": flags["O_WRONLY"]
        };
      },bufferFrom:function (arrayBuffer) {
        // Node.js < 4.5 compatibility: Buffer.from does not support ArrayBuffer
        // Buffer.from before 4.5 was just a method inherited from Uint8Array
        // Buffer.alloc has been added with Buffer.from together, so check it instead
        return Buffer.alloc ? Buffer.from(arrayBuffer) : new Buffer(arrayBuffer);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // Node.js on Windows never represents permission bit 'x', so
            // propagate read bits to execute bits
            stat.mode = stat.mode | ((stat.mode & 292) >> 2);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsForNode:function (flags) {
        flags &= ~0x200000 /*O_PATH*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x800 /*O_NONBLOCK*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x8000 /*O_LARGEFILE*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x80000 /*O_CLOEXEC*/; // Some applications may pass it; it makes no sense for a single process.
        var newFlags = 0;
        for (var k in NODEFS.flagsForNodeMap) {
          if (flags & k) {
            newFlags |= NODEFS.flagsForNodeMap[k];
            flags ^= k;
          }
        }
  
        if (!flags) {
          return newFlags;
        } else {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            path = fs.readlinkSync(path);
            path = NODEJS_PATH.relative(NODEJS_PATH.resolve(node.mount.opts.root), path);
            return path;
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsForNode(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          // Node.js < 6 compatibility: node errors on 0 length reads
          if (length === 0) return 0;
          try {
            return fs.readSync(stream.nfd, NODEFS.bufferFrom(buffer.buffer), offset, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },write:function (stream, buffer, offset, length, position) {
          try {
            return fs.writeSync(stream.nfd, NODEFS.bufferFrom(buffer.buffer), offset, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
  
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
  
          return position;
        }}};
  
  var WORKERFS={DIR_MODE:16895,FILE_MODE:33279,reader:null,mount:function (mount) {
        assert(ENVIRONMENT_IS_WORKER);
        if (!WORKERFS.reader) WORKERFS.reader = new FileReaderSync();
        var root = WORKERFS.createNode(null, '/', WORKERFS.DIR_MODE, 0);
        var createdParents = {};
        function ensureParent(path) {
          // return the parent node, creating subdirs as necessary
          var parts = path.split('/');
          var parent = root;
          for (var i = 0; i < parts.length-1; i++) {
            var curr = parts.slice(0, i+1).join('/');
            // Issue 4254: Using curr as a node name will prevent the node
            // from being found in FS.nameTable when FS.open is called on
            // a path which holds a child of this node,
            // given that all FS functions assume node names
            // are just their corresponding parts within their given path,
            // rather than incremental aggregates which include their parent's
            // directories.
            if (!createdParents[curr]) {
              createdParents[curr] = WORKERFS.createNode(parent, parts[i], WORKERFS.DIR_MODE, 0);
            }
            parent = createdParents[curr];
          }
          return parent;
        }
        function base(path) {
          var parts = path.split('/');
          return parts[parts.length-1];
        }
        // We also accept FileList here, by using Array.prototype
        Array.prototype.forEach.call(mount.opts["files"] || [], function(file) {
          WORKERFS.createNode(ensureParent(file.name), base(file.name), WORKERFS.FILE_MODE, 0, file, file.lastModifiedDate);
        });
        (mount.opts["blobs"] || []).forEach(function(obj) {
          WORKERFS.createNode(ensureParent(obj["name"]), base(obj["name"]), WORKERFS.FILE_MODE, 0, obj["data"]);
        });
        (mount.opts["packages"] || []).forEach(function(pack) {
          pack['metadata'].files.forEach(function(file) {
            var name = file.filename.substr(1); // remove initial slash
            WORKERFS.createNode(ensureParent(name), base(name), WORKERFS.FILE_MODE, 0, pack['blob'].slice(file.start, file.end));
          });
        });
        return root;
      },createNode:function (parent, name, mode, dev, contents, mtime) {
        var node = FS.createNode(parent, name, mode);
        node.mode = mode;
        node.node_ops = WORKERFS.node_ops;
        node.stream_ops = WORKERFS.stream_ops;
        node.timestamp = (mtime || new Date).getTime();
        assert(WORKERFS.FILE_MODE !== WORKERFS.DIR_MODE);
        if (mode === WORKERFS.FILE_MODE) {
          node.size = contents.size;
          node.contents = contents;
        } else {
          node.size = 4096;
          node.contents = {};
        }
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },node_ops:{getattr:function (node) {
          return {
            dev: 1,
            ino: undefined,
            mode: node.mode,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: undefined,
            size: node.size,
            atime: new Date(node.timestamp),
            mtime: new Date(node.timestamp),
            ctime: new Date(node.timestamp),
            blksize: 4096,
            blocks: Math.ceil(node.size / 4096),
          };
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
        },lookup:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        },mknod:function (parent, name, mode, dev) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },rename:function (oldNode, newDir, newName) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },unlink:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },rmdir:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },readdir:function (node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newName, oldPath) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },readlink:function (node) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          if (position >= stream.node.size) return 0;
          var chunk = stream.node.contents.slice(position, position + length);
          var ab = WORKERFS.reader.readAsArrayBuffer(chunk);
          buffer.set(new Uint8Array(ab), offset);
          return chunk.size;
        },write:function (stream, buffer, offset, length, position) {
          throw new FS.ErrnoError(ERRNO_CODES.EIO);
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.size;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        }}};
  
  var _stdin=STATICTOP; STATICTOP += 16;;
  
  var _stdout=STATICTOP; STATICTOP += 16;;
  
  var _stderr=STATICTOP; STATICTOP += 16;;var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            this.mounted = null;
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
          };
  
          FS.FSNode.prototype = {};
  
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
  
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); }
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); }
            }
          });
        }
  
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return !!node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        var err = FS.nodePermissions(dir, 'x');
        if (err) return err;
        if (!dir.node_ops.lookup) return ERRNO_CODES.EACCES;
        return 0;
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },getMounts:function (mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          console.log('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(err) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(err);
        }
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(err);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function (type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function (path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != ERRNO_CODES.EEXIST) throw e;
          }
        }
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        if (!PATH.resolve(oldpath)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        if (!old_dir || !new_dir) throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          console.log("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function (path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return PATH.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var err = FS.mayOpen(node, flags);
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err('read file: ' + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function (stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function (stream) {
        return stream.fd === null;
      },llseek:function (stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },msync:function (stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function (stream) {
        return 0;
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device;
        if (typeof crypto !== 'undefined') {
          // for modern web browsers
          var randomBuffer = new Uint8Array(1);
          random_device = function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
        } else if (ENVIRONMENT_IS_NODE) {
          // for nodejs
          random_device = function() { return require('crypto')['randomBytes'](1)[0]; };
        } else {
          // default for ES5 platforms
          random_device = function() { return (Math.random()*256)|0; };
        }
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function () {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
  
        var stdout = FS.open('/dev/stdout', 'w');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
  
        var stderr = FS.open('/dev/stderr', 'w');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno, node) {
          //err(stackTrace()); // useful for debugging
          this.node = node;
          this.setErrno = function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
          // Node.js compatibility: assigning on this.stack fails on Node 4 (but fixed on Node 8)
          if (this.stack) Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
          if (this.stack) this.stack = demangleAll(this.stack);
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
          'IDBFS': IDBFS,
          'NODEFS': NODEFS,
          'WORKERFS': WORKERFS,
        };
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        }
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        }
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(xhr.response || []);
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            console.log("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        }
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};var SYSCALLS={DEFAULT_POLLMASK:5,mappings:{},umask:511,calculateAt:function (dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function (func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -ERRNO_CODES.ENOTDIR;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        HEAP32[(((buf)+(36))>>2)]=stat.size;
        HEAP32[(((buf)+(40))>>2)]=4096;
        HEAP32[(((buf)+(44))>>2)]=stat.blocks;
        HEAP32[(((buf)+(48))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(52))>>2)]=0;
        HEAP32[(((buf)+(56))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=stat.ino;
        return 0;
      },doMsync:function (addr, stream, len, flags) {
        var buffer = new Uint8Array(HEAPU8.subarray(addr, addr + len));
        FS.msync(stream, buffer, 0, len, flags);
      },doMkdir:function (path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function (path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -ERRNO_CODES.EINVAL;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function (path, buf, bufsize) {
        if (bufsize <= 0) return -ERRNO_CODES.EINVAL;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function (path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -ERRNO_CODES.EINVAL;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -ERRNO_CODES.EACCES;
        }
        return 0;
      },doDup:function (path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:0,get:function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function () {
        var ret = Pointer_stringify(SYSCALLS.get());
        return ret;
      },getStreamFromFD:function () {
        var stream = FS.getStream(SYSCALLS.get());
        if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        return stream;
      },getSocketFromFD:function () {
        var socket = SOCKFS.getSocket(SYSCALLS.get());
        if (!socket) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        return socket;
      },getSocketAddress:function (allowNull) {
        var addrp = SYSCALLS.get(), addrlen = SYSCALLS.get();
        if (allowNull && addrp === 0) return null;
        var info = __read_sockaddr(addrp, addrlen);
        if (info.errno) throw new FS.ErrnoError(info.errno);
        info.addr = DNS.lookup_addr(info.addr) || info.addr;
        return info;
      },get64:function () {
        var low = SYSCALLS.get(), high = SYSCALLS.get();
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },getZero:function () {
        assert(SYSCALLS.get() === 0);
      }};function ___syscall132(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // getpgid
      var pid = SYSCALLS.get();
      if (pid && pid !== PROCINFO.pid) return -ERRNO_CODES.ESRCH;
      return PROCINFO.pgid;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall140(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // llseek
      var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
      // NOTE: offset_high is unused - Emscripten's off_t is 32-bit
      var offset = offset_low;
      FS.llseek(stream, offset, whence);
      HEAP32[((result)>>2)]=stream.position;
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall142(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // newselect
      // readfds are supported,
      // writefds checks socket open status
      // exceptfds not supported
      // timeout is always 0 - fully async
      var nfds = SYSCALLS.get(), readfds = SYSCALLS.get(), writefds = SYSCALLS.get(), exceptfds = SYSCALLS.get(), timeout = SYSCALLS.get();
  
      assert(nfds <= 64, 'nfds must be less than or equal to 64');  // fd sets have 64 bits // TODO: this could be 1024 based on current musl headers
      assert(!exceptfds, 'exceptfds not supported');
  
      var total = 0;
      
      var srcReadLow = (readfds ? HEAP32[((readfds)>>2)] : 0),
          srcReadHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0);
      var srcWriteLow = (writefds ? HEAP32[((writefds)>>2)] : 0),
          srcWriteHigh = (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0);
      var srcExceptLow = (exceptfds ? HEAP32[((exceptfds)>>2)] : 0),
          srcExceptHigh = (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var dstReadLow = 0,
          dstReadHigh = 0;
      var dstWriteLow = 0,
          dstWriteHigh = 0;
      var dstExceptLow = 0,
          dstExceptHigh = 0;
  
      var allLow = (readfds ? HEAP32[((readfds)>>2)] : 0) |
                   (writefds ? HEAP32[((writefds)>>2)] : 0) |
                   (exceptfds ? HEAP32[((exceptfds)>>2)] : 0);
      var allHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0) |
                    (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0) |
                    (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      function check(fd, low, high, val) {
        return (fd < 32 ? (low & val) : (high & val));
      }
  
      for (var fd = 0; fd < nfds; fd++) {
        var mask = 1 << (fd % 32);
        if (!(check(fd, allLow, allHigh, mask))) {
          continue;  // index isn't in the set
        }
  
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
  
        var flags = SYSCALLS.DEFAULT_POLLMASK;
  
        if (stream.stream_ops.poll) {
          flags = stream.stream_ops.poll(stream);
        }
  
        if ((flags & 1) && check(fd, srcReadLow, srcReadHigh, mask)) {
          fd < 32 ? (dstReadLow = dstReadLow | mask) : (dstReadHigh = dstReadHigh | mask);
          total++;
        }
        if ((flags & 4) && check(fd, srcWriteLow, srcWriteHigh, mask)) {
          fd < 32 ? (dstWriteLow = dstWriteLow | mask) : (dstWriteHigh = dstWriteHigh | mask);
          total++;
        }
        if ((flags & 2) && check(fd, srcExceptLow, srcExceptHigh, mask)) {
          fd < 32 ? (dstExceptLow = dstExceptLow | mask) : (dstExceptHigh = dstExceptHigh | mask);
          total++;
        }
      }
  
      if (readfds) {
        HEAP32[((readfds)>>2)]=dstReadLow;
        HEAP32[(((readfds)+(4))>>2)]=dstReadHigh;
      }
      if (writefds) {
        HEAP32[((writefds)>>2)]=dstWriteLow;
        HEAP32[(((writefds)+(4))>>2)]=dstWriteHigh;
      }
      if (exceptfds) {
        HEAP32[((exceptfds)>>2)]=dstExceptLow;
        HEAP32[(((exceptfds)+(4))>>2)]=dstExceptHigh;
      }
      
      return total;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall145(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // readv
      var stream = SYSCALLS.getStreamFromFD(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      return SYSCALLS.doReadv(stream, iov, iovcnt);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall146(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // writev
      var stream = SYSCALLS.getStreamFromFD(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      return SYSCALLS.doWritev(stream, iov, iovcnt);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall183(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // getcwd
      var buf = SYSCALLS.get(), size = SYSCALLS.get();
      if (size === 0) return -ERRNO_CODES.EINVAL;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd);
      if (size < cwdLengthInBytes + 1) return -ERRNO_CODES.ERANGE;
      stringToUTF8(cwd, buf, size);
      return buf;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall195(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // SYS_stat64
      var path = SYSCALLS.getStr(), buf = SYSCALLS.get();
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall20(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // getpid
      return PROCINFO.pid;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall221(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // fcntl64
      var stream = SYSCALLS.getStreamFromFD(), cmd = SYSCALLS.get();
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -ERRNO_CODES.EINVAL;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        case 12: {
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)]=2;
          return 0;
        }
        case 13:
        case 14:
        case 13:
        case 14:
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -ERRNO_CODES.EINVAL; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          ___setErrNo(ERRNO_CODES.EINVAL);
          return -1;
        default: {
          return -ERRNO_CODES.EINVAL;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall33(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // access
      var path = SYSCALLS.getStr(), amode = SYSCALLS.get();
      return SYSCALLS.doAccess(path, amode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall4(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // write
      var stream = SYSCALLS.getStreamFromFD(), buf = SYSCALLS.get(), count = SYSCALLS.get();
      return FS.write(stream, HEAP8,buf, count);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall41(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // dup
      var old = SYSCALLS.getStreamFromFD();
      return FS.open(old.path, old.flags, 0).fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall5(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // open
      var pathname = SYSCALLS.getStr(), flags = SYSCALLS.get(), mode = SYSCALLS.get() // optional TODO
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall54(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // ioctl
      var stream = SYSCALLS.getStreamFromFD(), op = SYSCALLS.get();
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)]=0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return -ERRNO_CODES.EINVAL; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall6(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // close
      var stream = SYSCALLS.getStreamFromFD();
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall91(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // munmap
      var addr = SYSCALLS.get(), len = SYSCALLS.get();
      // TODO: support unmmap'ing parts of allocations
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        SYSCALLS.doMsync(addr, stream, len, info.flags)
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___unlock() {}

  function __exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      exit(status);
    }

  function _abort() {
      Module['abort']();
    }

  function _exit(status) {
      __exit(status);
    }

  function _getenv(name) {
      // char *getenv(const char *name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/getenv.html
      if (name === 0) return 0;
      name = Pointer_stringify(name);
      if (!ENV.hasOwnProperty(name)) return 0;
  
      if (_getenv.ret) _free(_getenv.ret);
      _getenv.ret = allocateUTF8(ENV[name]);
      return _getenv.ret;
    }

  function _kill(pid, sig) {
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/kill.html
      // Makes no sense in a single-process environment.
  	  // Should kill itself somtimes depending on `pid`
      err('Calling stub instead of kill()');
      ___setErrNo(ERRNO_CODES.EPERM);
      return -1;
    }

   

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 

   

   

  
  function _usleep(useconds) {
      // int usleep(useconds_t useconds);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/usleep.html
      // We're single-threaded, so use a busy loop. Super-ugly.
      var msec = useconds / 1000;
      if ((ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && self['performance'] && self['performance']['now']) {
        var start = self['performance']['now']();
        while (self['performance']['now']() - start < msec) {
          // Do nothing.
        }
      } else {
        var start = Date.now();
        while (Date.now() - start < msec) {
          // Do nothing.
        }
      }
      return 0;
    }
  Module["_usleep"] = _usleep;function _nanosleep(rqtp, rmtp) {
      // int nanosleep(const struct timespec  *rqtp, struct timespec *rmtp);
      var seconds = HEAP32[((rqtp)>>2)];
      var nanoseconds = HEAP32[(((rqtp)+(4))>>2)];
      if (rmtp !== 0) {
        HEAP32[((rmtp)>>2)]=0;
        HEAP32[(((rmtp)+(4))>>2)]=0;
      }
      return _usleep((seconds * 1e6) + (nanoseconds / 1000));
    }

   

  function _setenv(envname, envval, overwrite) {
      // int setenv(const char *envname, const char *envval, int overwrite);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/setenv.html
      if (envname === 0) {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return -1;
      }
      var name = Pointer_stringify(envname);
      var val = Pointer_stringify(envval);
      if (name === '' || name.indexOf('=') !== -1) {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return -1;
      }
      if (ENV.hasOwnProperty(name) && !overwrite) return 0;
      ENV[name] = val;
      ___buildEnvironment(__get_environ());
      return 0;
    }

  function _sigaction(signum, act, oldact) {
      //int sigaction(int signum, const struct sigaction *act, struct sigaction *oldact);
      err('Calling stub instead of sigaction()');
      return 0;
    }

  function _sigaddset(set, signum) {
      HEAP32[((set)>>2)]=HEAP32[((set)>>2)]| (1 << (signum-1));
      return 0;
    }

  function _sigemptyset(set) {
      HEAP32[((set)>>2)]=0;
      return 0;
    }

  function _sigismember(set, signum) {
      return HEAP32[((set)>>2)] & (1 << (signum-1));
    }

  function _sigprocmask() {
      err('Calling stub instead of sigprocmask()');
      return 0;
    }

  function _time(ptr) {
      var ret = (Date.now()/1000)|0;
      if (ptr) {
        HEAP32[((ptr)>>2)]=ret;
      }
      return ret;
    }

  function _times(buffer) {
      // clock_t times(struct tms *buffer);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/times.html
      // NOTE: This is fake, since we can't calculate real CPU time usage in JS.
      if (buffer !== 0) {
        _memset(buffer, 0, 16);
      }
      return 0;
    }

FS.staticInit();__ATINIT__.unshift(function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() });__ATMAIN__.push(function() { FS.ignorePermissions = false });__ATEXIT__.push(function() { FS.quit() });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
__ATINIT__.unshift(function() { TTY.init() });__ATEXIT__.push(function() { TTY.shutdown() });;
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); var NODEJS_PATH = require("path"); NODEFS.staticInit(); };
DYNAMICTOP_PTR = staticAlloc(4);

STACK_BASE = STACKTOP = alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");

var ASSERTIONS = true;

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}



function nullFunc_ii(x) { err("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  err("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iii(x) { err("Invalid function pointer called with signature 'iii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  err("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiii(x) { err("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  err("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vi(x) { err("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  err("Build with ASSERTIONS=2 for more info.");abort(x) }

Module['wasmTableSize'] = 112;

Module['wasmMaxTableSize'] = 112;

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    stackRestore(sp);
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    stackRestore(sp);
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

Module.asmGlobalArg = {};

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "abortStackOverflow": abortStackOverflow, "nullFunc_ii": nullFunc_ii, "nullFunc_iii": nullFunc_iii, "nullFunc_iiii": nullFunc_iiii, "nullFunc_vi": nullFunc_vi, "invoke_ii": invoke_ii, "invoke_iii": invoke_iii, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "___buildEnvironment": ___buildEnvironment, "___lock": ___lock, "___map_file": ___map_file, "___setErrNo": ___setErrNo, "___syscall132": ___syscall132, "___syscall140": ___syscall140, "___syscall142": ___syscall142, "___syscall145": ___syscall145, "___syscall146": ___syscall146, "___syscall183": ___syscall183, "___syscall195": ___syscall195, "___syscall20": ___syscall20, "___syscall221": ___syscall221, "___syscall33": ___syscall33, "___syscall4": ___syscall4, "___syscall41": ___syscall41, "___syscall5": ___syscall5, "___syscall54": ___syscall54, "___syscall6": ___syscall6, "___syscall91": ___syscall91, "___unlock": ___unlock, "__exit": __exit, "_abort": _abort, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_exit": _exit, "_getenv": _getenv, "_kill": _kill, "_nanosleep": _nanosleep, "_setenv": _setenv, "_sigaction": _sigaction, "_sigaddset": _sigaddset, "_sigemptyset": _sigemptyset, "_sigismember": _sigismember, "_sigprocmask": _sigprocmask, "_time": _time, "_times": _times, "_usleep": _usleep, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX };
// EMSCRIPTEN_START_ASM
var asm =Module["asm"]// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

var real____emscripten_environ_constructor = asm["___emscripten_environ_constructor"]; asm["___emscripten_environ_constructor"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real____emscripten_environ_constructor.apply(null, arguments);
};

var real____errno_location = asm["___errno_location"]; asm["___errno_location"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real____errno_location.apply(null, arguments);
};

var real___get_environ = asm["__get_environ"]; asm["__get_environ"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real___get_environ.apply(null, arguments);
};

var real__fflush = asm["_fflush"]; asm["_fflush"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__fflush.apply(null, arguments);
};

var real__free = asm["_free"]; asm["_free"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__free.apply(null, arguments);
};

var real__llvm_bswap_i32 = asm["_llvm_bswap_i32"]; asm["_llvm_bswap_i32"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__llvm_bswap_i32.apply(null, arguments);
};

var real__main = asm["_main"]; asm["_main"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__main.apply(null, arguments);
};

var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__malloc.apply(null, arguments);
};

var real__memmove = asm["_memmove"]; asm["_memmove"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__memmove.apply(null, arguments);
};

var real__sbrk = asm["_sbrk"]; asm["_sbrk"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__sbrk.apply(null, arguments);
};

var real_establishStackSpace = asm["establishStackSpace"]; asm["establishStackSpace"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_establishStackSpace.apply(null, arguments);
};

var real_getTempRet0 = asm["getTempRet0"]; asm["getTempRet0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_getTempRet0.apply(null, arguments);
};

var real_setTempRet0 = asm["setTempRet0"]; asm["setTempRet0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_setTempRet0.apply(null, arguments);
};

var real_setThrew = asm["setThrew"]; asm["setThrew"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_setThrew.apply(null, arguments);
};

var real_stackAlloc = asm["stackAlloc"]; asm["stackAlloc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_stackAlloc.apply(null, arguments);
};

var real_stackRestore = asm["stackRestore"]; asm["stackRestore"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_stackRestore.apply(null, arguments);
};

var real_stackSave = asm["stackSave"]; asm["stackSave"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_stackSave.apply(null, arguments);
};
Module["asm"] = asm;
var ___emscripten_environ_constructor = Module["___emscripten_environ_constructor"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["___emscripten_environ_constructor"].apply(null, arguments) };
var ___errno_location = Module["___errno_location"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["___errno_location"].apply(null, arguments) };
var __get_environ = Module["__get_environ"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["__get_environ"].apply(null, arguments) };
var _emscripten_replace_memory = Module["_emscripten_replace_memory"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_emscripten_replace_memory"].apply(null, arguments) };
var _fflush = Module["_fflush"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_fflush"].apply(null, arguments) };
var _free = Module["_free"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_free"].apply(null, arguments) };
var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_llvm_bswap_i32"].apply(null, arguments) };
var _main = Module["_main"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_main"].apply(null, arguments) };
var _malloc = Module["_malloc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_malloc"].apply(null, arguments) };
var _memcpy = Module["_memcpy"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_memcpy"].apply(null, arguments) };
var _memmove = Module["_memmove"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_memmove"].apply(null, arguments) };
var _memset = Module["_memset"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_memset"].apply(null, arguments) };
var _sbrk = Module["_sbrk"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_sbrk"].apply(null, arguments) };
var establishStackSpace = Module["establishStackSpace"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["establishStackSpace"].apply(null, arguments) };
var getTempRet0 = Module["getTempRet0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["getTempRet0"].apply(null, arguments) };
var runPostSets = Module["runPostSets"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["runPostSets"].apply(null, arguments) };
var setTempRet0 = Module["setTempRet0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["setTempRet0"].apply(null, arguments) };
var setThrew = Module["setThrew"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["setThrew"].apply(null, arguments) };
var stackAlloc = Module["stackAlloc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["stackAlloc"].apply(null, arguments) };
var stackRestore = Module["stackRestore"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["stackRestore"].apply(null, arguments) };
var stackSave = Module["stackSave"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["stackSave"].apply(null, arguments) };
var dynCall_ii = Module["dynCall_ii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_ii"].apply(null, arguments) };
var dynCall_iii = Module["dynCall_iii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iii"].apply(null, arguments) };
var dynCall_iiii = Module["dynCall_iiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iiii"].apply(null, arguments) };
var dynCall_vi = Module["dynCall_vi"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_vi"].apply(null, arguments) };
;



// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;

if (!Module["intArrayFromString"]) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["intArrayToString"]) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["ccall"]) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["cwrap"]) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["setValue"]) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getValue"]) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["allocate"]) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["getMemory"] = getMemory;
if (!Module["Pointer_stringify"]) Module["Pointer_stringify"] = function() { abort("'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["AsciiToString"]) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToAscii"]) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["UTF8ArrayToString"]) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["UTF8ToString"]) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToUTF8Array"]) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToUTF8"]) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["lengthBytesUTF8"]) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["UTF16ToString"]) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToUTF16"]) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["lengthBytesUTF16"]) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["UTF32ToString"]) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToUTF32"]) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["lengthBytesUTF32"]) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["allocateUTF8"]) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stackTrace"]) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnPreRun"]) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnInit"]) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnPreMain"]) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnExit"]) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnPostRun"]) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["writeStringToMemory"]) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["writeArrayToMemory"]) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["writeAsciiToMemory"]) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
if (!Module["FS"]) Module["FS"] = function() { abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS_createFolder"] = FS.createFolder;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createLink"] = FS.createLink;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
if (!Module["GL"]) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["staticAlloc"]) Module["staticAlloc"] = function() { abort("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["dynamicAlloc"]) Module["dynamicAlloc"] = function() { abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["warnOnce"]) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["loadDynamicLibrary"]) Module["loadDynamicLibrary"] = function() { abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["loadWebAssemblyModule"]) Module["loadWebAssemblyModule"] = function() { abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getLEB"]) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getFunctionTables"]) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["alignFunctionTables"]) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["registerFunctions"]) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addFunction"]) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["removeFunction"]) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getFuncWrapper"]) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["prettyPrint"]) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["makeBigInt"]) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["dynCall"]) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getCompilerSetting"]) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stackSave"]) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stackRestore"]) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stackAlloc"]) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["establishStackSpace"]) Module["establishStackSpace"] = function() { abort("'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["print"]) Module["print"] = function() { abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["printErr"]) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };if (!Module["ALLOC_NORMAL"]) Object.defineProperty(Module, "ALLOC_NORMAL", { get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Module["ALLOC_STACK"]) Object.defineProperty(Module, "ALLOC_STACK", { get: function() { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Module["ALLOC_STATIC"]) Object.defineProperty(Module, "ALLOC_STATIC", { get: function() { abort("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Module["ALLOC_DYNAMIC"]) Object.defineProperty(Module, "ALLOC_DYNAMIC", { get: function() { abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Module["ALLOC_NONE"]) Object.defineProperty(Module, "ALLOC_NONE", { get: function() { abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });




/**
 * @constructor
 * @extends {Error}
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

Module['callMain'] = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  ensureInitRuntime();

  var argc = args.length+1;
  var argv = stackAlloc((argc + 1) * 4);
  HEAP32[argv >> 2] = allocateUTF8OnStack(Module['thisProgram']);
  for (var i = 1; i < argc; i++) {
    HEAP32[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1]);
  }
  HEAP32[(argv >> 2) + argc] = 0;


  try {

    var ret = Module['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
      exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      err('exception thrown: ' + toLog);
      Module['quit'](1, e);
    }
  } finally {
    calledMain = true;
  }
}




/** @type {function(Array=)} */
function run(args) {
  args = args || Module['arguments'];

  if (runDependencies > 0) {
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (Module['_main'] && shouldRunNow) Module['callMain'](args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in NO_FILESYSTEM
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var print = out;
  var printErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    var hasFS = true;
    if (hasFS) {
      ['stdout', 'stderr'].forEach(function(name) {
        var info = FS.analyzePath('/dev/' + name);
        if (!info) return;
        var stream = info.object;
        var rdev = stream.rdev;
        var tty = TTY.ttys[rdev];
        if (tty && tty.output && tty.output.length) {
          has = true;
        }
      });
    }
  } catch(e) {}
  out = print;
  err = printErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set NO_EXIT_RUNTIME to 0 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

function exit(status, implicit) {
  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && Module['noExitRuntime'] && status === 0) {
    return;
  }

  if (Module['noExitRuntime']) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      err('exit(' + status + ') called, but NO_EXIT_RUNTIME is set, so halting execution but not exiting the runtime or preventing further async execution (build with NO_EXIT_RUNTIME=0, if you want a true shutdown)');
    }
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  Module['quit'](status, new ExitStatus(status));
}

var abortDecorators = [];

function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  if (what !== undefined) {
    out(what);
    err(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '';
  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
  if (abortDecorators) {
    abortDecorators.forEach(function(decorator) {
      output = decorator(output, what);
    });
  }
  throw output;
}
Module['abort'] = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}

Module["noExitRuntime"] = true;

run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}



