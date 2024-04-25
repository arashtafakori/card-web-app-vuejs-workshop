<div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" style="font-size: 14px">Edit booklet</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="handleEditModelClose"></button>
            </div>
            <div class="modal-body">
                <EditBookletTitle :booklet="booklet" @hide="handleEditModelClose"></EditBookletTitle>
            </div>
        </div>
    </div>
</div>