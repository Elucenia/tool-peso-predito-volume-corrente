/* tool-peso-predito-volume-corrente · Elucenia · https://github.com/Elucenia/tool-peso-predito-volume-corrente
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"peso-predito-volume-corrente","title":"Peso predito e volume corrente protetor","fields":[["sexo","Sexo","radio",{"opts":{"M":"Masculino","F":"Feminino"}}],["altura","Altura","num",{"min":120,"max":220,"unit":"cm","ph":"170"}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
