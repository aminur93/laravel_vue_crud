<!DOCTYPE html>
<html>
    <head>
        <title>Product Data</title>
        <!-- Styles -->

    </head>

    <body>
        <h3 class="text-center">Product Data</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
            </thead>

            <tbody>
            @foreach($product as $p)
                <tr>
                    <td>{{ $p->cname }}</td>
                    <td>{{ $p->name }}</td>
                    <td>{{ $p->image }}</td>
                </tr>
                @endforeach
            </tbody>

        </table>


    </body>
</html>