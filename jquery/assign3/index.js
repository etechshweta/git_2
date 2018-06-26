                    $(document).ready(function () {
                    $("#SingleClick").click(function (b) {
                        alert("Single Click");
                    });

                    $("#DoubleClick").dblclick(function () {
                        alert("Double Click");
                    });

                    // $("#MouseDown").mousedown(function (b) {
                    //     alert(b.which);
                    // });

                    // $("#MouseUp").mouseup(function () {
                    //     alert("Mouse Button Up");
                    // });

                    // $("#MouseMove").mousemove(function (c) {
                    //     $(this).html("Mouse is moving. Coordinates are " + c.pageX + " by " + c.pageY);
                    // });

                    $("#MouseOver").mouseover(function () {
                        $(this).css("background-color", "#306d6b");
                        $(this).fadeOut();
                        $(this).fadeIn();
                    });

                    $("#MouseEnter").mouseenter(function () {
                        $(this).css("background-color", "#64775c");

                        $(this).fadeOut();
                        $(this).fadeIn();
                    });

                    $("#MouseLeave").mouseleave(function () {
                        $(this).css("background-color", "#402f4f");
                        
                        $(this).fadeOut();
                        $(this).fadeIn();
                    });

                    $("#MouseHover").hover(function () {
                        $(this).css("background-color", "#f4511e");
                    }, function () {
                        $(this).css("background-color", "white");
                    });

                    $("#Toggle").toggle(function () {
                        $(this).css("background-color", "#224070");
                    }, function () {
                        $(this).css("background-color", "red");
                    }, function () {
                        $(this).css("background-color", "yellow");
                    });
                });
                
        