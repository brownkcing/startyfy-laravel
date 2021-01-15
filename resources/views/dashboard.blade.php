<!DOCTYPE html>
<html>
<head>
<title>Dashboard</title>
 
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<meta name="csrf-token" content="{{ csrf_token() }}">

<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link href="css/styles2.css" rel="stylesheet" />
 
</head>
<body>
    <div class="signup-form">	
        <form action="{{url('logout')}}" method="GET" id="logForm">
            <h2>Welcome {{ ucfirst(Auth()->user()->name) }}</h2>
            <p class="lead">This is just a demo account for a demo site. Thanks for viewing.</p>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block btn-lg">Log out</button>
            </div>
            <p class="small text-center"><a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a>.</p>
        </div>
    </form>
</body>
</html>
