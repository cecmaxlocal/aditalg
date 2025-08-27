#!/usr/bin/env perl

use strict;
use warnings;

sub assert {
    my ($condition) = @_;
    die "Assertion failed!" unless $condition;
}

# CPMI investigação sobre os arquivos relatados dos ministros e deputados
sub cpmi_investigacao {
    my ($arquivos, $relatados, $formulario) = @_;
    assert($arquivos =~ /raku, raku/);
    assert($relatados =~ /raku, raku/);
    assert($formulario =~ /raku, raku/);
}

sub main {
    print "Messages module loaded successfully.\n";
}
