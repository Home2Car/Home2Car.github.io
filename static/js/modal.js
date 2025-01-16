{{ $js := resources.Get "js/modal.js" }}
<script src="{{ $js.RelPermalink }}"></script>