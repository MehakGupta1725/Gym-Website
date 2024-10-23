<script>
    $(document).ready(function() {
        $(".gallery img").click(function() {
            var src = $(this).attr("src");
            $("body").append(`
                <div class="modal fade show" tabindex="-1" role="dialog" style="display:block;">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Image Preview</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="${src}" class="img-fluid" alt="Image Preview">
                            </div>
                        </div>
                    </div>
                </div>
            `);
            $(".modal").click(function() {
                $(this).remove();
            });
        });
    });
</script>

