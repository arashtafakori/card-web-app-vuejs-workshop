<div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body p-4">
                <DeleteBookletPermanently :booklet="booklet" @hide="handleDeletePermanentlyModelClose">
                </DeleteBookletPermanently>
            </div>
        </div>
    </div>
</div>