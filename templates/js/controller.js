var app = angular.module('studentDashboard',['ui.grid','ui.bootstrap',
'ui.grid.autoResize','ui.grid.cellNav','ui.grid.pagination']);
app.controller('studentController',function($scope)
{
    $scope.total_grievance = 18;
    $scope.estimated_grievance = 1;
    $scope.satisfied_grievance = 8;
    $scope.pending_grievance = 9;
    $scope.total_grievance_date = "Yesterday 02:30PM"
    $scope.estimated_grievance_date = "Today 03:00PM"
    $scope.satisfied_grievance_date = "25 Nov 05:30PM"
    $scope.pending_grievance_date = "Yesterday 02:30PM"


    $scope.choose_branch=[{"branch":"Computer Science Engineerng"},{"branch":"Information Technology"},
    {"branch":"Mechnaical Engineering"},
    {"branch":"Electrical Engineering"},{"branch":"Electroncis Engineering"}];


    $scope.grievance=[{"category":"Admission Cell"},{"category":"Accounts Department"},
    {"category":"Placement & training cell"},
    {"category":"Security"},{"category":"Hostel"},{"category":"Ragging"},{"category":"Hostel"}
    ,{"category":"Canteen"},{"category":"Transport"}];

    $scope.faq =[{ "ques":"how to file grievance? How we will know it is resolved",
                    "ans": "You will be notified when it will solved"},
                    { "ques":"how to file grievance? ",
                    "ans": "You will be notified when it will solved. This is test"},
                    { "ques":"how to file grievance? ",
                    "ans": "You will be notified when it will solved. This is test"},
                    { "ques":"how to file grievance? How we will know it is resolved",
                    "ans": "You will be notified when it will solved"},
                    { "ques":"how to file grievance? How we will know it is resolved",
                    "ans": "You will be notified when it will solved"},

                    
                ];
    
   
                $scope.open_grievance_data=[
    
    {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    },
    {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }, {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    },];

    $scope.grievance_data=[
        {
            "grievance_id":"1",
            "Grievance_type":"1",
            "assigned_committee":"1",
            "doi":"1",
            "employed":"1",
            "eta":"1",
            "status":"1",
            "attachment":"1",
         
            
        },
        {
            "grievance_id":"1",
            "Grievance_type":"1",
            "assigned_committee":"1",
            "doi":"1",
            "employed":"1",
            "eta":"1",
            "status":"1",
            "attachment":"1",
            
            
        },
        {
            "grievance_id":"1",
            "Grievance_type":"1",
            "assigned_committee":"1",
            "doi":"1",
            "employed":"1",
            "eta":"1",
            "status":"1",
            "attachment":"1",
            
            
        },
        {
            "grievance_id":"1",
            "Grievance_type":"1",
            "assigned_committee":"1",
            "doi":"1",
            "employed":"1",
            "eta":"1",
            "status":"1",
            "attachment":"1",
            
            
        },];

        $scope.numRows=10;
     $scope.gridOptions = {
        data:$scope.open_grievance_data,
            enableGridMenus:false,
            enableSorting: false,
            enableFiltering:false,
            enableCellEditing:false,
            enableColumnMenus: false,
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            totalItems: $scope.open_grievance_data.length,
            paginationPageSize: $scope.numRows,
            minRowsToShow: $scope.open_grievance_data.length < $scope.numRows ? $scope.open_grievance_data : $scope.numRows,
            enablePaginationControls: false,


            columnDefs: [
                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                {name :"doi" ,display: 'Date of Issue' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {name:"employed" , display: 'employed',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"eta", display: 'ETA' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='image/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                {name:"action",display: 'Action', cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='image/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'>&nbsp;&nbsp;<img src='image/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "},
                        ],

                
             };

             $scope.grievance = {
                enableGridMenus:false,
                enableSorting: false,
                enableFiltering:false,
                enableCellEditing:false,
                enableColumnMenus: false,
                enableHorizontalScrollbar:0,
                enableVerticalScrollbar:1,
                paginationPageSizes:[5,10,20,30],
                paginationPageSize:10,
                useExternalPagination: true,
    
        columnDefs: [
                    { name : "grievance_id",display: 'Grievance ID', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                    { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                    {name :"doi" ,display: 'Date of Issue' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                    {name:"employed" , display: 'employed',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    {name:"eta", display: 'ETA' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='image/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                    
                            ],
    
                    data:$scope.grievance_data
        };

        $scope.grievance_search = {
            enableGridMenus:false,
            enableSorting: false,
            enableFiltering:false,
            enableCellEditing:false,
            enableColumnMenus: false,
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:1,
            paginationPageSizes:[5,10,20,30],
            paginationPageSize:10,
            useExternalPagination: true,

    columnDefs: [
                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                {name :"doi" ,display: 'Date of Issue' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {name:"employed" , display: 'employed',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"eta", display: 'ETA' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='image/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                
                        ],

                data:$scope.grievance_data
    };

           


});






