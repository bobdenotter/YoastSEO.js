var SpanishParticiple = require( "../../../../js/researches/spanish/passiveVoice/SpanishParticiple.js" );
var checkException = require ( "../../../../js/researches/passiveVoice/checkException.js" );

describe( "A test for checking the Spanish participle", function() {
	it( "checks the properties of the Spanish participle object with a passive", function() {
		var mockParticiple = new SpanishParticiple( "escrito", "El libro fue escrito por mi amiga.", { auxiliaries: [ "fue" ], type: "irregular" } );
		expect( mockParticiple.getParticiple() ).toBe( "escrito" );
		expect( mockParticiple.determinesSentencePartIsPassive() ).toBe( true );
	});

	it( "checks the properties of the Spanish participle object with a direct precedence exception", function() {
		// Direct precedence exception word: un.
		let mockParticiple = new SpanishParticiple( "sentido", "fue un sentido monumental y grandilocuente.", { auxiliaries: [ "fue" ], type: "irregular" } );
		expect( mockParticiple.directPrecedenceException( mockParticiple._sentencePart, 7 ) ).toBe( true );
		expect( mockParticiple.determinesSentencePartIsPassive() ).toBe( false );
	});

	it( "ensures that the sentence part is not set to passive if the participle is empty.", function() {
		let mockParticiple = new SpanishParticiple( "escrito", "fue escrito por mi amiga.", { auxiliaries: [ "fue" ], type: "regular" } );
		mockParticiple._participle = null;
		checkException.call( mockParticiple );
		expect( mockParticiple.directPrecedenceException( mockParticiple._sentencePart, 4 ) ).toBe( false );
		expect( mockParticiple.determinesSentencePartIsPassive() ).toBe( false );
	});
});
