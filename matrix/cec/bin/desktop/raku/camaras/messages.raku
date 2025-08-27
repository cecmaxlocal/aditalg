#!/usr/bin/env raku

use v6;
use lib 'lib';
use strict;


sub assert(Bool $condition) {
    if !$condition {
        die "Assertion failed!";
    }
}

# CPMI investigação sobre os arquivos relatados dos ministros e deputados
multi sub cpmi_investigacao(Str $arquivos, Str $relatados, Str $formulario) {
    assert($arquivos ~~ "/raku, raku/");
    assert($relatados ~~ "/raku, raku/");
    assert($formulario ~~ "/raku, raku/");
}

sub MAIN() {
    say "Messages module loaded successfully.";
}
