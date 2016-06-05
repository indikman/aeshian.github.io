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
            
            <h3 class="blue">Submissions - 2016</h3>
                
            <!-- Start of intro -->
            <div class="intro">
                <h5>Submission rate : 20%</h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Click to reveal who is trollboy</a>
                    
            </div><!-- End of intro -->
                
        </div><!-- End of align center -->
            
        <div class="clear"></div>
        <hr />
            
            
            
            
        <h5>Accepted Papers</h5>
            
        <table style="width: 100%">
            <?php
                for($i=0; $i<20; $i++)
                {
                    $title = $i+1 . ". Voice based email/Skype/call system for the blind -Desktop and Android application";//Use the titles from a databasse or just hard code it with links
                    $pdflink = "#";
                    echo '<tr><td style="vertical-align:middle"><h7>' . $title . '</h7></td><td><div class="button_red"><a href="'.$pdflink.'">PDF</a></div></td></tr>';
                    
                }
            ?>
        </table>
            
            
            
            
        <div class="clear"></div>
        <hr />    
    </div>
        
<?php include './copyright.php';?>
    
</body>