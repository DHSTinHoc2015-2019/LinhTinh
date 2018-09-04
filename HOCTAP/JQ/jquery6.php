<html>
<head>
    <title>Học jQuery</title>
    <meta charset="utf-8">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</head>
<body>
    <form action="#" method="POST">
        <p>
            <input type="text" placeholder="Nhập tên bạn...">
        <p>
        <button type="submit">Gửi</button>
    </form>

    <script>
        $(function(){
            $("form").submit(function(e) {
                alert("Xin chào");
                e.preventDefault();
           });
        })
    </script>
</body>
</html>
