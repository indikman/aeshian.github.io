<?php include './header.php';?>
<body>
    <!-- Start of header wrapper -->
    <div id="header_wrapper">
        <!-- Start of content wrapper -->
        <div class="content_wrapper">
        <?php 
        include './titleheader.php';
        ?>
        </div>
    </div>
    <div class="content_wrapper">
        
        <div class="aligncenter">
            
            <h3 class="blue">Announcements</h3>
                
            <!-- Start of intro -->
            <div class="intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Click to reveal who is trollboy</a>
                    
            </div><!-- End of intro -->
                
        </div><!-- End of align center -->
            
        <div class="clear"></div>
        <hr />
            
        <!-- Start of Blog content -->
        <div>
            <?php
                for($i=0; $i<5; $i++)
                {
                    echo '<!-- Start of blog wrapper -->
            <div class="blog_wrapper">
                <h5> ' . ($i+1) . ') You will be suprised to hear who is trollboy!</h5>
                    
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.....</p>
                    
                <!-- Start of post details -->
                <div class="post_details">
                    
                    <!-- Start of post date -->
                    <div class="post_date">
                        06.06.2016
                            
                    </div><!-- End of post date -->
                        
                    <!-- Start of post read more -->
                    <div class="post_read_more">
                        <a href="#">Continue Reading<img src="img/red-hoverarrow.png" width="15" height="15" alt="red arrow" /></a>
                            
                    </div><!-- End of post read more -->
                        
                    <!-- Clear Fix --><div class="clear"></div>
                        
                </div><!-- End of post details -->
                    
            </div><!-- End of blog wrapper -->';
                    
                }
            
            ?>
            
        </div><!-- End of left content -->
            
        <div class="clear"></div>
        <hr />    
    </div>
        
<?php include './copyright.php';?>
    
</body>